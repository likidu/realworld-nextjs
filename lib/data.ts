import prisma from '@/lib/prisma'
import { Post, Tag, User } from '@prisma/client'
import { unstable_noStore as noStore } from 'next/cache'

const PAGE_SIZE = 3

export async function getPosts(currentPage: number) {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()

  const posts: Post[] = await prisma.post.findMany({
    skip: (currentPage - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
    where: {},
    include: {},
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

  // FIXME: Type 'Post | null' is not assignable to type 'Post'.
  const post: Post | null = await prisma.post.findUnique({
    where: { slug },
    include: {},
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
