# USWDS Grid & Layout Reference

Mobile-first 12-column flexbox grid system.

## Table of Contents

- [Core Concepts](#core-concepts)
- [Container](#container)
- [Row and Columns](#row-and-columns)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Gutters (Gap)](#gutters)
- [Offset](#offset)
- [Common Layouts](#common-layouts)
- [Sass Mixins](#sass-mixins)

---

## Core Concepts

Three layers: **Container** → **Row** → **Columns**

```html
<div class="grid-container">         <!-- max-width + padding -->
  <div class="grid-row grid-gap">    <!-- flex row + gutters -->
    <div class="grid-col-6">A</div>  <!-- 6 of 12 columns -->
    <div class="grid-col-6">B</div>
  </div>
</div>
```

React equivalent:
```tsx
<GridContainer>
  <Grid row gap>
    <Grid col={6}>A</Grid>
    <Grid col={6}>B</Grid>
  </Grid>
</GridContainer>
```

---

## Container

Centers content with max-width and horizontal padding.

| Class | Max Width |
|---|---|
| `.grid-container` | 1024px (default, desktop) |
| `.grid-container-card` | 160px |
| `.grid-container-card-lg` | 240px |
| `.grid-container-mobile` | 320px |
| `.grid-container-mobile-lg` | 480px |
| `.grid-container-tablet` | 640px |
| `.grid-container-tablet-lg` | 880px |
| `.grid-container-desktop` | 1024px |
| `.grid-container-desktop-lg` | 1200px |
| `.grid-container-widescreen` | 1400px |

Default padding: 2 units (16px) on mobile, 4 units (32px) on desktop+.

**React**: `<GridContainer containerSize="desktop-lg">`

---

## Row and Columns

### Row

`.grid-row` creates a flex container for columns.

### Column Sizing

| Class | Behavior |
|---|---|
| `.grid-col-{1-12}` | Fixed width (n/12) |
| `.grid-col` | Equal flex fill |
| `.grid-col-auto` | Width of content |
| `.grid-col-fill` | Fill remaining space |

**React**:
```tsx
<Grid col={6}>     // grid-col-6
<Grid col="auto">  // grid-col-auto
<Grid col="fill">  // grid-col-fill
<Grid col>         // grid-col (equal fill)
```

### Column Wrapping

Columns automatically wrap when they exceed 12 total.

```html
<div class="grid-row">
  <div class="grid-col-8">8</div>
  <div class="grid-col-8">8 (wraps to next row)</div>
</div>
```

---

## Responsive Breakpoints

Mobile-first: styles apply at breakpoint width AND above.

| Breakpoint | Min Width | Default |
|---|---|---|
| (none) | 0 | Always |
| `mobile-lg:` | 480px | Enabled |
| `tablet:` | 640px | Enabled |
| `tablet-lg:` | 880px | Disabled |
| `desktop:` | 1024px | Enabled |
| `widescreen:` | 1400px | Disabled |

### Usage

```html
<!-- Full width on mobile, half on tablet, third on desktop -->
<div class="grid-col-12 tablet:grid-col-6 desktop:grid-col-4">
  Content
</div>
```

**React**:
```tsx
<Grid col={12} tablet={{ col: 6 }} desktop={{ col: 4 }}>
  Content
</Grid>
```

---

## Gutters

Add spacing between columns.

| Class | Gap Size |
|---|---|
| `.grid-gap` | 2 units (16px), 4 units (32px) at desktop+ |
| `.grid-gap-sm` | 2px |
| `.grid-gap-05` | 4px |
| `.grid-gap-1` | 8px |
| `.grid-gap-2` | 16px |
| `.grid-gap-3` | 24px |
| `.grid-gap-4` | 32px |
| `.grid-gap-5` | 40px |
| `.grid-gap-6` | 48px |
| `.grid-gap-lg` | 32px |

**React**:
```tsx
<Grid row gap>        // default gap
<Grid row gap={2}>    // grid-gap-2
<Grid row gap="lg">   // grid-gap-lg
```

---

## Offset

Push columns to the right.

| Class | Offset |
|---|---|
| `.grid-offset-{1-12}` | Shifts by n/12 |
| `.grid-offset-none` | Reset offset |

```html
<div class="grid-row">
  <div class="grid-col-4 grid-offset-4">Centered 1/3 width</div>
</div>
```

**React**:
```tsx
<Grid col={4} offset={4}>Centered</Grid>
```

Responsive: `tablet:grid-offset-3`, `desktop:grid-offset-0`

---

## Common Layouts

### Two-Column Sidebar

```tsx
<GridContainer>
  <Grid row gap>
    <Grid col={12} tablet={{ col: 4 }} desktop={{ col: 3 }}>
      <SideNav items={navItems} />
    </Grid>
    <Grid col={12} tablet={{ col: 8 }} desktop={{ col: 9 }}>
      <main>{children}</main>
    </Grid>
  </Grid>
</GridContainer>
```

### Three Equal Columns

```tsx
<GridContainer>
  <Grid row gap>
    <Grid col={12} tablet={{ col: 4 }}>Column 1</Grid>
    <Grid col={12} tablet={{ col: 4 }}>Column 2</Grid>
    <Grid col={12} tablet={{ col: 4 }}>Column 3</Grid>
  </Grid>
</GridContainer>
```

### Card Grid (4 across)

```tsx
<GridContainer>
  <Grid row gap>
    {items.map(item => (
      <Grid key={item.id} col={12} mobileLg={{ col: 6 }} desktop={{ col: 3 }}>
        <Card>{/* ... */}</Card>
      </Grid>
    ))}
  </Grid>
</GridContainer>
```

### Centered Content

```tsx
<GridContainer>
  <Grid row>
    <Grid col={12} tablet={{ col: 8, offset: 2 }}>
      Centered content at 2/3 width
    </Grid>
  </Grid>
</GridContainer>
```

---

## Sass Mixins

For semantic markup (no grid classes in HTML):

```scss
.my-container {
  @include grid-container;
  @include grid-container('desktop-lg'); // custom max-width
}

.my-row {
  @include grid-row;
  @include grid-gap(2); // custom gap
}

.my-sidebar {
  @include grid-col(3);
  @include at-media('tablet') {
    @include grid-col(4);
  }
}

.my-main {
  @include grid-col(9);
  @include at-media('tablet') {
    @include grid-col(8);
  }
}

.my-offset-column {
  @include grid-col(6);
  @include grid-offset(3);
}
```

### Responsive Mixin

```scss
@include at-media('tablet') {
  // Styles for tablet and above (min-width: 640px)
}

@include at-media('desktop') {
  // Styles for desktop and above (min-width: 1024px)
}
```
