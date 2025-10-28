# Grow Template - Business Website Template

A modern, professional Next.js business website template designed for companies looking to grow their online presence. Built with Next.js 15, React 19, TypeScript, and modern styling technologies.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.15-38bdf8)
![SASS](https://img.shields.io/badge/SASS-1.93.2-cc6699)

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, React 19, TypeScript
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Performance Optimized**: Built with Turbopack for faster development
- **Component Library**: Reusable UI components with SASS/SCSS styling
- **Slider Integration**: React Slick carousel for dynamic content display
- **SEO Friendly**: Structured for search engine optimization
- **Type Safe**: Full TypeScript support for better development experience

## 📋 Pages

- **Home** - Landing page with hero banner, company info, products, and features
- **About** - Company details, vision & mission, certifications, and more
- **Products** - Product listing and showcase
- **Contact** - Contact form and supplier submission

## 🧩 Components

### Layout Components
- **Header** - Navigation and branding
- **Footer** - Site footer with links and information

### Section Components
- **HeroBanner** - Eye-catching hero section
- **Company** - Company information slider
- **Overview** - Company overview section
- **ProductList** - Product showcase
- **WhyUs** - Features and benefits
- **Infrastructure** - Infrastructure details
- **Clientele** - Client logo slider
- **Certifications** - Certification slider
- **CompanyDetails** - Detailed company information cards
- **VisionMission** - Vision and Mission statements
- **SubBanner** - Sub-page banners
- **SupplierForm** - Supplier registration form
- **Accordion** - Collapsible content sections
- **Imagecontent** - Image with content sections

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 15.5.6** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety
- **Turbopack** - Fast development bundler

### Styling
- **Tailwind CSS 4.1.15** - Utility-first CSS framework
- **SASS 1.93.2** - CSS preprocessor with advanced features
- **SCSS Modules** - Component-based styling

### Libraries
- **React Slick** - Carousel/slider component
- **Slick Carousel** - Carousel functionality
- **clsx** - Utility for constructing className strings
- **tailwind-merge** - Merge Tailwind CSS classes

## 📁 Project Structure

```
grow-template/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── products/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/             # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── heroBanner.tsx
│   │   ├── company.tsx
│   │   ├── overview.tsx
│   │   ├── productList.tsx
│   │   ├── whyUs.tsx
│   │   ├── Infrastructure.tsx
│   │   ├── clientele.tsx
│   │   ├── certifications.tsx
│   │   ├── companyDetails.tsx
│   │   ├── visionMission.tsx
│   │   ├── subBanner.tsx
│   │   ├── supplierForm.tsx
│   │   ├── accordion.tsx
│   │   ├── Imagecontent.tsx
│   │   └── index.ts
│   └── styles/                 # SCSS styling files
│       ├── base/
│       ├── components/
│       ├── layout/
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _utilities.scss
│       ├── _fonts.scss
│       ├── main.scss
│       └── tailwind.css
├── public/                     # Static assets
│   ├── fonts/
│   ├── icons/
│   └── images/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd grow-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling Architecture

The project uses a hybrid approach with both Tailwind CSS and SCSS:

- **Tailwind CSS**: For utility classes and rapid development
- **SCSS Modules**: For component-specific styling and complex layouts
- **SCSS Variables**: Centralized design tokens in `_variables.scss`
- **SCSS Mixins**: Reusable style patterns in `_mixins.scss`

### Key SCSS Files

- `_variables.scss` - Color palette, typography, spacing, and design tokens
- `_mixins.scss` - Reusable SCSS mixins
- `_utilities.scss` - Utility classes
- `main.scss` - Main stylesheet entry point

## 🔧 Configuration

### TypeScript
TypeScript is configured with strict mode enabled for better type safety. Path aliases are set up with `@/*` pointing to `./src/*`.

### Tailwind CSS
Tailwind CSS 4 is configured with PostCSS. Configuration file: `tailwind.config.ts`

### Next.js
Next.js 15 is configured with App Router. Configuration file: `next.config.ts`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

### Production Dependencies
- `next` - React framework
- `react` & `react-dom` - UI library
- `react-slick` & `slick-carousel` - Carousel functionality
- `clsx` - ClassName utilities
- `tailwind-merge` - Tailwind class merging
- `sass` - CSS preprocessor

### Development Dependencies
- TypeScript, ESLint, Autoprefixer, PostCSS, and more

## 🗂️ Component Architecture

Components are organized in `src/components/` with individual `.tsx` files and corresponding SCSS files in `src/styles/components/`. Each component is exported through `index.ts` for easy importing.

## 🎯 Use Cases

- Business websites
- Company portfolios
- Product showcase sites
- Corporate landing pages
- B2B websites

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For contributions or questions, please contact the project maintainers.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [SASS Documentation](https://sass-lang.com/documentation)

## 📊 Project Status

**Version**: 0.1.0  
**Status**: Active Development  
**Last Updated**: 2024

---

Built with ❤️ using Next.js and modern web technologies.
