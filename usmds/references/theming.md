# USMDS Theming & Design Tokens

USMDS uses HSL-based CSS custom properties mapped through `tailwind.config.js`. All colors reference CSS variables, enabling light/dark mode switching via the `class` dark mode strategy.

## Color Token System

### Token Structure

Each semantic token has a base color and a `foreground` variant for text on that color:

```
primary           → background of primary elements
primary-foreground → text color on primary backgrounds
```

### All Tokens

| Token | Base Usage | Foreground Usage |
|-------|-----------|-----------------|
| `background` / `foreground` | Page/screen background | Default text color |
| `primary` | Primary buttons, links, emphasis | Text on primary surfaces |
| `secondary` | Secondary buttons, less emphasis | Text on secondary surfaces |
| `destructive` | Error states, danger buttons, delete actions | Text on destructive surfaces |
| `muted` | Subtle backgrounds, disabled states | Secondary/helper text |
| `accent` | Highlights, hover states, active indicators | Text on accent surfaces |
| `card` | Card component backgrounds | Text within cards |
| `popover` | Popover/dropdown backgrounds | Text within popovers |
| `border` | Default border color | — |
| `input` | Input field border color | — |
| `ring` | Focus ring color | — |

### Usage in Components

```tsx
// Background colors
<View className="bg-background" />      // Page background
<View className="bg-primary" />          // Primary surface
<View className="bg-muted" />            // Subtle background
<View className="bg-card" />             // Card surface
<View className="bg-destructive" />      // Error/danger surface

// Text colors
<Text className="text-foreground" />           // Primary text
<Text className="text-muted-foreground" />     // Secondary text
<Text className="text-primary" />              // Branded text
<Text className="text-destructive" />          // Error text
<Text className="text-primary-foreground" />   // Text on primary bg

// Border colors
<View className="border border-border" />      // Default border
<View className="border border-input" />       // Input border
<View className="border border-destructive" /> // Error border
```

## Border Radius Tokens

| Token | Value |
|-------|-------|
| `rounded-lg` | `var(--radius)` |
| `rounded-md` | `calc(var(--radius) - 2px)` |
| `rounded-sm` | `calc(var(--radius) - 4px)` |

## Defining Theme Colors

Set CSS variables in `global.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* ... dark mode overrides */
  }
}
```

**Format**: HSL values without `hsl()` wrapper — just `H S% L%` (e.g., `222.2 84% 4.9%`). The `hsl()` wrapper is applied in `tailwind.config.js`.

## Dark Mode

USMDS uses `darkMode: 'class'` strategy. Toggle dark mode by adding/removing the `dark` class:

```tsx
// In your theme provider
<View className={colorScheme === 'dark' ? 'dark' : ''}>
  {children}
</View>
```

Dark mode classes automatically reference the `.dark` CSS variables.

## Customizing the Theme

### Changing Primary Color

Update `--primary` and `--primary-foreground` in `global.css`:

```css
:root {
  --primary: 213 94% 36%;           /* Custom blue */
  --primary-foreground: 0 0% 100%;  /* White text on primary */
}
```

### Adding Custom Colors

Extend `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // ... existing USMDS tokens
      success: {
        DEFAULT: 'hsl(var(--success))',
        foreground: 'hsl(var(--success-foreground))',
      },
      warning: {
        DEFAULT: 'hsl(var(--warning))',
        foreground: 'hsl(var(--warning-foreground))',
      },
    },
  },
},
```

Then define the CSS variables in `global.css`:

```css
:root {
  --success: 142.1 76.2% 36.3%;
  --success-foreground: 0 0% 100%;
  --warning: 38 92% 50%;
  --warning-foreground: 0 0% 0%;
}
```

## NativeWind Styling Reference

Common utility classes used with USMDS components:

### Layout
- `flex-1`, `flex-row`, `flex-col`
- `items-center`, `justify-center`, `justify-around`, `justify-between`
- `gap-2`, `gap-4`

### Spacing
- `p-4`, `px-4`, `py-2`, `pt-4`
- `m-4`, `mx-4`, `my-2`, `mt-4`, `mb-4`

### Sizing
- `w-full`, `h-full`, `w-12`, `h-12`
- `max-w-md`, `max-w-lg`

### Typography
- `text-sm`, `text-lg`, `text-xl`, `text-3xl`
- `font-medium`, `font-bold`

### Borders
- `border`, `border-2`
- `rounded-lg`, `rounded-md`, `rounded-sm`, `rounded-full`

### Effects
- `opacity-50`, `shadow-sm`, `shadow-md`
