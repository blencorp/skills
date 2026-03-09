# USMDS Component Reference

All components import from `@/components/ui/{component-name}`. Text content must be wrapped in `<Text>` from `@/components/ui/text`.

## Available Components

The component registry can be fetched programmatically:

```typescript
const REGISTRY_URL = 'https://storage.googleapis.com/usmds-registry/r/usa/registry.json';
const response = await fetch(REGISTRY_URL);
const data = await response.json();
const names = data.items.map(item => item.name).sort();
```

---

## Accordion

Collapsible content sections following WAI-ARIA accordion pattern. Animated with React Native Reanimated.

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Text } from '@/components/ui/text';

<Accordion type="multiple" className="w-full max-w-md">
  <AccordionItem value="item-1">
    <AccordionTrigger>
      <Text>Section Title</Text>
    </AccordionTrigger>
    <AccordionContent>
      <Text>Content here</Text>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

**Props:**
- `type`: `"single"` | `"multiple"` — single or multi-expand behavior

---

## Alert

Displays important messages. Automatically receives `alert` accessibility role for screen readers.

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { InfoIcon, AlertCircle } from 'lucide-react-native';

<Alert icon={InfoIcon}>
  <AlertTitle>Notification</AlertTitle>
  <AlertDescription>This is an informational alert.</AlertDescription>
</Alert>

<Alert icon={AlertCircle} variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>This message will be announced by screen readers.</AlertDescription>
</Alert>
```

**Props:**
- `icon`: Lucide React Native icon component
- `variant`: `"default"` | `"destructive"`

---

## AlertDialog

Modal confirmation dialog with structured header/footer. Requires `PortalHost` in root layout.

```tsx
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline"><Text>Delete Account</Text></Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel><Text>Cancel</Text></AlertDialogCancel>
      <AlertDialogAction><Text>Continue</Text></AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

**Sub-components:** `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogFooter`, `AlertDialogCancel`, `AlertDialogAction`

---

## AspectRatio

Constrains children to a specified aspect ratio.

```tsx
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Image } from 'react-native';

<AspectRatio ratio={16 / 9}>
  <Image
    source={{ uri: 'https://example.com/image.jpg' }}
    className="w-full h-full rounded-lg"
    resizeMode="cover"
  />
</AspectRatio>
```

**Props:**
- `ratio`: number (e.g., `16 / 9`, `1`, `4 / 3`)

---

## Avatar

User profile image with fallback text.

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

<Avatar>
  <AvatarImage source={{ uri: 'https://example.com/avatar.jpg' }} />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

---

## Badge

Small label for status or categorization.

```tsx
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';

<Badge variant="default"><Text>New</Text></Badge>
<Badge variant="secondary"><Text>Draft</Text></Badge>
<Badge variant="destructive"><Text>Expired</Text></Badge>
<Badge variant="success"><Text>Active</Text></Badge>
<Badge variant="outline"><Text>Info</Text></Badge>

{/* Pill style */}
<Badge variant="default" className="rounded-full"><Text>Pill</Text></Badge>
```

**Props:**
- `variant`: `"default"` | `"secondary"` | `"destructive"` | `"success"` | `"outline"`

---

## Button

Primary interactive element. Always requires `<Text>` children.

```tsx
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

<Button onPress={handlePress}><Text>Default</Text></Button>
<Button variant="outline"><Text>Outline</Text></Button>
<Button variant="secondary"><Text>Secondary</Text></Button>
<Button variant="destructive"><Text>Destructive</Text></Button>
<Button variant="ghost"><Text>Ghost</Text></Button>
<Button variant="link"><Text>Link</Text></Button>
<Button size="sm"><Text>Small</Text></Button>
<Button size="lg"><Text>Large</Text></Button>
<Button className="w-full mt-4"><Text>Full Width</Text></Button>
```

**Props:**
- `variant`: `"default"` | `"outline"` | `"secondary"` | `"destructive"` | `"ghost"` | `"link"`
- `size`: `"default"` | `"sm"` | `"lg"` | `"icon"`
- `onPress`: press handler
- `disabled`: boolean

---

## Card

Content container with structured sections.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Text } from '@/components/ui/text';

<Card className="mb-4">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Supporting description</CardDescription>
  </CardHeader>
  <CardContent>
    <Text className="text-muted-foreground">Body content here</Text>
  </CardContent>
  <CardFooter className="gap-2">
    <Button variant="outline" size="sm"><Text>Cancel</Text></Button>
    <Button size="sm"><Text>Save</Text></Button>
  </CardFooter>
