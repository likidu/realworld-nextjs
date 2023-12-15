import { Inter, Titillium_Web } from 'next/font/google'

export type SiteConfig = typeof siteConfig

const inter = Inter({ subsets: ['latin'] })
const titillium = Titillium_Web({ weight: '700', subsets: ['latin'] })

const siteConfig = {
  name: 'conduit',
  description: 'RealWorld sample app with Next.js and TiDB Serverless.',
  mainNav: [
    {
      title: 'Sign In',
      href: '/login',
    },
    {
      title: 'Sign Up',
      href: '/register',
    },
  ],
  links: {
    twitter: 'https://twitter.com/pingcap',
    github: 'https://github.com/pingcap/tidb',
    docs: 'https://docs.pingcap.com/tidbcloud/',
  },
  fonts: {
    inter,
    titillium,
  },
  limit: 10,
  pages: 20,
}

export default siteConfig
