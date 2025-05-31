import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'content-collections'

function PostCard(post: Post) {
  return (
    <div className="mb-8 p-6 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-200">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-link hover:text-link-hover transition-colors duration-200">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-text-muted">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm text-text-secondary leading-relaxed">
        {/* 显示内容摘要 */}
        {post.content.substring(0, 150)}...
      </div>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-12 text-center text-3xl font-black text-foreground">
          Next.js + Contentlayer
        </h1>
        <div className="space-y-6">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}
