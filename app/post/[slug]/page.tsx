import TagGroup from '@/components/tag-group'
import Separator from '@/components/ui/separator'
import { getPostBySlug } from '@/lib/data'
import Link from 'next/link'

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <TagGroup tags={post.tagList} />
      <Separator className='my-4' />
      <div className='mx-[-15px] flex flex-wrap'>
        <p className='mb-12 ml-[16.66667%] mt-6'>
          <Link href='/login' className='text-primary'>
            Sign in
          </Link>{' '}
          or{' '}
          <Link href='/register' className='text-primary'>
            sign up
          </Link>{' '}
          to add comments on this article.
        </p>
      </div>
    </div>
  )
}
