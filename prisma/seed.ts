import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  const tweets = [
    {
      author: 'Nuxt Team',
      handle: 'nuxt_js',
      content: 'Just released Nuxt 4! 🎉 Faster, lighter, and better than ever. Check out the new features and improvements in our blog post.',
      comments: 45,
      retweets: 234,
      likes: 892
    },
    {
      author: 'Vue.js',
      handle: 'vuejs',
      content: 'Vue 3.5 is now available! New performance optimizations and better TypeScript support. Upgrade today! 🚀',
      comments: 67,
      retweets: 456,
      likes: 1243
    },
    {
      author: 'Tailwind CSS',
      handle: 'tailwindcss',
      content: 'New in Tailwind CSS: Dynamic color utilities! Now you can use arbitrary values for even more flexibility. Learn more in our docs.',
      comments: 89,
      retweets: 567,
      likes: 1678
    },
    {
      author: 'DaisyUI',
      handle: 'daisyui',
      content: 'DaisyUI 5.0 is here! 🌼 New themes, improved accessibility, and better performance. Perfect for your next Tailwind project.',
      comments: 34,
      retweets: 189,
      likes: 654
    },
    {
      author: 'Web Dev Tips',
      handle: 'webdevtips',
      content: 'Pro tip: Combine Nuxt.js with Tailwind CSS and DaisyUI for rapid prototyping. You can build beautiful UIs in minutes! 💡',
      comments: 23,
      retweets: 145,
      likes: 432
    }
  ]

  for (const tweet of tweets) {
    await prisma.tweet.create({
      data: tweet
    })
  }

  console.log('Seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
