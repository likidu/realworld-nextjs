import RegisterForm from '@/components/register-form'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='container'>
      <div className='mt-6 flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>Sign up</h1>
        <p className='text-sm text-muted-foreground'>
          Have an account?{' '}
          <Link href='/login' className='text-accent hover:underline'>
            Sign in
          </Link>
        </p>
        <RegisterForm />
      </div>
    </div>
  )
}
