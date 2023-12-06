import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'
import prisma from '../lib/prisma'

async function createUser() {
  const email = faker.internet.email()
  const hashedPassword = await bcrypt.hash(faker.internet.password(), 10)

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      username: faker.internet.userName(),
      password: hashedPassword,
      image: faker.image.avatarGitHub(),
    },
  })
}

async function createPost() {
  const title = faker.lorem.sentence({ min: 2, max: 6 })

  const post = await prisma.post.upsert({
    where: { title },
    update: {},
    create: {
      title,
      slug: faker.helpers.slugify(title),
      description: faker.lorem.sentence(),
      body: faker.lorem.paragraphs({ min: 2, max: 5 }),
      authorUsername: faker.internet.userName(),
    },
  })
}

async function createTag() {
  // One word tag name
  const tagName = faker.lorem.word()

  const tag = await prisma.tag.upsert({
    where: { tagName },
    update: {},
    create: {
      tagName,
    },
  })
}

async function main() {
  // Create 5 users
  for (let i = 0; i < 5; i++) {
    await createUser()
  }

  // Create 20 posts
  for (let i = 0; i < 3; i++) {
    await createPost()
  }

  // Create 8 tags
  for (let i = 0; i < 8; i++) {
    await createTag()
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
