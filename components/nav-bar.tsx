import { buttonVariants } from '@/components/ui/button'
import UserMenu from '@/components/user-menu'
import siteConfig from '@/config/site'
import { Session } from 'next-auth'
import Link from 'next/link'

export default function NavBar({ session }: { session: Session }) {
  return (
    <div className='w-full flex justify-center border-b border-gray-200 bg-white/0'>
      <div className='mx-5 flex h-16 max-w-screen-xl px-8 items-center justify-between w-full'>
        <Link href='/'>
          <h2
            className={`${siteConfig.fonts.titillium.className} text-2xl font-bold text-accent tracking-tight`}
          >
            conduit
          </h2>
        </Link>
        <nav>
          {session ? (
            <UserMenu session={session} />
          ) : (
            <div className='flex items-center space-x-2'>
              <Link
                href='/login'
                className={buttonVariants({ variant: 'outline' })}
              >
                Sign in
              </Link>
              <Link
                href='/register'
                className={buttonVariants({ variant: 'outline' })}
              >
                Sign up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  )
}
