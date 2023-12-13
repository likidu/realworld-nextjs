import { signOut } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Session } from 'next-auth'
import Link from 'next/link'

export default function UserMenu({ session }: { session: Session }) {
  const { email, image } = session?.user || {}
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Link href='#'>
          <Avatar className='h-9 w-9'>
            <AvatarImage src={image} alt='@shadcn' />
            <AvatarFallback>LD</AvatarFallback>
          </Avatar>
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>My account</p>
            <p className='text-xs leading-none text-muted-foreground'>
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {/* FIXME: Only form can be submitted? */}
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
            className='w-full'
          >
            <button className='w-full'>Sign Out</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
