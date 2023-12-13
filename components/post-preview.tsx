import Separator from '@/components/ui/separator'
import { PostWithAuthor } from '@/lib/data'
import Link from 'next/link'
import PostMeta from './post-meta'
import TagGroup from './tag-group'

interface PostPreviewProps {
  post: PostWithAuthor
}

export default async function PostPreview({ post }: PostPreviewProps) {
  return (
    <>
      <div className='flex flex-col w-full px-4 py-8 mx-auto dark:bg-gray-800'>
        <PostMeta author={post.author} createdAt={post.createdAt} />
        <div className='mt-2'>
          <Link href={`/post/${post.slug}`}>
            <h1 className='first-letter:capitalize text-2xl font-bold text-gray-700 dark:text-white hover:text-primary dark:hover:text-gray-200 hover:underline'>
              {post.title}
            </h1>
          </Link>
          <p className='mt-2 text-gray-600 dark:text-gray-300'>
            {post.description}
          </p>
        </div>
        <div className='flex items-center justify-between mt-4'>
          <Link
            className='text-accent dark:text-blue-400 hover:underline'
            href={`/post/${post.slug}`}
          >
            Read more...
          </Link>
        </div>
        <div className='flex items-center justify-between w-full mt-4'>
          <TagGroup tags={post.tagList} />
        </div>
      </div>
      <Separator className='my-[1px]' />
    </>
  )
}
