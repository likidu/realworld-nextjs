'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { authenticate } from '@/lib/action'
import { useFormState } from 'react-dom'

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <form action={dispatch} className='w-full md:max-w-[40%] space-y-4'>
      <div>
        <Label htmlFor='email' className='mb-4 px-3 py-4'>
          Email
        </Label>
        <Input
          id='email'
          type='email'
          name='email'
          placeholder='name@example.com'
          autoCapitalize='none'
          autoComplete='email'
          className='mb-4 px-3 py-4'
        />
      </div>
      <div>
        <Label htmlFor='password' className='mb-4 px-3 py-4'>
          Password
        </Label>
        <Input
          id='password'
          type='password'
          name='password'
          placeholder='Enter password'
          className='mb-4 px-3 py-4'
        />
      </div>
      <Button variant='outline' size='lg' type='submit'>
        Sign in
      </Button>
      <div>
        {errorMessage && <p className='text-sm text-red-600'>{errorMessage}</p>}
      </div>
    </form>
  )
}
