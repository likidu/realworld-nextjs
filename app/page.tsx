import Banner from '@/components/banner'
import PostFeed from '@/components/post-feed'
import PostPreview from '@/components/post-preview'
import TagGroup from '@/components/tag-group'
import Pagination from '@/components/ui/pagination'
import { getPosts, getTags, getTotalPostPages } from '@/lib/data'
import { FeedTab } from '@/types'
import { Suspense } from 'react'

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string
  }
}) {
  let tabList: FeedTab[] = [{ name: 'Global Feed', value: 'global' }]
  const currentPage = Number(searchParams?.page) || 1
  const posts = await getPosts(currentPage)
  const totalPages = await getTotalPostPages()
  const tags = await getTags()

  return (
    <>
      <Banner />
      <main>
        <div className='container'>
          <div className='conduit-width lg:flex-row lg:space-x-12 lg:space-y-0'>
            <Suspense fallback={<div className='flex-1'>Loading...</div>}>
              <div className='flex-1'>
                <PostFeed tabList={tabList}>
                  {posts.map(post => (
                    <PostPreview key={post.slug} post={post} />
                  ))}
                  <div className='mt-5 flex w-full justify-center'>
                    <Pagination totalPages={totalPages} />
                  </div>
                </PostFeed>
              </div>
            </Suspense>
            <aside className='basis-1/4 pb-8 sm:mt-0 md:mt-6'>
              <div className='rounded bg-secondary p-[10px]'>
                <p className='mb-[0.2rem]'>Popular Tags</p>
                <TagGroup tags={tags} />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
