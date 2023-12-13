import { Inter, Titillium_Web } from 'next/font/google'

export type SiteConfig = typeof siteConfig

const inter = Inter({ subsets: ['latin'] })
const titillium = Titillium_Web({ weight: '700', subsets: ['latin'] })

const siteConfig = {
  name: 'conduit',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
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
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
  fonts: {
    inter,
    titillium,
  },
  limit: 10,
  pages: 20,
}

export default siteConfig
