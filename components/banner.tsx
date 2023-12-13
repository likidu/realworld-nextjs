import siteConfig from '@/config/site'

export default function Banner() {
  return (
    <div className='w-full p-8 text-accent-foreground bg-accent shadow-[inset_0_8px_8px_-8px_rgba(0,0,0,0.3),inset_0_-8px_8px_-8px_rgba(0,0,0,0.3)]'>
      <div className='flex flex-col items-center justify-center'>
        <h1
          className={`${siteConfig.fonts.titillium.className} text-6xl pb-2 drop-shadow`}
        >
          conduit
        </h1>
        <p className='text-xl'>A place to share your knowledge.</p>
      </div>
    </div>
  )
}
