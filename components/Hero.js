import Github from '../Assets/Img/Svg/Github'
import LinkedIn from '../Assets/Img/Svg/LinkedIn'
import Twitter from '../Assets/Img/Svg/Twitter'
import Link from 'next/link'

const title = "Hey, I'm Milind Soorya "
const subTitle = `I love figuring out new technologies and publishing my findings. 
  I envision this site to exist as an ever growing repository of ideas, productivity helpers and things I enjoy. Hopefully you'll find some of it interesting and helpful.`

const socialMedias = [
  {
    name: 'Twitter',
    icon: <Twitter />,
    redirect: 'https://twitter.com/milindsoorya',
  },

  {
    name: 'LinkedIn',
    icon: <LinkedIn />,
    redirect: 'https://www.linkedin.com/in/milindsoorya/',
  },
  {
    name: 'github',
    icon: <Github />,
    redirect: 'https://github.com/milindsoorya',
  },
]

export default function Hero() {
  return (
    <section className="bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-2 py-8 md:px-6">
        <div className="items-center  lg:flex lg:flex-row ">
          <div className="m-auto max-w-2xl">
            <h1 className="dark:text-green-light text-2xl font-bold sm:text-3xl">
              {title}
            </h1>
            <p className="text-text-secondarylight dark:text-text-secondarydark mt-4 text-sm sm:text-lg">
              {subTitle}
            </p>
            <div className="-mx-2 mt-6 flex items-center">
              {socialMedias.map((item) => {
                return (
                  <Link href={item.redirect} key={item.name}>
                    <a
                      target="_blank"
                      rel="noopener"
                      className="social-media-svg mx-2 w-5"
                      aria-label={item.name}
                    >
                      {item.icon}
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
