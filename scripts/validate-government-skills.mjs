#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const rosterPath = path.join(root, "docs", "government-skill-roster.json");
if (!fs.existsSync(rosterPath)) {
  console.error(`Cannot find ${rosterPath}. Run this script from the repository root.`);
  process.exit(1);
}
const roster = JSON.parse(fs.readFileSync(rosterPath, "utf8"));
const errors = [];
const warnings = [];

function fail(name, message) {
  errors.push(`${name}: ${message}`);
}

function warn(name, message) {
  warnings.push(`${name}: ${message}`);
}

function parseFrontmatter(text, name) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    fail(name, "missing YAML frontmatter");
    return {};
  }
  const fields = {};
  for (const line of match[1].split("\n")) {
    const field = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (field) {
      if (/^[>|][+-]?$/.test(field[2].trim())) {
        fail(name, `frontmatter field "${field[1]}" uses a multi-line YAML value, which this validator cannot parse; use a single-line value`);
      }
      fields[field[1]] = field[2].replace(/^['"]|['"]$/g, "");
    }
  }
  return fields;
}

const rosterNames = new Set();
for (const entry of roster) {
  if (rosterNames.has(entry.name)) fail(entry.name, "duplicate roster entry");
  rosterNames.add(entry.name);
}

// Every skill directory under federal/ and states/ must be in the roster,
// or it is silently unvalidated. Root skills may be deliberately unrostered.
const rosterPaths = new Set(roster.map(entry => entry.path ?? entry.name));
for (const layer of ["federal", "states"]) {
  const layerDir = path.join(root, layer);
  if (!fs.existsSync(layerDir)) continue;
  for (const dir of fs.readdirSync(layerDir)) {
    const rel = `${layer}/${dir}`;
    if (fs.existsSync(path.join(layerDir, dir, "SKILL.md")) && !rosterPaths.has(rel)) {
      fail(rel, "skill directory is missing from docs/government-skill-roster.json");
    }
  }
}

for (const entry of roster) {
  const dir = path.join(root, entry.path ?? entry.name);
  const skillPath = path.join(dir, "SKILL.md");
  if (!fs.existsSync(skillPath)) {
    fail(entry.name, "missing SKILL.md");
    continue;
  }

  const skill = fs.readFileSync(skillPath, "utf8");
  const fields = parseFrontmatter(skill, entry.name);
  if (fields.name !== entry.name) fail(entry.name, `frontmatter name is "${fields.name ?? ""}"`);
  if (!/^[a-z0-9-]+$/.test(fields.name ?? "")) fail(entry.name, "name must contain only lowercase letters, digits, and hyphens");
  if ((fields.name ?? "").length > 64) fail(entry.name, "name exceeds 64 characters");
  if (!fields.description) fail(entry.name, "missing description");
  if ((fields.description ?? "").length > 1024) fail(entry.name, "description exceeds 1,024 characters");
  if (/^(I |You |Use this skill)/.test(fields.description ?? "")) warn(entry.name, "description may not be third person");
  if (skill.split("\n").length > 500) fail(entry.name, "SKILL.md exceeds 500 lines");

  for (const match of skill.matchAll(/\]\((references\/[^)#]+\.md)\)/g)) {
    const ref = path.join(dir, match[1]);
    if (!fs.existsSync(ref)) fail(entry.name, `missing linked reference ${match[1]}`);
  }

  if (entry.type !== "router") {
    const implementation = path.join(dir, "references", "implementation.md");
    const sources = path.join(dir, "references", "sources.md");
    const evals = path.join(dir, "evals", "evals.json");
    if (!fs.existsSync(implementation)) fail(entry.name, "missing references/implementation.md");
    if (!fs.existsSync(sources)) fail(entry.name, "missing references/sources.md");
    else {
      const sourceText = fs.readFileSync(sources, "utf8");
      const retrieved = sourceText.match(/Retrieved (\d{4})-(\d{2})-(\d{2})/);
      if (!retrieved) fail(entry.name, 'source ledger lacks a "Retrieved YYYY-MM-DD" verification date');
      else {
        const ageDays = (Date.now() - Date.parse(retrieved[0].slice(10))) / 86_400_000;
        if (ageDays > 100) warn(entry.name, `source ledger verification date ${retrieved[0].slice(10)} is over a quarter old; recheck per the maintenance protocol`);
      }
      if (!/https:\/\//.test(sourceText)) fail(entry.name, "source ledger lacks an HTTPS source");
    }
    if (!fs.existsSync(evals)) fail(entry.name, "missing evals/evals.json");
    else {
      try {
        const parsed = JSON.parse(fs.readFileSync(evals, "utf8"));
        if (parsed.skill !== entry.name) fail(entry.name, "eval skill name does not match");
        if (!Array.isArray(parsed.cases) || parsed.cases.length < 3) fail(entry.name, "requires at least three eval cases");
        for (const [i, c] of (parsed.cases ?? []).entries()) {
          if (typeof c !== "object" || !c?.id || typeof c.prompt !== "string" || !c.prompt.trim() ||
              !Array.isArray(c.expects) || c.expects.length === 0) {
            fail(entry.name, `eval case ${i} must have id, a non-empty prompt, and a non-empty expects array`);
          }
        }
        const ids = (parsed.cases ?? []).map(c => c?.id);
        if (new Set(ids).size !== ids.length) fail(entry.name, "eval case ids must be unique");
      } catch (error) {
        fail(entry.name, `invalid eval JSON: ${error.message}`);
      }
    }
  }

}

if (warnings.length) {
  console.warn("Warnings:");
  for (const warning of warnings) console.warn(`- ${warning}`);
}
if (errors.length) {
  console.error("Errors:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const implementations = roster.filter(entry => entry.type === "implementation").length;
const routers = roster.filter(entry => entry.type === "router").length;
console.log(`Validated ${roster.length} government skills: ${implementations} implementation, ${routers} router.`);
