import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-header-border bg-header-bg backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/网站标题 */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-link transition-colors duration-200"
            >
              Next.js Blog
            </Link>
          </div>

          {/* 导航菜单和主题切换 */}
          <div className="flex items-center space-x-4">
            {/* 主题切换按钮 */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
