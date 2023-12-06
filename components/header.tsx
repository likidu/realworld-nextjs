import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href='/'>Conduit</Link>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/login'>Sign in</Link>
        <Link href='/register'>Sign up</Link>
      </nav>
    </header>
  )
}
