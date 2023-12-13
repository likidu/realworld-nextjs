import prisma from '@/lib/prisma'
import { Prisma, Tag, User } from '@prisma/client'
import { unstable_noStore as noStore } from 'next/cache'

// Create type that includes relations
// https://www.prisma.io/docs/orm/prisma-client/type-safety/operating-against-partial-structures-of-model-types#solution
const postWithAuthor = Prisma.validator<Prisma.PostDefaultArgs>()({
  include: {
    author: {
      select: { username: true, email: true, image: true },
    },
  },
})

export type PostWithAuthor = Prisma.PostGetPayload<typeof postWithAuthor>

// export type PostWithAuthor = Prisma.PromiseReturnType<typeof getPosts>

// # of posts per page
const PAGE_SIZE = 6

export async function getPosts(currentPage: number) {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()

  const posts = await prisma.post.findMany({
    skip: (currentPage - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
    where: {},
    include: {
      author: {
        select: { username: true, email: true, image: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return posts
}

export async function getTotalPostPages() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()

  const totalPostCount = await prisma.post.count()
  const totalPages = Math.ceil(totalPostCount / PAGE_SIZE)

  return totalPages
}

export async function getTags() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()

  const tags: Tag[] = await prisma.tag.findMany({
    where: {},
    include: {},
  })

  return tags
}

export async function getPostBySlug(slug: string) {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()

  const post = await prisma.post.findUnique({
    where: { slug },
    include: { author: true },
  })

  return post
}

export async function getUser(email: string) {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()

  const user: User | null = await prisma.user.findUnique({
    where: { email },
    include: {},
  })

  return user
}
