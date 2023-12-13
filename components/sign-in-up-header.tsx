import Link from 'next/link'

interface SignInUpHeaderProps {
  title: string
  subtitle: string
  link: string
}

export default function SignInUpHeader({
  title,
  subtitle,
  link,
}: SignInUpHeaderProps) {
  return (
    <>
      <h1 className='text-2xl font-semibold tracking-tight'>{title}</h1>
      <p className='text-sm text-muted-foreground'>
        {subtitle}&nbsp;
        <Link href='/register'>{link}</Link>
      </p>
    </>
  )
}
