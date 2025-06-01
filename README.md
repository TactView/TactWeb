# TactWeb

A modern React web application built with Vite, TypeScript, and Tailwind CSS.

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

   This will start the development server on `http://localhost:3000` with hot reload enabled.

3. **Alternative development commands:**
   ```bash
   npm run dev:open    # Start dev server and automatically open browser
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run dev:open` - Start development server and open browser
- `npm run build` - Build for production
- `npm run build:dev` - Build for development (with source maps)
- `npm run serve` - Preview production build locally
- `npm run serve:open` - Preview production build and open browser
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint and fix issues automatically
- `npm run type-check` - Check TypeScript types without emitting files
- `npm run clean` - Clean build directory

### Development Features

- ⚡ **Hot Module Replacement (HMR)** - Instant updates without page refresh
- 🔧 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **Vite** - Fast build tool and development server
- 🧹 **ESLint** - Code linting and formatting

### Environment Variables

Copy `.env.example` to `.env.local` and modify values as needed:

```bash
cp .env.example .env.local
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.
