# SCSS & Tailwind CSS Setup

This project uses a well-organized SCSS structure combined with Tailwind CSS for styling.

## 📁 Folder Structure

```
src/styles/
├── _variables.scss          # SCSS variables (colors, typography, spacing, etc.)
├── _mixins.scss             # Reusable SCSS mixins
├── main.scss                # Main entry point that imports everything
├── base/
│   └── _base.scss           # Base styles and CSS reset
├── layout/
│   └── _layout.scss         # Layout utilities and grid system
├── components/
│   └── _components.scss     # Component styles (buttons, forms, cards, etc.)
└── pages/
    └── (page-specific styles)
```

## 🎨 Variables

The `_variables.scss` file contains:

- **Colors**: Primary, secondary, accent, semantic colors
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale
- **Border Radius**: Rounded corner values
- **Shadows**: Box shadow definitions
- **Transitions**: Animation durations
- **Z-Index**: Layering system
- **Breakpoints**: Responsive breakpoints

## 🔧 Mixins

The `_mixins.scss` file includes:

- **Responsive**: Mobile, tablet, desktop breakpoints
- **Flexbox**: Center, between, column utilities
- **Buttons**: Primary, secondary, outline, ghost styles
- **Cards**: Base, hover, interactive card styles
- **Typography**: Heading and body text styles
- **Layout**: Container, grid systems
- **Utilities**: Visually hidden, truncate, aspect ratio

## 🎯 Usage Examples

### Using SCSS Variables
```scss
.my-component {
  background-color: $primary-500;
  padding: $spacing-md;
  border-radius: $border-radius-lg;
  font-size: $font-size-lg;
}
```

### Using SCSS Mixins
```scss
.my-button {
  @include button-primary;
}

.my-card {
  @include card-interactive;
}

.my-grid {
  @include grid-3;
}
```

### Using Tailwind with SCSS Variables
```html
<div class="bg-primary-500 p-md rounded-lg text-lg">
  Content
</div>
```

## 🌙 Dark Mode Support

The setup includes automatic dark mode support through CSS custom properties that change based on `prefers-color-scheme`.

## 📱 Responsive Design

Use the responsive mixins for consistent breakpoints:

```scss
.my-component {
  padding: $spacing-md;
  
  @include desktop {
    padding: $spacing-lg;
  }
}
```

## 🚀 Getting Started

1. Import the main SCSS file in your `globals.scss`:
   ```scss
   @import '../styles/main.scss';
   ```

2. Use SCSS variables and mixins in your components
3. Use Tailwind classes for rapid prototyping
4. Create custom components using the provided mixins

## 📝 Best Practices

- Use SCSS variables for consistent theming
- Use mixins for reusable component patterns
- Combine SCSS and Tailwind for maximum flexibility
- Keep component-specific styles in separate files
- Use semantic color names (primary, secondary, success, etc.)
