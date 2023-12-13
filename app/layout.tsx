import ClientRouterHandler from '@/components/client-router-handler'
import Header from '@/components/header'
import siteConfig from '@/config/site'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${siteConfig.fonts.inter.className} antialiased`}>
        <Header />
        {children}
        <ClientRouterHandler />
      </body>
    </html>
  )
}
