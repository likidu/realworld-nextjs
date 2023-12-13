import LoginForm from '@/components/login-form'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='container'>
      <div className='mt-6 flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>Sign in</h1>
        <p className='text-sm text-muted-foreground'>
          Need an account?{' '}
          <Link href='/register' className='text-accent hover:underline'>
            Sign up
          </Link>
        </p>
        <LoginForm />
      </div>
    </div>
  )
}
