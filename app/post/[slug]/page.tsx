import { auth } from '@/auth'
import PostMeta from '@/components/post-meta'
import TagGroup from '@/components/tag-group'
import Separator from '@/components/ui/separator'
import { getPostBySlug } from '@/lib/data'
import parse from 'html-react-parser'
import Link from 'next/link'

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  const session = await auth()
  return (
    <article>
      <div className='bg-primary'>
        <div className='container'>
          <div className='conduit-width w-full text-primary-foreground'>
            <h1 className='first-letter:capitalize text-5xl font-semibold tracking-tight mb-6'>
              {post.title}
            </h1>
            <PostMeta author={post.author} createdAt={post.createdAt} />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='conduit-width w-full'>
          <p className='text-primary pb-8'>{parse(post.body)}</p>
          <TagGroup tags={post.tagList} />
          <Separator className='my-4' />
          {session ? (
            <div>
              <h3>Comment</h3>
            </div>
          ) : (
            <div className='mx-[-15px] flex flex-wrap'>
              <p className='mb-12 ml-[16.66667%] mt-6'>
                <Link href='/login' className='text-accent hover:underline'>
                  Sign in
                </Link>{' '}
                or{' '}
                <Link href='/register' className='text-accent hover:underline'>
                  sign up
                </Link>{' '}
                to add comments on this article.
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
