# USWDS Components Reference

All 47 components with React imports from `@trussworks/react-uswds` and their USWDS CSS classes.

## Table of Contents

- [Accordion](#accordion)
- [Alert](#alert)
- [Banner / GovBanner](#banner)
- [Breadcrumb](#breadcrumb)
- [Button](#button)
- [ButtonGroup](#buttongroup)
- [Card](#card)
- [CharacterCount](#charactercount)
- [Checkbox](#checkbox)
- [Collection](#collection)
- [ComboBox](#combobox)
- [DateInput](#dateinput)
- [DatePicker](#datepicker)
- [DateRangePicker](#daterangepicker)
- [ErrorMessage](#errormessage)
- [Fieldset](#fieldset)
- [FileInput](#fileinput)
- [Footer](#footer)
- [Form](#form)
- [Grid](#grid)
- [Header](#header)
- [Icon](#icon)
- [IconList](#iconlist)
- [Identifier](#identifier)
- [InPageNavigation](#inpagenavigation)
- [InputGroup / InputPrefix / InputSuffix](#inputgroup)
- [Label](#label)
- [LanguageSelector](#languageselector)
- [Link](#link)
- [Modal](#modal)
- [Pagination](#pagination)
- [ProcessList](#processlist)
- [Radio](#radio)
- [RangeInput](#rangeinput)
- [Search](#search)
- [Select](#select)
- [SideNav](#sidenav)
- [SiteAlert](#sitealert)
- [StepIndicator](#stepindicator)
- [SummaryBox](#summarybox)
- [Table](#table)
- [Tag](#tag)
- [TextInput](#textinput)
- [TextInputMask](#textinputmask)
- [Textarea](#textarea)
- [TimePicker](#timepicker)
- [Tooltip](#tooltip)
- [ValidationChecklist](#validationchecklist)

---

## Accordion

Expandable content sections.

**React**: `import { Accordion } from '@trussworks/react-uswds'`

```tsx
<Accordion
  items={[
    { title: 'Section 1', content: <p>Content</p>, expanded: false, id: 'a1', headingLevel: 'h3' },
    { title: 'Section 2', content: <p>Content</p>, expanded: true, id: 'a2', headingLevel: 'h3' },
  ]}
  bordered={true}           // optional: adds borders
  multiselectable={false}   // optional: allow multiple open
/>
```

**CSS**: `.usa-accordion`, `.usa-accordion__heading`, `.usa-accordion__button`, `.usa-accordion__content`

---

## Alert

Status messages: info, success, warning, error, emergency.

**React**: `import { Alert } from '@trussworks/react-uswds'`

```tsx
<Alert type="success" heading="Success" headingLevel="h3" slim={false} noIcon={false}>
  Operation completed.
</Alert>
```

**Props**: `type` (`'info'` | `'success'` | `'warning'` | `'error'` | `'emergency'`), `heading`, `headingLevel`, `slim`, `noIcon`, `validation`

**CSS**: `.usa-alert`, `.usa-alert--info`, `.usa-alert--success`, `.usa-alert--warning`, `.usa-alert--error`, `.usa-alert--emergency`, `.usa-alert--slim`, `.usa-alert--no-icon`, `.usa-alert--validation`

---

## Banner

Official government website identifier.

**React**: `import { GovBanner } from '@trussworks/react-uswds'`

```tsx
<GovBanner language="english" />  {/* or "spanish" */}
```

Also available as individual parts: `Banner`, `BannerButton`, `BannerContent`, `BannerFlag`, `BannerGuidance`, `BannerHeader`, `BannerIcon`

**CSS**: `.usa-banner`, `.usa-banner__header`, `.usa-banner__button`, `.usa-banner__content`

---

## Breadcrumb

Secondary hierarchical navigation.

**React**: `import { BreadcrumbBar, Breadcrumb, BreadcrumbLink } from '@trussworks/react-uswds'`

```tsx
<BreadcrumbBar>
  <Breadcrumb><BreadcrumbLink href="/">Home</BreadcrumbLink></Breadcrumb>
  <Breadcrumb><BreadcrumbLink href="/section">Section</BreadcrumbLink></Breadcrumb>
  <Breadcrumb current>Current Page</Breadcrumb>
</BreadcrumbBar>
```

**Props**: `BreadcrumbBar` accepts `variant="wrap"`. `Breadcrumb` accepts `current` (boolean).

**CSS**: `.usa-breadcrumb`, `.usa-breadcrumb__list`, `.usa-breadcrumb__list-item`, `.usa-breadcrumb__link`, `.usa-current`

---

## Button

Action triggers with multiple visual variants.

**React**: `import { Button } from '@trussworks/react-uswds'`

```tsx
<Button type="submit">Default</Button>
<Button type="button" secondary>Secondary</Button>
<Button type="button" accentStyle="cool">Accent Cool</Button>
<Button type="button" accentStyle="warm">Accent Warm</Button>
<Button type="button" base>Base</Button>
<Button type="button" outline>Outline</Button>
<Button type="button" inverse>Inverse</Button>
<Button type="button" size="big">Big</Button>
<Button type="button" unstyled>Unstyled</Button>
```

**Props**: `type` (required: `'button'` | `'submit'` | `'reset'`), `secondary`, `base`, `accentStyle` (`'cool'` | `'warm'`), `outline`, `inverse`, `size` (`'big'`), `unstyled`, `disabled`

**CSS**: `.usa-button`, `.usa-button--secondary`, `.usa-button--accent-cool`, `.usa-button--accent-warm`, `.usa-button--base`, `.usa-button--outline`, `.usa-button--inverse`, `.usa-button--big`, `.usa-button--unstyled`

---

## ButtonGroup

Group related buttons together.

**React**: `import { ButtonGroup } from '@trussworks/react-uswds'`

```tsx
<ButtonGroup type="default">  {/* or "segmented" */}
  <Button type="button">First</Button>
  <Button type="button" outline>Second</Button>
</ButtonGroup>
```

**CSS**: `.usa-button-group`, `.usa-button-group--segmented`

---

## Card

Content containers for related information.

**React**: `import { Card, CardGroup, CardHeader, CardBody, CardFooter, CardMedia } from '@trussworks/react-uswds'`

```tsx
<CardGroup>
  <Card headerFirst>
    <CardHeader><h3 className="usa-card__heading">Title</h3></CardHeader>
    <CardMedia><img src="image.jpg" alt="Description" /></CardMedia>
    <CardBody><p>Content</p></CardBody>
    <CardFooter><Button type="button">Action</Button></CardFooter>
  </Card>
</CardGroup>
```

**Props**: `Card` accepts `layout` (`'standardDefault'` | `'flagDefault'` | `'flagMediaRight'`), `headerFirst`, `gridLayout` (Grid props)

**CSS**: `.usa-card`, `.usa-card-group`, `.usa-card__container`, `.usa-card__header`, `.usa-card__heading`, `.usa-card__body`, `.usa-card__footer`, `.usa-card__media`, `.usa-card--flag`, `.usa-card--header-first`, `.usa-card--media-right`, `.usa-card__media--inset`, `.usa-card__media--exdent`

---

## CharacterCount

Live character count for text inputs.

**React**: `import { CharacterCount } from '@trussworks/react-uswds'`

```tsx
<CharacterCount id="msg" name="message" maxLength={200} isTextArea={false} />
```

---

## Checkbox

Multi-select options.

**React**: `import { Checkbox } from '@trussworks/react-uswds'`

```tsx
<Checkbox id="check1" name="options" value="opt1" label="Option 1" tile={false} />
```

**Props**: `id`, `name`, `value`, `label` (required), `labelDescription`, `tile`, `checked`, `defaultChecked`, `disabled`

**CSS**: `.usa-checkbox`, `.usa-checkbox__input`, `.usa-checkbox__label`, `.usa-checkbox__input--tile`

---

## Collection

Compact list of related items (articles, events).

**React**: `import { Collection, CollectionItem, CollectionHeading, CollectionDescription, CollectionMeta, CollectionMetaItem, CollectionMetaItemTag, CollectionThumbnail, CollectionCalendarDate } from '@trussworks/react-uswds'`

**CSS**: `.usa-collection`, `.usa-collection__item`, `.usa-collection__heading`, `.usa-collection__description`, `.usa-collection__meta`, `.usa-collection__thumbnail`

---

## ComboBox

Searchable dropdown for large option lists.

**React**: `import { ComboBox } from '@trussworks/react-uswds'`

```tsx
<ComboBox
  id="state"
  name="state"
  options={[
    { value: 'ca', label: 'California' },
    { value: 'ny', label: 'New York' },
  ]}
  defaultValue="ca"
  onChange={(value) => console.log(value)}
/>
```

**Props**: `id`, `name`, `options` (array of `{ value, label }`), `defaultValue`, `disabled`, `onChange`

**CSS**: `.usa-combo-box`

**Warning**: Do NOT import USWDS JS directly — ComboBox initializes its own JS. Double-init causes bugs.

---

## DateInput

Individual date field (month/day/year).

**React**: `import { DateInput, DateInputGroup } from '@trussworks/react-uswds'`

```tsx
<DateInputGroup>
  <DateInput id="dob-month" name="dob-month" label="Month" unit="month" maxLength={2} />
  <DateInput id="dob-day" name="dob-day" label="Day" unit="day" maxLength={2} />
  <DateInput id="dob-year" name="dob-year" label="Year" unit="year" maxLength={4} />
</DateInputGroup>
```

---

## DatePicker

Calendar-based single date selection.

**React**: `import { DatePicker } from '@trussworks/react-uswds'`

```tsx
<DatePicker id="start-date" name="start-date" defaultValue="2024-01-15" minDate="2024-01-01" maxDate="2024-12-31" />
```

**CSS**: `.usa-date-picker`

---

## DateRangePicker

Two connected date pickers for a range.

**React**: `import { DateRangePicker } from '@trussworks/react-uswds'`

```tsx
<DateRangePicker startDateLabel="Start" startDateHint="mm/dd/yyyy" endDateLabel="End" endDateHint="mm/dd/yyyy" />
```

---

## ErrorMessage

Validation error display for form fields.

**React**: `import { ErrorMessage } from '@trussworks/react-uswds'`

```tsx
<ErrorMessage id="email-error">Please enter a valid email address</ErrorMessage>
```

**CSS**: `.usa-error-message`

---

## Fieldset

Group related form elements with a legend.

**React**: `import { Fieldset } from '@trussworks/react-uswds'`

```tsx
<Fieldset legend="Contact Information" legendStyle="large">
  {/* form fields */}
</Fieldset>
```

**Props**: `legend`, `legendStyle` (`'default'` | `'large'` | `'srOnly'`)

**CSS**: `.usa-fieldset`, `.usa-legend`, `.usa-legend--large`

---

## FileInput

File attachment upload.

**React**: `import { FileInput } from '@trussworks/react-uswds'`

```tsx
<FileInput id="file" name="file" accept=".pdf,.doc" multiple={false} />
```

**CSS**: `.usa-file-input`

---

## Footer

Site footer with navigation, contact info, social links.

**React**: `import { Footer, FooterNav, FooterExtendedNavList, Address, Logo, SocialLinks, SocialLink } from '@trussworks/react-uswds'`

```tsx
<Footer size="medium"   // "big" | "medium" | "slim"
  primary={<FooterNav size="medium" links={[...]} />}
  secondary={<Logo image={<img src="logo.png" alt="Agency" />} heading={<p>Agency Name</p>} />}
/>
```

**CSS**: `.usa-footer`, `.usa-footer--big`, `.usa-footer--slim`, `.usa-footer__nav`, `.usa-footer__primary-link`, `.usa-footer__secondary-link`, `.usa-footer__social-links`, `.usa-footer__address`

---

## Form

Container for form elements.

**React**: `import { Form } from '@trussworks/react-uswds'`

```tsx
<Form onSubmit={handleSubmit} large={false}>
  {/* form fields */}
</Form>
```

**Props**: `onSubmit`, `large` (wider input fields)

**CSS**: `.usa-form`, `.usa-form--large`

---

## Grid

12-column flexbox grid system.

**React**: `import { Grid, GridContainer } from '@trussworks/react-uswds'`

```tsx
<GridContainer containerSize="desktop">  {/* optional max-width */}
  <Grid row gap>
    <Grid col={12} tablet={{ col: 6 }} desktop={{ col: 4 }}>Column 1</Grid>
    <Grid col={12} tablet={{ col: 6 }} desktop={{ col: 4 }}>Column 2</Grid>
    <Grid col={12} desktop={{ col: 4 }}>Column 3</Grid>
  </Grid>
</GridContainer>
```

**Props**: `Grid` accepts `row`, `col` (1-12 | `'auto'` | `'fill'`), `gap` (boolean | number), `offset` (1-12). Responsive: `mobileLg`, `tablet`, `tabletLg`, `desktop` (each accepts `{ col, offset }`).

**CSS**: `.grid-container`, `.grid-row`, `.grid-col-{1-12}`, `.grid-col-auto`, `.grid-col-fill`, `.grid-gap`, `.grid-gap-{sm|lg|05|1|2|3|4|5|6}`, `.grid-offset-{1-12}`, responsive: `tablet:grid-col-{n}`, `desktop:grid-col-{n}`

See [grid-layout.md](grid-layout.md) for full grid documentation.

---

## Header

Site header with navigation.

**React**: `import { Header, Title, PrimaryNav, NavMenuButton, NavCloseButton, ExtendedNav, MegaMenu, Menu, NavList, NavDropDownButton } from '@trussworks/react-uswds'`

```tsx
<Header basic={true}>  {/* or extended={true} */}
  <div className="usa-nav-container">
    <div className="usa-navbar">
      <Title>Site Name</Title>
      <NavMenuButton onClick={toggleNav} label="Menu" />
    </div>
    <PrimaryNav
      items={navigationItems}
      mobileExpanded={isNavOpen}
      onToggleMobileNav={toggleNav}
    />
  </div>
</Header>
```

**Variants**: `basic`, `extended`, with optional `MegaMenu`

**CSS**: `.usa-header`, `.usa-header--basic`, `.usa-header--extended`, `.usa-nav`, `.usa-nav__primary`, `.usa-nav__submenu`, `.usa-megamenu`, `.usa-logo`, `.usa-menu-btn`

---

## Icon

USWDS icon set.

**React**: `import { Icon } from '@trussworks/react-uswds'`

```tsx
<Icon.NavigateNext size={3} />
<Icon.Check size={4} />
<Icon.Close />
```

Access icons via `Icon.{IconName}`. Props: `size` (3-9), `className`

**CSS**: `.usa-icon`, size via `.usa-icon--size-{3-9}`

---

## IconList

List with leading icons.

**React**: `import { IconList, IconListItem, IconListIcon, IconListContent, IconListTitle } from '@trussworks/react-uswds'`

**CSS**: `.usa-icon-list`, `.usa-icon-list__item`, `.usa-icon-list__icon`, `.usa-icon-list__content`

---

## Identifier

Agency identifier with required links.

**React**: `import { Identifier, IdentifierGov, IdentifierIdentity, IdentifierLinks, IdentifierLinkItem, IdentifierLink, IdentifierLogo, IdentifierLogos, IdentifierMasthead } from '@trussworks/react-uswds'`

**CSS**: `.usa-identifier`, `.usa-identifier__section`, `.usa-identifier__logos`, `.usa-identifier__identity`, `.usa-identifier__required-links-list`

---

## InPageNavigation

Jump to sections on long pages.

**React**: `import { InPageNavigation } from '@trussworks/react-uswds'`

```tsx
<InPageNavigation content={contentRef} headingLevel="h2" />
```

**CSS**: `.usa-in-page-nav`

---

## InputGroup

Prefix/suffix for text inputs (e.g., currency symbol, unit).

**React**: `import { InputGroup, InputPrefix, InputSuffix } from '@trussworks/react-uswds'`

```tsx
<InputGroup>
  <InputPrefix>$</InputPrefix>
  <TextInput id="amount" name="amount" type="text" />
  <InputSuffix>.00</InputSuffix>
</InputGroup>
```

**CSS**: `.usa-input-group`, `.usa-input-prefix`, `.usa-input-suffix`

---

## Label

Form field labels.

**React**: `import { Label, RequiredMarker } from '@trussworks/react-uswds'`

```tsx
<Label htmlFor="email" requiredMarker>Email address</Label>
<Label htmlFor="phone" hint="(optional)">Phone number</Label>
```

**Props**: `htmlFor`, `requiredMarker` (shows red asterisk), `hint`, `error` (boolean for error styling)

**CSS**: `.usa-label`, `.usa-label--error`, `.usa-hint`, `.usa-label--required`

---

## LanguageSelector

Multi-language content selector.

**React**: `import { LanguageSelector } from '@trussworks/react-uswds'`

```tsx
<LanguageSelector
  langs={[
    { attr: 'en', label: 'English', on_click: () => setLang('en') },
    { attr: 'es', label: 'Español', on_click: () => setLang('es') },
  ]}
/>
```

---

## Link

Styled hyperlinks.

**React**: `import { Link } from '@trussworks/react-uswds'`

```tsx
<Link href="/page" variant="external">External link</Link>
<Link href="/page" variant="nav">Navigation link</Link>
```

**CSS**: `.usa-link`, `.usa-link--external`

---

## Modal

Focus-trapping dialog overlay.

**React**: `import { Modal, ModalToggleButton, ModalHeading, ModalFooter, ModalOpenLink } from '@trussworks/react-uswds'`

```tsx
const modalRef = useRef<ModalRef>(null);

<ModalToggleButton modalRef={modalRef} opener>Open Modal</ModalToggleButton>
<Modal ref={modalRef} id="example-modal" aria-labelledby="modal-heading" aria-describedby="modal-desc"
  isLarge={false} forceAction={false}>
  <ModalHeading id="modal-heading">Are you sure?</ModalHeading>
  <p id="modal-desc">This action cannot be undone.</p>
  <ModalFooter>
    <ButtonGroup>
      <ModalToggleButton modalRef={modalRef} closer unstyled className="padding-105 text-center">Cancel</ModalToggleButton>
      <Button type="button" onClick={handleConfirm}>Confirm</Button>
    </ButtonGroup>
  </ModalFooter>
</Modal>
```

**Props**: `Modal` accepts `ref` (ModalRef), `id`, `isLarge`, `forceAction` (no close button), `aria-labelledby`, `aria-describedby`

**CSS**: `.usa-modal`, `.usa-modal--lg`, `.usa-modal__content`, `.usa-modal__main`, `.usa-modal__heading`, `.usa-modal__footer`, `.usa-modal__close`

---

## Pagination

Page navigation for long content lists.

**React**: `import { Pagination } from '@trussworks/react-uswds'`

```tsx
<Pagination
  pathname="/results"
  totalPages={10}
  currentPage={3}
  maxSlots={7}
  onClickNext={() => setPage(p => p + 1)}
  onClickPrevious={() => setPage(p => p - 1)}
  onClickPageNumber={(_, page) => setPage(page)}
/>
```

---

## ProcessList

Numbered step instructions.

**React**: `import { ProcessList, ProcessListItem, ProcessListHeading } from '@trussworks/react-uswds'`

```tsx
<ProcessList>
  <ProcessListItem><ProcessListHeading type="h3">Step 1</ProcessListHeading><p>Details</p></ProcessListItem>
  <ProcessListItem><ProcessListHeading type="h3">Step 2</ProcessListHeading><p>Details</p></ProcessListItem>
</ProcessList>
```

**CSS**: `.usa-process-list`, `.usa-process-list__item`, `.usa-process-list__heading`

---

## Radio

Single-select options.

**React**: `import { Radio } from '@trussworks/react-uswds'`

```tsx
<Radio id="r1" name="choice" value="a" label="Option A" tile={false} labelDescription="Description" />
<Radio id="r2" name="choice" value="b" label="Option B" defaultChecked />
```

**CSS**: `.usa-radio`, `.usa-radio__input`, `.usa-radio__label`, `.usa-radio__input--tile`

---

## RangeInput

Slider for approximate numeric values.

**React**: `import { RangeInput } from '@trussworks/react-uswds'`

```tsx
<RangeInput id="range" name="range" min={0} max={100} step={10} />
```

**CSS**: `.usa-range`

---

## Search

Search input with submit button.

**React**: `import { Search } from '@trussworks/react-uswds'`

```tsx
<Search size="big" onSubmit={handleSearch} />
// size: "big" | "small" | undefined (default)
```

**CSS**: `.usa-search`, `.usa-search--big`, `.usa-search--small`

---

## Select

Dropdown select menu.

**React**: `import { Select } from '@trussworks/react-uswds'`

```tsx
<Select id="state" name="state" defaultValue="">
  <option value="">- Select -</option>
  <option value="ca">California</option>
  <option value="ny">New York</option>
</Select>
```

**CSS**: `.usa-select`

---

## SideNav

Hierarchical vertical sidebar navigation.

**React**: `import { SideNav } from '@trussworks/react-uswds'`

```tsx
<SideNav
  items={[
    <a href="/page1" className="usa-current">Current Page</a>,
    <a href="/page2">Other Page</a>,
    <>
      <a href="/parent">Parent</a>
      <SideNav isSubnav items={[<a href="/child">Child</a>]} />
    </>,
  ]}
/>
```

**CSS**: `.usa-sidenav`, `.usa-sidenav__item`, `.usa-sidenav__sublist`, `.usa-current`

---

## SiteAlert

Urgent sitewide messages.

**React**: `import { SiteAlert } from '@trussworks/react-uswds'`

```tsx
<SiteAlert variant="info" heading="Information" showIcon>Content</SiteAlert>
<SiteAlert variant="emergency" heading="Emergency" slim>Content</SiteAlert>
```

**Props**: `variant` (`'info'` | `'emergency'`), `heading`, `headingLevel`, `showIcon`, `slim`

**CSS**: `.usa-site-alert`, `.usa-site-alert--info`, `.usa-site-alert--emergency`, `.usa-site-alert--slim`, `.usa-site-alert--no-icon`

---

## StepIndicator

Multi-step progress display.

**React**: `import { StepIndicator, StepIndicatorStep } from '@trussworks/react-uswds'`

```tsx
<StepIndicator headingLevel="h3" counters="default" centered={false}>
  <StepIndicatorStep label="Personal Info" status="complete" />
  <StepIndicatorStep label="Address" status="current" />
  <StepIndicatorStep label="Review" status="incomplete" />
</StepIndicator>
```

**Props**: `StepIndicator` accepts `counters` (`'default'` | `'small'` | `'none'`), `centered`, `headingLevel`. `StepIndicatorStep` accepts `label`, `status` (`'complete'` | `'current'` | `'incomplete'`).

**CSS**: `.usa-step-indicator`, `.usa-step-indicator--no-labels`, `.usa-step-indicator--counters`, `.usa-step-indicator--counters-sm`, `.usa-step-indicator--center`, `.usa-step-indicator__segment--complete`, `.usa-step-indicator__segment--current`

---

## SummaryBox

Highlight key information or next steps.

**React**: `import { SummaryBox, SummaryBoxHeading, SummaryBoxContent } from '@trussworks/react-uswds'`

```tsx
<SummaryBox>
  <SummaryBoxHeading headingLevel="h3">Key Information</SummaryBoxHeading>
  <SummaryBoxContent>
    <ul className="usa-list"><li>Item 1</li><li>Item 2</li></ul>
  </SummaryBoxContent>
</SummaryBox>
```

**CSS**: `.usa-summary-box`, `.usa-summary-box__heading`, `.usa-summary-box__text`

---

## Table

Data display in rows and columns.

**React**: `import { Table } from '@trussworks/react-uswds'`

```tsx
<Table bordered striped compact fullWidth scrollable sortable stackedStyle="default">
  <thead>
    <tr><th scope="col">Header</th></tr>
  </thead>
  <tbody>
    <tr><td>Data</td></tr>
  </tbody>
</Table>
```

**Props**: `bordered`, `borderless`, `striped`, `compact`, `fullWidth`, `fixed`, `scrollable`, `sortable`, `stackedStyle` (`'default'` | `'headers'`)

**CSS**: `.usa-table`, `.usa-table--striped`, `.usa-table--borderless`, `.usa-table--compact`, `.usa-table--sticky-header`, `.usa-table-container--scrollable`, `.usa-table--stacked`, `.usa-table--stacked-header`

---

## Tag

Categorical labels.

**React**: `import { Tag } from '@trussworks/react-uswds'`

```tsx
<Tag>Active</Tag>
<Tag background="base-lighter">Custom</Tag>
```

**CSS**: `.usa-tag`, `.usa-tag--big`

---

## TextInput

Single-line text entry.

**React**: `import { TextInput } from '@trussworks/react-uswds'`

```tsx
<TextInput id="name" name="name" type="text" validationStatus="error" />
```

**Props**: `id`, `name`, `type` (`'text'` | `'email'` | `'number'` | `'password'` | `'search'` | `'tel'` | `'url'`), `validationStatus` (`'error'` | `'success'`), `inputSize` (`'small'` | `'medium'`)

**CSS**: `.usa-input`, `.usa-input--error`, `.usa-input--success`, `.usa-input--small`, `.usa-input--medium`

---

## TextInputMask

Input with format constraints (SSN, phone, ZIP).

**React**: `import { TextInputMask } from '@trussworks/react-uswds'`

```tsx
<TextInputMask id="phone" name="phone" type="tel" mask="___ ___-____" pattern="\d{3} \d{3}-\d{4}" />
```

---

## Textarea

Multi-line text entry.

**React**: `import { Textarea } from '@trussworks/react-uswds'`

```tsx
<Textarea id="comments" name="comments" />
```

**CSS**: `.usa-textarea`

---

## TimePicker

Time selection input.

**React**: `import { TimePicker } from '@trussworks/react-uswds'`

```tsx
<TimePicker id="time" name="time" minTime="08:00" maxTime="18:00" step={30} />
```

**CSS**: `.usa-time-picker`

---

## Tooltip

Descriptive popup on hover/focus.

**React**: `import { Tooltip } from '@trussworks/react-uswds'`

```tsx
<Tooltip label="More information about this feature" position="top">
  <Button type="button">Hover me</Button>
</Tooltip>
```

**Props**: `label` (text), `position` (`'top'` | `'bottom'` | `'left'` | `'right'`), `className`

**CSS**: `.usa-tooltip`

---

## ValidationChecklist

Live form validation feedback.

**React**: `import { ValidationChecklist, ValidationItem } from '@trussworks/react-uswds'`

```tsx
<ValidationChecklist id="password-validation">
  <ValidationItem id="len" isValid={password.length >= 8}>At least 8 characters</ValidationItem>
  <ValidationItem id="upper" isValid={/[A-Z]/.test(password)}>One uppercase letter</ValidationItem>
</ValidationChecklist>
```

**CSS**: `.usa-checklist`, `.usa-checklist__item`, `.usa-checklist__item--checked`
