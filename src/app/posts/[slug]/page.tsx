import { format, parseISO } from 'date-fns'
import { allPosts } from 'content-collections'
import { MDXContent } from '@content-collections/mdx/react'
import LazyGiscusComments from '@/components/comments/LazyGiscusComments'
import { giscusConfig } from '@/config/giscus'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.slug }))

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)
  if (!post) throw new Error(`Post not found for slug: ${slug}`)
  return { title: post.title }
}

const PostLayout = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)
  if (!post) throw new Error(`Post not found for slug: ${slug}`)

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      <article className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <time dateTime={post.date} className="mb-4 block text-sm text-text-muted">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
          <h1 className="text-4xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-gray prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-text-secondary prose-strong:text-foreground prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800 prose-pre:text-gray-100 prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:bg-secondary dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-a:text-link dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-border prose-blockquote:text-text-secondary">
          <MDXContent code={post.mdx} />
        </div>

        {/* 评论区分隔线 */}
        <div className="mt-16 mb-8">
          <div className="border-t border-border"></div>
        </div>

        {/* 评论区 */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">评论</h2>
          <LazyGiscusComments
            config={giscusConfig}
            className="mt-6"
          />
        </section>
      </article>
    </div>
  )
}

export default PostLayout
