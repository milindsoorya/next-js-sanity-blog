import Link from 'next/link'

const LinkStyle = `px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline transition-all`

const InternalLink = ({ href, children }) => (
  <Link href={href}>
    <a className={`${LinkStyle}`}> {children}</a>
  </Link>
)

const ExternalLink = ({ href, children }) => (
  <a
    className={`${LinkStyle}`}
    target="_blank"
    rel="me noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 flex w-full flex-col items-start justify-center sm:max-w-2xl sm:px-10">
      <div className="container py-6">
        <div className="mt-6 flex flex-col items-center justify-between md:flex-row">
          <div>
            <Link href="https://www.milindsoorya.com/">
              <a className="h-card" rel="me">
                © Milind Soorya's Website 2021
              </a>
            </Link>
          </div>

          <div className="mt-4 flex md:m-0">
            <div className="-mx-4">
              <ExternalLink href="https://twitter.com/milindsoorya">
                Twitter
              </ExternalLink>
              <ExternalLink href="https://github.com/milindsoorya">
                Github
              </ExternalLink>
              <InternalLink href="/privacy-policy">Privacy</InternalLink>
              <InternalLink href="/feed.xml">RSS</InternalLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
