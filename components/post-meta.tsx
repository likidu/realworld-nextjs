import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PostWithAuthor } from '@/lib/data'
import Link from 'next/link'

type PostMetaProps = Pick<PostWithAuthor, 'author' | 'createdAt'>

export default function PostMeta({ author, createdAt }: PostMetaProps) {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center'>
        <Avatar className='h-[32px] w-[32px]'>
          <AvatarImage
            className='rounded-full'
            src={author.image}
            alt='Author Avatar'
            width={32}
            height={32}
          />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <div className='ml-2 mr-6 flex flex-col items-start justify-center'>
          <Link className='font-medium' href={`/profile/`} prefetch={false}>
            {author.username}
          </Link>
          <span className='text-[0.8rem] font-base'>
            {createdAt.toLocaleDateString('en-US', {})}
          </span>
        </div>
      </div>
    </div>
  )
}
