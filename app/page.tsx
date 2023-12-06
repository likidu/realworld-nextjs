import PostPreview from '@/components/post-preview'
import TagGroup from '@/components/tag-group'
import Pagination from '@/components/ui/pagination'
import { getPosts, getTags, getTotalPostPages } from '@/lib/data'

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string
  }
}) {
  const currentPage = Number(searchParams?.page) || 1
  const posts = await getPosts(currentPage)
  const totalPages = await getTotalPostPages()
  const tags = await getTags()

  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <div className='mt-5 flex w-full justify-center'>
          <Pagination totalPages={totalPages} />
        </div>
      </main>
      <aside className='basis-1/4 px-4 pb-8 sm:mt-0 md:mt-6'>
        <div className='rounded bg-secondary px-[10px] pb-[10px] pt-[5px]'>
          <p className='mb-[0.2rem]'> Popular Tags </p>
          <TagGroup tags={tags} />
        </div>
      </aside>
    </>
  )
}
