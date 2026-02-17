import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const tweets = await prisma.tweet.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return tweets
  } catch (error) {
    console.error('Error fetching tweets:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch tweets'
    })
  }
})
