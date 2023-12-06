import Separator from '@/components/ui/separator'
import { Post } from '@prisma/client'
import Link from 'next/link'

interface PostPreviewProps {
  post: Post
}

export default async function PostPreview({ post }: PostPreviewProps) {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full max-w-2xl px-4 py-8 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800'>
        <div className='flex items-center justify-between w-full'>
          <span className='font-light text-gray-600 dark:text-gray-400'>
            {post.createdAt.toLocaleDateString('en-US', {})}
          </span>
          <a
            className='px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500'
            href='#'
          >
            Design
          </a>
        </div>
        <div className='mt-2'>
          <Link
            className='text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline'
            href={`/post/${post.slug}`}
          >
            {post.title}
          </Link>
          <p className='mt-2 text-gray-600 dark:text-gray-300'>
            {post.description}
          </p>
        </div>
        <div className='flex items-center justify-between mt-4'>
          <Link
            className='text-blue-600 dark:text-blue-400 hover:underline'
            href={`/post/${post.slug}`}
          >
            Read more...
          </Link>
          <div className='flex items-center'>
            <img
              className='hidden object-cover w-10 h-10 mx-4 rounded-full sm:block'
              src='https://images.unsplash.com/photo-1557804506-669a67965baa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzaWduJTIwdG9vbHMlMjBmb3IlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
              alt='avatar'
            />
            <a className='font-bold text-gray-700 cursor-pointer dark:text-gray-200'>
              {post.authorUsername}
            </a>
          </div>
        </div>
      </div>
      <Separator className='my-[1px]' />
    </>
  )
}
