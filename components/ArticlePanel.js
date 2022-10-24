import Link from 'next/link'

import BlogPost from './BlogPost'

const LinkStyle = `px-1.5 py-1.5 text-base ml-2 sm:mx-1.5 inline-flex items-center font-medium text-gray-900 rounded-sm dark:text-gray-100 
hover:text-white dark:hover:bg-brand-primary hover:bg-brand-primary transition-all`

const InternalLink = ({ href, children }) => (
  <Link href={href}>
    <a className={LinkStyle} aria-label="Blog posts">
      {children}
    </a>
  </Link>
)

export default function ArticlePanel({ posts }) {
  const sortedBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 3)

  return (
    <div className="m-auto mb-10 max-w-2xl">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Recent Articles
      </h2>
      {sortedBlogPosts.map((blog) => (
        <BlogPost
          key={blog.slug}
          image={blog.image}
          title={blog.title}
          summary={blog.summary}
          slug={blog.slug}
          publishedAt={blog.publishedAt}
        />
      ))}
      <InternalLink href={'/blog'}>
        Read More Articles
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="ml-2 h-4 w-4"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </InternalLink>
    </div>
  )
}
