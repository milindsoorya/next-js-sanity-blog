import Head from 'next/head'
import { useRouter } from 'next/router'

// import NewsLetter from 'components/NewsLetter';
import Navbar from './Navbar'
import Footer from './Footer';

export default function Container(props) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const baseURL = 'https://www.milindsoorya.com'
  const meta = {
    title: 'Milind Soorya - Developer, writer, creator.',
    description: `Hi, I'm Milind. I'm a Data Scientist and Front-end developer. I love figuring out new technologies and publishing my findings. 
    I envision this site to exist as an ever growing repository of ideas, productivity helpers and things I enjoy. Hopefully you'll find some of it interesting and helpful.`,
    image: `${baseURL}/static/images/banner.png`,
    type: 'website',
    ...customMeta,
  }

  return (
    <div className="bg-background-light dark:bg-background-dark flex min-h-screen flex-col">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${baseURL}${router.asPath}`} />
        <link rel="canonical" href={`${baseURL}${router.asPath}`} />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Milind Soorya" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@milindsoorya" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main
        id="skip"
        className="bg-background-light dark:bg-background-dark mt-8 flex flex-col justify-center px-8"
      >
        {children}
      </main>
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  )
}
