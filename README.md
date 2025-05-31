# Next.js 博客项目

一个基于 Next.js 15 构建的现代化博客系统，支持 MDX 内容管理、主题切换和响应式设计。

## 📋 项目概述

这是一个功能完整的博客应用，采用最新的 Next.js App Router 架构，集成了内容管理、主题系统和现代化的用户界面。项目专注于性能优化、用户体验和开发者友好性。

### 主要特性

- 🚀 **现代化技术栈**：基于 Next.js 15 + React 19 + TypeScript
- 📝 **MDX 内容管理**：支持 Markdown 和 MDX 格式的博客文章
- 🎨 **智能主题系统**：支持浅色/深色/系统主题自动切换
- 📱 **响应式设计**：完美适配桌面端和移动端
- ⚡ **性能优化**：SSG 静态生成，快速加载
- 🎯 **SEO 友好**：优化的元数据和结构化数据
- 🔍 **代码高亮**：内置语法高亮支持
- 🎭 **自定义样式**：基于 CSS 变量的主题系统

## 🛠 技术栈

### 核心框架
- **[Next.js 15.3.3](https://nextjs.org/)** - React 全栈框架
- **[React 19](https://react.dev/)** - 用户界面库
- **[TypeScript 5](https://www.typescriptlang.org/)** - 类型安全的 JavaScript

### 样式和主题
- **[Tailwind CSS 4](https://tailwindcss.com/)** - 原子化 CSS 框架
- **[next-themes 0.4.6](https://github.com/pacocoursey/next-themes)** - 主题切换管理
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - 排版样式插件

### 内容管理
- **[@content-collections](https://www.content-collections.dev/)** - 现代化内容管理系统
- **[MDX](https://mdxjs.com/)** - Markdown + JSX 支持
- **[remark-gfm](https://github.com/remarkjs/remark-gfm)** - GitHub 风格 Markdown
- **[rehype-highlight](https://github.com/rehypejs/rehype-highlight)** - 代码语法高亮
- **[rehype-slug](https://github.com/rehypejs/rehype-slug)** - 自动生成标题锚点

### 工具库
- **[date-fns 4.1.0](https://date-fns.org/)** - 现代化日期处理库
- **[zod 3.25.42](https://zod.dev/)** - TypeScript 优先的模式验证

### 开发工具
- **[ESLint 9](https://eslint.org/)** - 代码质量检查
- **[PostCSS](https://postcss.org/)** - CSS 后处理器

## 🚀 快速开始

### 环境要求

- **Node.js**: >= 18.17.0
- **包管理器**: 推荐使用 pnpm

### 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用其他包管理器
npm install
# yarn install
```

### 开发环境

```bash
# 启动开发服务器
pnpm dev

# 或使用其他包管理器
npm run dev
# yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 生产环境

```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start

# 代码检查
pnpm lint
```

## 📁 项目结构

```
next-blog/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # 全局样式和主题变量
│   │   ├── layout.tsx         # 根布局组件
│   │   ├── page.tsx           # 首页组件
│   │   └── posts/             # 博客文章页面
│   └── components/            # 可复用组件
│       ├── Header.tsx         # 网站头部导航
│       ├── ThemeProvider.tsx  # 主题提供者
│       └── ThemeToggle.tsx    # 主题切换按钮
├── posts/                     # 博客文章内容
│   ├── hello-world.md         # Markdown 文章示例
│   └── first.mdx              # MDX 文章示例
├── public/                    # 静态资源
├── content-collections.ts     # 内容管理配置
├── next.config.ts            # Next.js 配置
├── tsconfig.json             # TypeScript 配置
├── postcss.config.mjs        # PostCSS 配置
└── package.json              # 项目依赖和脚本
```

## ⚙️ 配置说明

### 主题配置

项目使用 CSS 变量系统实现主题切换，主要配置在 `src/app/globals.css` 中：

- **浅色主题**：`:root` 选择器定义的变量
- **深色主题**：`.dark` 选择器定义的变量
- **系统主题**：通过 `@media (prefers-color-scheme: dark)` 自动适配

### 内容管理配置

内容配置在 `content-collections.ts` 中：

```typescript
// 文章 Schema
schema: z.object({
  title: z.string(),    // 文章标题
  date: z.string(),     // 发布日期
})
```

### Tailwind CSS 配置

项目使用 Tailwind CSS 4 的新语法：
- 通过 `@import "tailwindcss"` 导入核心样式
- 使用 `@plugin "@tailwindcss/typography"` 导入插件
- 通过 `@theme inline` 定义自定义主题变量

## 📝 开发指南

### 添加新文章

1. 在 `posts/` 目录下创建新的 `.md` 或 `.mdx` 文件
2. 添加必要的 frontmatter：

```markdown
---
title: "文章标题"
date: "2024-01-01"
---

# 文章内容

这里是文章的正文内容...
```

### 自定义主题

1. 修改 `src/app/globals.css` 中的 CSS 变量
2. 在 `:root` 和 `.dark` 选择器中定义对应的颜色值
3. 使用 `@theme inline` 将变量映射到 Tailwind 类名

### 添加新组件

1. 在 `src/components/` 目录下创建新组件
2. 使用 TypeScript 定义组件类型
3. 遵循项目的命名约定和代码风格

### 修改样式

项目使用 Tailwind CSS + CSS 变量的混合方案：
- 使用 Tailwind 类名进行快速开发
- 使用 CSS 变量实现主题切换
- 自定义样式写在 `globals.css` 中

## 🤝 贡献指南

我们欢迎所有形式的贡献！请遵循以下步骤：

1. **Fork 项目**到您的 GitHub 账户
2. **创建功能分支**：`git checkout -b feature/amazing-feature`
3. **提交更改**：`git commit -m 'Add some amazing feature'`
4. **推送分支**：`git push origin feature/amazing-feature`
5. **创建 Pull Request**

### 代码规范

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 配置的代码规范
- 组件使用 PascalCase 命名
- 文件使用 kebab-case 或 camelCase 命名
- 提交信息使用英文，遵循 Conventional Commits 规范

### 开发流程

1. 确保所有测试通过：`pnpm lint`
2. 检查构建是否成功：`pnpm build`
3. 测试开发环境：`pnpm dev`
4. 提交前进行代码格式化

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。您可以自由使用、修改和分发本项目。

## 🔗 相关链接

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Content Collections 文档](https://www.content-collections.dev/)
- [next-themes 文档](https://github.com/pacocoursey/next-themes)

---

**感谢您使用 Next.js 博客项目！** 🎉
