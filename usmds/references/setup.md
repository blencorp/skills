# USMDS Project Setup

## Automatic Setup (Recommended)

```bash
# Interactive setup
npx @blen/usmds init

# Auto-confirm all defaults
npx @blen/usmds init -y

# Specify project directory
npx @blen/usmds init -c /path/to/project
```

This creates: `tailwind.config.js`, `metro.config.js`, `babel.config.js`, `global.css`, and TypeScript definitions.

## Manual Setup

### 1. Metro Configuration

```js
// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: './global.css',
  inlineRem: 16,
});
```

### 2. Babel Configuration

```js
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
  };
};
```

### 3. Tailwind Configuration

```js
// tailwind.config.js
const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```

### 4. Root Layout (PortalHost)

Required for overlay components (AlertDialog, Tooltip, Popover, DropdownMenu):

```tsx
// app/_layout.tsx
import { PortalHost } from '@rn-primitives/portal';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack />
      <PortalHost />
    </ThemeProvider>
  );
}
```

### 5. Import Components

Components import from `@/components/ui/`:

```tsx
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
```

## Dependencies

Key packages used by USMDS:

| Package | Purpose |
|---------|---------|
| `nativewind` | Tailwind CSS for React Native |
| `tailwindcss` | Tailwind CSS engine |
| `tailwindcss-animate` | Animation utilities |
| `@rn-primitives/portal` | Portal for overlay components |
| `react-native-reanimated` | Smooth animations (Accordion, etc.) |
| `lucide-react-native` | Icon library (used in Alert, etc.) |

## Troubleshooting

### Components not rendering with styles
- Verify `global.css` is imported in your root layout
- Check `content` paths in `tailwind.config.js` match your file structure
- Ensure Metro config uses `withNativeWind`

### Overlay components (AlertDialog, Tooltip) not visible
- Add `<PortalHost />` as last child in root layout
- Import from `@rn-primitives/portal`

### NativeWind classes not applying
- Verify `babel.config.js` has `jsxImportSource: 'nativewind'`
- Verify `nativewind/babel` preset is included
- Restart Metro bundler after config changes
