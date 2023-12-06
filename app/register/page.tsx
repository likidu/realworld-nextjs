export default function Page() {
  return (
    <div>
      <h1>Register</h1>
      <p>Have an account?</p>
      <a href='/login'>Sign in</a>
      <form>
        <fieldset>
          <input type='text' placeholder='Username' className='block w-full' />
        </fieldset>
        <fieldset>
          <input type='email' placeholder='Email' className='block w-full' />
        </fieldset>
        <fieldset>
          <input
            type='password'
            placeholder='Password'
            className='block w-full'
          />
        </fieldset>
        <button className='block w-full'>Sign up</button>
      </form>
    </div>
  )
}
