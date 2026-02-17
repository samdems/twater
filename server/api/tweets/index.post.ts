import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    const { content, author, handle } = body
    
    if (!content || !author || !handle) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }
    
    const tweet = await prisma.tweet.create({
      data: {
        content,
        author,
        handle
      }
    })
    
    return tweet
  } catch (error) {
    console.error('Error creating tweet:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create tweet'
    })
  }
})
