import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import prisma from '../lib/prisma'

// Create a list of users to be used in the post
const users = [...Array(6)].map(async (element, index) => {
  if (index === 0)
    return {
      email: 'user@tidb.link',
      username: 'DefaultMan',
      password: await bcrypt.hash('123456', 6),
      bio: faker.lorem.sentence(2),
      image: faker.image.avatarGitHub(),
    }
  else
    return {
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: await bcrypt.hash(faker.internet.password(), 6),
      bio: faker.lorem.sentence({ min: 1, max: 3 }),
      image: faker.image.avatarGitHub(),
    }
})

// Create a list of tags to be used in the post
const tags = [...Array(10)].map(() => ({
  tagName: faker.lorem.word(),
}))

// Create a list of posts
const posts = [...Array(20)].map(async () => {
  const title = faker.lorem.words({ min: 2, max: 5 })
  const author = await _.sample(users)

  return {
    title,
    slug: faker.helpers.slugify(title),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    body: faker.lorem.paragraphs({ min: 3, max: 7 }, '<br/>\n'),
    authorUsername: author.username,
  }
})

async function main() {
  // Delete all data
  await prisma.user.deleteMany()
  console.log('Deleted records in User table')

  await prisma.tag.deleteMany()
  console.log('Deleted records in Tag table')

  await prisma.post.deleteMany()
  console.log('Deleted records in Post table')

  await prisma.$queryRaw`ALTER TABLE Comment AUTO_INCREMENT = 1`
  console.log('Reset Comment auto increment to 1')

  // Create users
  await prisma.user.createMany({
    data: await Promise.all(users),
  })
  console.log('Added User data')

  // Create tags
  await prisma.tag.createMany({
    data: tags,
  })
  console.log('Added Tag data')

  // Create posts
  posts.map(async post => {
    const tagList = await _.sampleSize(tags, _.random(1, 3))
    await prisma.post.create({
      data: {
        ...(await post),
        tagList: {
          connect: tagList,
        },
      },
    })
  })
  console.log('Added Post data')
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
