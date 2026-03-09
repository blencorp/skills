---
name: usmds
description: "Use when building React Native mobile apps with the U.S. Mobile Design System (USMDS) by blencorp. Triggers on: imports from @/components/ui/, NativeWind className styling, npx @blen/usmds commands, react-native-usmds, federal mobile app design, USMDS components (Alert, Button, Card, Accordion, AlertDialog, Badge, Avatar, TextInput, Checkbox, RadioButton, Select, Textarea). Also use when setting up NativeWind + Tailwind theming for React Native, accessible mobile UI following federal design standards, or @rn-primitives/portal overlay components."
---

# USMDS Development Guide

Build accessible React Native mobile interfaces using the U.S. Mobile Design System (USMDS) with NativeWind styling.

## Quick Reference

- **Components**: See [references/components.md](references/components.md) for all components with imports and usage examples
- **Setup**: See [references/setup.md](references/setup.md) for project initialization, Metro/Babel/Tailwind config
- **Theming**: See [references/theming.md](references/theming.md) for design tokens, colors, and custom theme configuration

## Core Architecture

USMDS has three layers:

1. **Components** — Pre-built accessible UI from `@/components/ui/*` (Button, Card, Alert, etc.)
2. **NativeWind Styling** — Tailwind CSS classes via the `className` prop
3. **Theme Tokens** — CSS custom properties (HSL-based) for consistent design language

Components are imported individually. Styling uses NativeWind (Tailwind for React Native). Theming flows through `tailwind.config.js` CSS variables.

## Project Setup (Quick)

```bash
# Automatic setup (recommended)
npx @blen/usmds init -y

# Or specify project path
npx @blen/usmds init -c /path/to/project
```

This generates: `tailwind.config.js`, `metro.config.js`, `babel.config.js`, `global.css`, and TypeScript definitions. See [references/setup.md](references/setup.md) for manual setup.

## Component Usage Pattern

All components import from `@/components/ui/`:

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

<Button onPress={handlePress}>
  <Text>Click me</Text>
</Button>
```

**Key convention**: USMDS `Button` and most interactive components require `<Text>` children — they do not accept bare strings.

## Styling with NativeWind

Apply Tailwind classes via `className`:

```tsx
<Button className="w-full mt-4">
  <Text>Full Width Button</Text>
</Button>

<View className="bg-background border border-border rounded-lg p-4">
  <Text className="text-foreground font-medium">Themed content</Text>
  <Text className="text-muted-foreground text-sm">Supporting text</Text>
</View>
```

## Accessibility

USMDS components follow WAI-ARIA patterns for React Native:

- **Alert** components automatically get the `alert` accessibility role for screen readers
- **AlertDialog** provides structured confirmation with accessible header/footer
- **Accordion** follows WAI-ARIA accordion pattern with proper expand/collapse semantics
- Always wrap text in `<Text>` components (React Native requirement)
- Use `variant="destructive"` for error/danger states — provides semantic meaning

## PortalHost (Required for Overlays)

Components like AlertDialog, Tooltip, Popover, and DropdownMenu require `PortalHost` in your root layout:

```tsx
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

**Without PortalHost**, overlay components will not render. Add it as the last child in your root layout.

## Common Patterns

### Form with Validation

```tsx
import { View } from 'react-native';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { TextInput } from '@/components/ui/textinput';
import { Checkbox } from '@/components/ui/checkbox';

const [errors, setErrors] = useState({});

<View className="flex-1 p-4 gap-4">
  <View>
    <Text className="mb-2 font-medium">Email</Text>
    <TextInput
      value={email}
      onChangeText={setEmail}
      placeholder="you@example.com"
      keyboardType="email-address"
      autoCapitalize="none"
      className={errors.email ? 'border-destructive' : ''}
    />
    {errors.email && (
      <Text className="text-destructive text-sm mt-1">{errors.email}</Text>
    )}
  </View>
  <Button onPress={handleSubmit} className="mt-4">
    <Text>Submit</Text>
  </Button>
</View>
```

### Card Layout

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

<Card className="mb-4">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle</CardDescription>
  </CardHeader>
  <CardContent>
    <Text className="text-muted-foreground">Body content</Text>
    <View className="flex-row gap-2 mt-3">
      <Badge><Text>Tag 1</Text></Badge>
      <Badge variant="secondary"><Text>Tag 2</Text></Badge>
    </View>
  </CardContent>
  <CardFooter className="gap-2">
    <Button variant="outline" size="sm" className="flex-1">
      <Text>Cancel</Text>
    </Button>
    <Button size="sm" className="flex-1">
      <Text>Confirm</Text>
    </Button>
  </CardFooter>
</Card>
```

### Confirmation Dialog

```tsx
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline"><Text>Delete</Text></Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel><Text>Cancel</Text></AlertDialogCancel>
      <AlertDialogAction><Text>Continue</Text></AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

## Theme Colors

Theme uses HSL CSS variables mapped in `tailwind.config.js`:

| Token | Usage |
|-------|-------|
| `background` / `foreground` | Page background, primary text |
| `primary` / `primary-foreground` | Primary actions, emphasis |
| `secondary` / `secondary-foreground` | Secondary actions |
| `destructive` / `destructive-foreground` | Error states, danger actions |
| `muted` / `muted-foreground` | Subtle backgrounds, secondary text |
| `accent` / `accent-foreground` | Highlights, active states |
| `card` / `card-foreground` | Card surfaces |
| `border` / `input` / `ring` | Borders, input borders, focus rings |

See [references/theming.md](references/theming.md) for full configuration.
