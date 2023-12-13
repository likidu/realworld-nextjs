import { auth } from '@/auth'
import NavBar from './nav-bar'

export default async function Header() {
  const session = await auth()

  return (
    <header>
      <NavBar session={session} />
    </header>
  )
}
