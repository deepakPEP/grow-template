# Component Structure Documentation

This document outlines the component architecture and structure for the GrowTemplate project.

## 📁 Component Organization

```
src/components/
├── index.ts                 # Component exports
├── layout/                  # Layout components
│   ├── Header.tsx           # Main navigation header
│   └── Footer.tsx           # Site footer
├── sections/                # Page section components
│   ├── Banner.tsx           # Hero banner component
│   ├── FeatureCard.tsx      # Feature card component
│   └── StatsSection.tsx     # Statistics section
└── ui/                      # Reusable UI components
    └── Button.tsx           # Button component
```

## 🧩 Component Details

### Layout Components

#### Header Component
- **File**: `src/components/layout/Header.tsx`
- **Purpose**: Main navigation header with responsive menu
- **Features**:
  - Responsive design (mobile hamburger menu)
  - Sticky positioning
  - Navigation links to all pages
  - Logo/brand display

#### Footer Component
- **File**: `src/components/layout/Footer.tsx`
- **Purpose**: Site footer with links and company information
- **Features**:
  - Multiple link sections (Company, Products, Support, Legal)
  - Social media links
  - Copyright information
  - Responsive grid layout

### Section Components

#### Banner Component
- **File**: `src/components/sections/Banner.tsx`
- **Purpose**: Hero banner for pages
- **Props**:
  - `title`: Main heading text
  - `subtitle`: Subtitle text
  - `description`: Description paragraph
  - `primaryButtonText`: Primary CTA button text
  - `primaryButtonLink`: Primary CTA button link
  - `secondaryButtonText`: Secondary CTA button text
  - `secondaryButtonLink`: Secondary CTA button link
  - `backgroundImage`: Optional background image
  - `className`: Additional CSS classes

#### FeatureCard Component
- **File**: `src/components/sections/FeatureCard.tsx`
- **Purpose**: Reusable feature card component
- **Props**:
  - `icon`: React icon element
  - `title`: Card title
  - `description`: Card description
  - `className`: Additional CSS classes

#### StatsSection Component
- **File**: `src/components/sections/StatsSection.tsx`
- **Purpose**: Statistics display section
- **Props**:
  - `stats`: Array of stat objects with `number`, `label`, `description`
  - `className`: Additional CSS classes

### UI Components

#### Button Component
- **File**: `src/components/ui/Button.tsx`
- **Purpose**: Reusable button component
- **Props**:
  - `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
  - `size`: 'sm' | 'md' | 'lg' | 'xl'
  - `as`: 'button' | 'link'
  - `href`: Link URL (when as='link')
  - `disabled`: Boolean
  - `className`: Additional CSS classes

## 📄 Page Structure

### Home Page (`src/app/page.tsx`)
- Hero banner with CTA buttons
- Features section with 3 feature cards
- Statistics section
- Final CTA section

### About Page (`src/app/about/page.tsx`)
- Hero banner
- Our story section
- Company values section
- Team members section
- Statistics section
- CTA section

### Products Page (`src/app/products/page.tsx`)
- Hero banner
- Products grid (6 products)
- Features section
- Statistics section
- CTA section

### Contact Page (`src/app/contact/page.tsx`)
- Hero banner
- Contact methods section
- Contact form with validation
- Office hours and social links

## 🎨 Styling Integration

All components use a combination of:
- **SCSS Variables**: For consistent theming
- **SCSS Mixins**: For reusable styles
- **Tailwind Classes**: For utility styling
- **Component-specific Classes**: Defined in SCSS files

## 🔄 Reusability

### Component Reuse Examples

1. **FeatureCard** is used across multiple pages:
   - Home page: Features section
   - About page: Values and team sections
   - Products page: Products grid

2. **Banner** component is customized for each page:
   - Different titles and descriptions
   - Page-specific CTA buttons
   - Consistent styling and layout

3. **StatsSection** provides consistent statistics display:
   - Home page: Company metrics
   - About page: Company achievements
   - Products page: Product guarantees

## 🚀 Usage Examples

### Importing Components
```tsx
import { Header, Footer, Banner, FeatureCard } from '@/components';
```

### Using Banner Component
```tsx
<Banner
  title="Page Title"
  subtitle="Page Subtitle"
  description="Page description text"
  primaryButtonText="Primary Action"
  primaryButtonLink="/action"
  secondaryButtonText="Secondary Action"
  secondaryButtonLink="/secondary"
/>
```

### Using FeatureCard Component
```tsx
<FeatureCard
  icon={<YourIcon />}
  title="Feature Title"
  description="Feature description"
/>
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:
- Mobile: Single column layouts
- Tablet: 2-column grids
- Desktop: 3-4 column grids
- Large screens: Optimized spacing and sizing

## 🎯 Best Practices

1. **Consistent Props**: Similar components use consistent prop naming
2. **Accessibility**: All components include proper ARIA labels and semantic HTML
3. **Performance**: Components are optimized for re-rendering
4. **Maintainability**: Clear separation of concerns and reusable patterns
5. **Documentation**: Each component is well-documented with TypeScript types
