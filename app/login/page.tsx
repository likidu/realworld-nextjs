export default function Page() {
  return (
    <div>
      <h1>Sign in</h1>
      <p>Need an account?</p>
      <a href='/register'>Sign up</a>
      <form>
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
        <button className='block w-full'>Sign in</button>
      </form>
    </div>
  )
}
