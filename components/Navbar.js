import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { useTheme } from 'next-themes';
import NextLink from 'next/link'

// import Sun from 'Assets/Img/Svg/Sun'
// import Moon from 'Assets/Img/Svg/Moon'

const navBarItems = [
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'About',
    link: '/about',
  },
  { name: 'Home', link: '/' },
]

export default function Navbar() {
  const router = useRouter()
  const currentRoute = router.pathname
  // const [mounted, setMounted] = useState(false);
  // const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  // useEffect(() => setMounted(true), [])

  return (
    <div className="sticky-nav bg-navbar-light dark:bg-navbar-dark my-0 w-full border-b border-gray-400 border-opacity-10 bg-opacity-30">
      <nav className="mx-auto flex max-w-4xl items-center justify-between p-3.5 text-gray-900 dark:text-gray-100">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        {/* <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-accent-primarylight dark:bg-accent-primarydark w-10 h-10 p-3 rounded"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted &&
            (resolvedTheme === 'dark' ? (
              <div className="theme-toggle">
                <Sun />
              </div>
            ) : (
              <div className="theme-toggle">
                <Moon />
              </div>
            ))}
        </button> */}
        <div>
          {navBarItems.map((item) => {
            return (
              <NextLink href={item.link} key={item.name}>
                <a
                  className={`ml-2 rounded-sm px-1.5 py-1.5 text-base 
                             
                              font-medium text-gray-900 transition-all dark:text-gray-100 sm:mx-1.5
                              ${
                                currentRoute != item.link &&
                                'hover:bg-brand-secondaryLight dark:hover:bg-brand-secondaryDark'
                              }
                              ${
                                currentRoute === item.link &&
                                'bg-brand-primary dark:hover:bg-brand-primary hover:bg-brand-primary text-white'
                              }
                          `}
                >
                  {item.name}
                </a>
              </NextLink>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
