# Next.js Blog Project

> **Language**: [中文](README.md) | **English**

A modern blog system built with Next.js 15, featuring MDX content management, theme switching, and responsive design.

## 📋 Project Overview

This is a full-featured blog application using the latest Next.js App Router architecture, integrated with content management, theme system, and modern user interface. The project focuses on performance optimization, user experience, and developer friendliness.

### Key Features

- 🚀 **Modern Tech Stack**: Built with Next.js 15 + React 19 + TypeScript
- 📝 **MDX Content Management**: Support for Markdown and MDX format blog posts
- 🎨 **Smart Theme System**: Support for light/dark/system theme auto-switching
- 📱 **Responsive Design**: Perfect adaptation for desktop and mobile
- ⚡ **Performance Optimized**: SSG static generation for fast loading
- 🎯 **SEO Friendly**: Optimized metadata and structured data
- 🔍 **Code Highlighting**: Built-in syntax highlighting support
- 🎭 **Custom Styling**: CSS variable-based theme system

## 🛠 Tech Stack

### Core Framework
- **[Next.js 15.3.3](https://nextjs.org/)** - React full-stack framework
- **[React 19](https://react.dev/)** - User interface library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling and Theming
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Atomic CSS framework
- **[next-themes 0.4.6](https://github.com/pacocoursey/next-themes)** - Theme switching management
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - Typography styling plugin

### Content Management
- **[@content-collections](https://www.content-collections.dev/)** - Modern content management system
- **[MDX](https://mdxjs.com/)** - Markdown + JSX support
- **[remark-gfm](https://github.com/remarkjs/remark-gfm)** - GitHub Flavored Markdown
- **[rehype-highlight](https://github.com/rehypejs/rehype-highlight)** - Code syntax highlighting
- **[rehype-slug](https://github.com/rehypejs/rehype-slug)** - Auto-generate heading anchors

### Utility Libraries
- **[date-fns 4.1.0](https://date-fns.org/)** - Modern date utility library
- **[zod 3.25.42](https://zod.dev/)** - TypeScript-first schema validation

### Development Tools
- **[ESLint 9](https://eslint.org/)** - Code quality checking
- **[PostCSS](https://postcss.org/)** - CSS post-processor

## 🚀 Quick Start

### Requirements

- **Node.js**: >= 18.17.0
- **Package Manager**: pnpm recommended

### Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using other package managers
npm install
# yarn install
```

### Development Environment

```bash
# Start development server
pnpm dev

# Or using other package managers
npm run dev
# yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Environment

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Code linting
pnpm lint
```

## 📁 Project Structure

```
next-blog/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles and theme variables
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Home page component
│   │   └── posts/             # Blog post pages
│   └── components/            # Reusable components
│       ├── Header.tsx         # Site header navigation
│       ├── ThemeProvider.tsx  # Theme provider
│       └── ThemeToggle.tsx    # Theme toggle button
├── posts/                     # Blog post content
│   ├── hello-world.md         # Markdown post example
│   └── first.mdx              # MDX post example
├── public/                    # Static assets
├── content-collections.ts     # Content management configuration
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.mjs        # PostCSS configuration
└── package.json              # Project dependencies and scripts
```

## ⚙️ Configuration

### Theme Configuration

The project uses a CSS variable system for theme switching, mainly configured in `src/app/globals.css`:

- **Light Theme**: Variables defined in `:root` selector
- **Dark Theme**: Variables defined in `.dark` selector
- **System Theme**: Auto-adaptation through `@media (prefers-color-scheme: dark)`

### Content Management Configuration

Content configuration in `content-collections.ts`:

```typescript
// Post Schema
schema: z.object({
  title: z.string(),    // Post title
  date: z.string(),     // Publication date
})
```

### Tailwind CSS Configuration

The project uses Tailwind CSS 4 new syntax:
- Import core styles via `@import "tailwindcss"`
- Import plugins via `@plugin "@tailwindcss/typography"`
- Define custom theme variables via `@theme inline`

## 📝 Development Guide

### Adding New Posts

1. Create new `.md` or `.mdx` files in the `posts/` directory
2. Add necessary frontmatter:

```markdown
---
title: "Post Title"
date: "2024-01-01"
---

# Post Content

This is the post content...
```

### Customizing Themes

1. Modify CSS variables in `src/app/globals.css`
2. Define corresponding color values in `:root` and `.dark` selectors
3. Use `@theme inline` to map variables to Tailwind class names

### Adding New Components

1. Create new components in the `src/components/` directory
2. Use TypeScript to define component types
3. Follow project naming conventions and code style

### Modifying Styles

The project uses a hybrid approach of Tailwind CSS + CSS variables:
- Use Tailwind class names for rapid development
- Use CSS variables for theme switching
- Write custom styles in `globals.css`

## 🤝 Contributing

We welcome all forms of contributions! Please follow these steps:

1. **Fork the project** to your GitHub account
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Create a Pull Request**

### Code Standards

- Use TypeScript for type-safe development
- Follow ESLint configuration code standards
- Use PascalCase for component naming
- Use kebab-case or camelCase for file naming
- Use English for commit messages, following Conventional Commits specification

### Development Workflow

1. Ensure all tests pass: `pnpm lint`
2. Check if build succeeds: `pnpm build`
3. Test development environment: `pnpm dev`
4. Format code before committing

## 📄 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this project.

## 🔗 Related Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Content Collections Documentation](https://www.content-collections.dev/)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)

---

**Thank you for using the Next.js Blog Project!** 🎉
