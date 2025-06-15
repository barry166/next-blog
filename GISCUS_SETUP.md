# Giscus 评论系统集成指南

## 📋 第一步：启用 GitHub Discussions

### 1. 启用 Discussions 功能
1. 打开您的仓库：https://github.com/barry166/next-blog
2. 点击仓库顶部的 **Settings** 标签页
3. 在左侧菜单中找到 **General** 部分
4. 向下滚动找到 **Features** 区域
5. 勾选 **Discussions** 复选框
6. 点击 **Set up discussions** 按钮

### 2. 安装 Giscus GitHub App
1. 访问：https://github.com/apps/giscus
2. 点击 **Install** 按钮
3. 选择 **Only select repositories**
4. 选择您的 `barry166/next-blog` 仓库
5. 点击 **Install** 完成安装

## 📋 第二步：获取 Giscus 配置参数

### 1. 访问 Giscus 配置页面
1. 访问：https://giscus.app/zh-CN
2. 在 **仓库** 部分输入：`barry166/next-blog`
3. 等待验证通过（显示绿色勾号）

### 2. 配置选项
- **页面 ↔️ discussion 映射关系**：选择 `pathname`
- **Discussion 分类**：选择 `General`（或创建专门的博客评论分类）
- **特性**：
  - ✅ 启用反应
  - ❌ 不发送 metadata
  - 评论框位置：**评论之后**
- **主题**：选择 `light`（代码会自动切换）

### 3. 复制配置参数
从页面底部复制生成的配置参数，包括：
- `data-repo`
- `data-repo-id`
- `data-category`
- `data-category-id`

## 📋 第三步：配置环境变量

### 1. 创建环境变量文件
复制 `.env.local.example` 为 `.env.local`：
```bash
cp .env.local.example .env.local
```

### 2. 填入配置参数
编辑 `.env.local` 文件，填入从 giscus.app 获取的参数：
```env
NEXT_PUBLIC_GISCUS_REPO=barry166/next-blog
NEXT_PUBLIC_GISCUS_REPO_ID=你的仓库ID
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=你的分类ID
```

## 📋 第四步：测试和部署

### 1. 本地测试
```bash
npm run dev
```
访问任意博客文章页面，检查评论区是否正常显示。

### 2. 部署到生产环境
确保在部署平台（如 Vercel、Netlify）中也配置了相同的环境变量。

## 🎨 自定义样式

评论区样式已经集成到项目的主题系统中，会自动跟随浅色/深色主题切换。

如需进一步自定义，可以修改 `src/app/globals.css` 中的 Giscus 相关样式。

## 🔧 故障排除

### 常见问题
1. **评论区不显示**：检查环境变量是否正确配置
2. **主题不切换**：确保 Giscus 组件正确获取了主题状态
3. **权限错误**：确认 Giscus App 已正确安装到仓库

### 调试方法
1. 打开浏览器开发者工具查看控制台错误
2. 检查网络请求是否成功
3. 验证环境变量是否正确加载

## 📚 相关文档

- [Giscus 官方文档](https://giscus.app/zh-CN)
- [GitHub Discussions 文档](https://docs.github.com/en/discussions)
- [@giscus/react 文档](https://github.com/giscus/giscus-component)
