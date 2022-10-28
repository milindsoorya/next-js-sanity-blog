import Image from 'next/image'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import CoverImage from './cover-image'
import { urlForImage } from '../lib/sanity'
import Date from '../components/date'

const BlogPost = ({ image, title, summary, slug, publishedAt }) => {
  return (
    <div className="mb-8 flex h-auto w-full items-center space-x-3 transition-all sm:p-2">
      <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
        <CoverImage
          slug={slug}
          title={title}
          imageObject={image}
          url={urlForImage(image).url()}
        />

        <div className="w-full space-y-1">
          <div className="flex flex-col justify-between md:flex-row">
            <Link href={`/blog/${slug}`}>
              <h2
                className={`text-lg ${
                  image ? 'md:text-lg' : 'md:text-xl'
                } w-full font-medium text-gray-900 dark:text-gray-100`}
              >
                {title}
              </h2>
            </Link>
          </div>
          <p className="overflow-ellipse-2 text-sm text-gray-600 dark:text-gray-400 md:text-base">
            {summary}
          </p>
          <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
            <Date dateString={publishedAt} />
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
