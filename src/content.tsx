import {
  Sparkle,
  PaintBrush,
  Palette,
  SquaresFour,
  Code,
  Wrench,
  Checks,
} from "@phosphor-icons/react";

const content: any = [
  {
    title: "Getting Started",
    slug: "getting-started",
    icon: <Sparkle />,
    items: [
      {
        slug: "overview",
        title: "Overview",
      },
      {
        slug: "installation",
        title: "Installation",
      },
      {
        slug: "nextjs-setup",
        title: "Next.js Setup",
      },
      {
        slug: "vite-setup",
        title: "Vite Setup",
      },
    ],
  },
  {
    title: "Styling",
    slug: "styling",
    icon: <PaintBrush />,
    items: [
      { slug: "style-props", title: "Style Props" },
      { slug: "sx-prop", title: "The sx Prop" },
      { slug: "color-palette", title: "Color Palette" },
      { slug: "css-variables", title: "CSS Variables" },
      { slug: "global-style-overwriting", title: "Global Style Overwriting" },
      { slug: "responsive-styles", title: "Responsive Styles" },
      { slug: "use-prismane-color", title: "usePrismaneColor" },
    ],
  },
  {
    title: "Theming",
    slug: "theming",
    icon: <Palette />,
    items: [
      { slug: "theme-object", title: "Theme Object" },
      { slug: "prismane-provider", title: "PrismaneProvider" },
      { slug: "advanced-customization", title: "Advanced Customization" },
      { slug: "theming-utils", title: "Theming Utils" },
    ],
  },
  {
    title: "Components",
    slug: "components",
    icon: <SquaresFour />,
    items: [
      { slug: "accordion", title: "Accordion" },
      { slug: "action-button", title: "ActionButton" },
      { slug: "alert", title: "Alert" },
      { slug: "animation", title: "Animation" },
      { slug: "aspect-ratio", title: "AspectRatio" },
      { slug: "autocomplete-field", title: "AutocompleteField" },
      { slug: "avatar", title: "Avatar" },
      { slug: "backdrop", title: "Backdrop" },
      { slug: "badge", title: "Badge" },
      { slug: "box", title: "Box" },
      { slug: "breadcrumb", title: "Breadcrumb" },
      { slug: "button", title: "Button" },
      { slug: "card", title: "Card" },
      { slug: "center", title: "Center" },
      { slug: "checkbox", title: "Checkbox" },
      { slug: "chip", title: "Chip" },
      { slug: "circle", title: "Circle" },
      { slug: "close-button", title: "CloseButton" },
      { slug: "collapse", title: "Collapse" },
      { slug: "color-field", title: "ColorField" },
      { slug: "container", title: "Container" },
      { slug: "dialog", title: "Dialog" },
      { slug: "divider", title: "Divider" },
      { slug: "drawer", title: "Drawer" },
      { slug: "field", title: "Field" },
      { slug: "flex", title: "Flex" },
      { slug: "form", title: "Form" },
      { slug: "gradient", title: "Gradient" },
      { slug: "grid", title: "Grid" },
      { slug: "hidden", title: "Hidden" },
      { slug: "hide", title: "Hide" },
      { slug: "highlight", title: "Highlight" },
      { slug: "icon", title: "Icon" },
      { slug: "image", title: "Image" },
      { slug: "initials", title: "Initials" },
      { slug: "key", title: "Key" },
      { slug: "link", title: "Link" },
      { slug: "list", title: "List" },
      { slug: "menu", title: "Menu" },
      { slug: "modal", title: "Modal" },
      { slug: "native-date-field", title: "NativeDateField" },
      { slug: "native-select-field", title: "NativeSelectField" },
      { slug: "number-field", title: "NumberField" },
      { slug: "paper", title: "Paper" },
      { slug: "password-field", title: "PasswordField" },
      { slug: "pin-field", title: "PinField" },
      { slug: "popover", title: "Popover" },
      { slug: "portal", title: "Portal" },
      { slug: "progress", title: "Progress" },
      { slug: "radio", title: "Radio" },
      { slug: "segmented-field", title: "SegmentedField" },
      { slug: "select-field", title: "SelectField" },
      { slug: "show", title: "Show" },
      { slug: "skeleton", title: "Skeleton" },
      { slug: "spinner", title: "Spinner" },
      { slug: "square", title: "Square" },
      { slug: "stack", title: "Stack" },
      { slug: "switch", title: "Switch" },
      { slug: "table", title: "Table" },
      { slug: "tabs", title: "Tabs" },
      { slug: "text", title: "Text" },
      { slug: "textarea-field", title: "TextareaField" },
      { slug: "text-field", title: "TextField" },
      { slug: "toaster", title: "Toaster" },
      { slug: "tooltip", title: "Tooltip" },
      { slug: "transition", title: "Transition" },
    ],
  },
  {
    title: "Components API",
    slug: "components-api",
    icon: <Code />,
    items: [
      { slug: "accordion-api", title: "Accordion API" },
      { slug: "action-button-api", title: "ActionButton API" },
      { slug: "alert-api", title: "Alert API" },
      { slug: "animation-api", title: "Animation API" },
      { slug: "aspect-ratio-api", title: "AspectRatio API" },
      { slug: "autocomplete-field-api", title: "AutocompleteField API" },
      { slug: "avatar-api", title: "Avatar API" },
      { slug: "backdrop-api", title: "Backdrop API" },
      { slug: "badge-api", title: "Badge API" },
      { slug: "box-api", title: "Box API" },
      { slug: "breadcrumb-api", title: "Breadcrumb API" },
      { slug: "button-api", title: "Button API" },
      { slug: "card-api", title: "Card API" },
      { slug: "center-api", title: "Center API" },
      { slug: "checkbox-api", title: "Checkbox API" },
      { slug: "chip-api", title: "Chip API" },
      { slug: "circle-api", title: "Circle API" },
      { slug: "close-button-api", title: "CloseButton API" },
      { slug: "collapse-api", title: "Collapse API" },
      { slug: "color-field-api", title: "ColorField API" },
      { slug: "container-api", title: "Container API" },
      { slug: "dialog-api", title: "Dialog API" },
      { slug: "divider-api", title: "Divider API" },
      { slug: "drawer-api", title: "Drawer API" },
      { slug: "field-api", title: "Field API" },
      { slug: "flex-api", title: "Flex API" },
      { slug: "form-api", title: "Form API" },
      { slug: "gradient-api", title: "Gradient API" },
      { slug: "grid-api", title: "Grid API" },
      { slug: "hidden-api", title: "Hidden API" },
      { slug: "hide-api", title: "Hide API" },
      { slug: "highlight-api", title: "Highlight API" },
      { slug: "icon-api", title: "Icon API" },
      { slug: "image-api", title: "Image API" },
      { slug: "initials-api", title: "Initials API" },
      { slug: "key-api", title: "Key API" },
      { slug: "link-api", title: "Link API" },
      { slug: "list-api", title: "List API" },
      { slug: "menu-api", title: "Menu API" },
      { slug: "modal-api", title: "Modal API" },
      { slug: "native-date-field-api", title: "NativeDateField API" },
      { slug: "native-select-field-api", title: "NativeSelectField API" },
      { slug: "number-field-api", title: "NumberField API" },
      { slug: "paper-api", title: "Paper API" },
      { slug: "password-field-api", title: "PasswordField API" },
      { slug: "pin-field-api", title: "PinField API" },
      { slug: "popover-api", title: "Popover API" },
      { slug: "portal-api", title: "Portal API" },
      { slug: "progress-api", title: "Progress API" },
      { slug: "radio-api", title: "Radio API" },
      { slug: "segmented-field-api", title: "SegmentedField API" },
      { slug: "select-field-api", title: "SelectField API" },
      { slug: "show-api", title: "Show API" },
      { slug: "skeleton-api", title: "Skeleton API" },
      { slug: "spinner-api", title: "Spinner API" },
      { slug: "square-api", title: "Square API" },
      { slug: "stack-api", title: "Stack API" },
      { slug: "switch-api", title: "Switch API" },
      { slug: "table-api", title: "Table API" },
      { slug: "tabs-api", title: "Tabs API" },
      { slug: "text-api", title: "Text API" },
      { slug: "textarea-field-api", title: "TextareaField API" },
      { slug: "text-field-api", title: "TextField API" },
      { slug: "toaster-api", title: "Toaster API" },
      { slug: "tooltip-api", title: "Tooltip API" },
      { slug: "transition-api", title: "Transition API" },
    ],
  },
  {
    title: "Hooks",
    slug: "hooks",
    icon: <Wrench />,
    items: [
      { slug: "use-animation", title: "useAnimation" },
      { slug: "use-counter", title: "useCounter" },
      { slug: "use-debounce", title: "useDebounce" },
      { slug: "use-dimensions", title: "useDimensions" },
      { slug: "use-draggable", title: "useDraggable" },
      { slug: "use-emulated-field-change", title: "useEmulatedFieldChange" },
      { slug: "use-form", title: "useForm" },
      { slug: "use-id", title: "useId" },
      { slug: "use-idle", title: "useIdle" },
      { slug: "use-interval", title: "useInterval" },
      { slug: "use-keyboard-shortcut", title: "useKeyboardShortcut" },
      { slug: "use-local-storage", title: "useLocalStorage" },
      { slug: "use-localization", title: "useLocalization" },
      { slug: "use-media-query", title: "useMediaQuery" },
      { slug: "use-memoization", title: "useMemoization" },
      { slug: "use-outside-click", title: "useOutsideClick" },
      { slug: "use-previous", title: "usePrevious" },
      { slug: "use-styling", title: "useStyling" },
      { slug: "use-toggle", title: "useToggle" },
    ],
  },
  {
    title: "Validators",
    slug: "validators",
    icon: <Checks />,
    items: [
      { slug: "min", title: "min" },
      { slug: "max", title: "max" },
      { slug: "required", title: "required" },
      { slug: "match", title: "match" },
      { slug: "url", title: "url" },
      { slug: "email", title: "email" },
      { slug: "username", title: "username" },
    ],
  },
];

export default content;