</Card>
```

**Sub-components:** `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

---

## Checkbox

Toggle input for boolean values.

```tsx
import { Checkbox } from '@/components/ui/checkbox';
import { Text } from '@/components/ui/text';

<View className="flex-row items-center gap-2">
  <Checkbox
    checked={isChecked}
    onCheckedChange={(checked) => setIsChecked(checked)}
  />
  <Text>I agree to the terms</Text>
</View>
```

**Props:**
- `checked`: boolean
- `onCheckedChange`: `(checked: boolean) => void`

---

## RadioButton

Single-select option within a group.

```tsx
import { RadioButton } from '@/components/ui/radiobutton';

<View className="gap-2">
  <RadioButton
    value="option1"
    checked={selected === 'option1'}
    onPress={() => setSelected('option1')}
    label="Option 1"
  />
  <RadioButton
    value="option2"
    checked={selected === 'option2'}
    onPress={() => setSelected('option2')}
    label="Option 2"
  />
</View>
```

**Props:**
- `value`: string
- `checked`: boolean
- `onPress`: handler
- `label`: string

---

## Select

Dropdown selection input.

```tsx
import { Select } from '@/components/ui/select';

<Select
  value={country}
  onValueChange={setCountry}
  items={[
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
  ]}
/>
```

---

## Separator

Visual divider between content sections.

```tsx
import { Separator } from '@/components/ui/separator';

<Separator />
<Separator orientation="vertical" className="h-12" />
```

**Props:**
- `orientation`: `"horizontal"` (default) | `"vertical"`

---

## Text

Required wrapper for all text content in React Native USMDS.

```tsx
import { Text } from '@/components/ui/text';

<Text>Default text</Text>
<Text className="text-foreground font-medium">Bold text</Text>
<Text className="text-muted-foreground text-sm">Secondary text</Text>
<Text className="text-destructive text-sm mt-1">Error message</Text>
<Text className="text-3xl font-bold text-primary">Large number</Text>
```

---

## TextInput

Text entry field with validation support.

```tsx
import { TextInput } from '@/components/ui/textinput';

<TextInput
  value={value}
  onChangeText={setValue}
  placeholder="Enter text..."
  keyboardType="email-address"
  autoCapitalize="none"
  className={hasError ? 'border-destructive' : ''}
/>
```

**Props:** Extends React Native `TextInput` props plus NativeWind `className`.

---

## Textarea

Multi-line text input.

```tsx
import { Textarea } from '@/components/ui/textarea';

<Textarea
  placeholder="Enter your text here..."
  value={text}
  onChangeText={setText}
/>
```

---

## ScrollView

Scrollable container (from React Native, styled with NativeWind).

```tsx
import { ScrollView } from 'react-native';

<ScrollView className="flex-1 bg-background p-4">
  {/* Content */}
</ScrollView>
```

---

## Common Component Combinations

### Profile Card with Avatar + Badge

```tsx
<Card className="mb-4">
  <CardHeader>
    <View className="flex-row items-center gap-4">
      <Avatar>
        <AvatarImage source={{ uri: avatarUrl }} />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <View className="flex-1">
        <CardTitle>John Doe</CardTitle>
        <CardDescription>Software Engineer</CardDescription>
      </View>
      <Badge variant="success"><Text>Active</Text></Badge>
    </View>
  </CardHeader>
  <Separator />
  <CardContent className="pt-4">
    <Text className="text-muted-foreground">Bio text here</Text>
  </CardContent>
  <CardFooter className="gap-2">
    <Button variant="outline" size="sm" className="flex-1"><Text>Message</Text></Button>
    <Button size="sm" className="flex-1"><Text>Follow</Text></Button>
  </CardFooter>
</Card>
```

### Stats Display with Separators

```tsx
<Card>
  <CardHeader><CardTitle>Statistics</CardTitle></CardHeader>
  <CardContent>
    <View className="flex-row justify-around">
      <View className="items-center">
        <Text className="text-3xl font-bold text-primary">1.2K</Text>
        <Text className="text-sm text-muted-foreground">Views</Text>
      </View>
      <Separator orientation="vertical" className="h-12" />
      <View className="items-center">
        <Text className="text-3xl font-bold text-primary">48</Text>
        <Text className="text-sm text-muted-foreground">Likes</Text>
      </View>
    </View>
  </CardContent>
</Card>
```
