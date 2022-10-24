import Image from 'next/image'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

const BlogPost = ({ image, title, summary, slug, publishedAt }) => {
  return (
    <div className="hover:bg-accent-primarylight dark:hover:bg-accent-primarydark mb-8 flex h-auto w-full items-center space-x-3 transition-all sm:p-2">
      <Link href={`/blog/${slug}`}>
        <a className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
          {image && (
            <div className="relative h-28 w-full overflow-hidden rounded-sm sm:w-72">
              <Image
                src={image}
                blurDataURL={image}
                layout="fill"
                objectFit={'cover'}
                alt={title}
                placeholder={'blur'}
              />
            </div>
          )}
          <div className="w-full space-y-1">
            <div className="flex flex-col justify-between md:flex-row">
              <h2
                className={`text-lg ${
                  image ? 'md:text-lg' : 'md:text-xl'
                } w-full font-medium text-gray-900 dark:text-gray-100`}
              >
                {title}
              </h2>
            </div>
            <p className="overflow-ellipse-2 text-sm text-gray-600 dark:text-gray-400 md:text-base">
              {summary}
            </p>
            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
              {/* {format(parseISO(publishedAt), 'MMMM dd, yyyy')} */}
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default BlogPost
