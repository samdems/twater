import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Tweet ID is required'
      })
    }
    
    const { likes } = body
    
    if (typeof likes !== 'number') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Likes must be a number'
      })
    }
    
    const tweet = await prisma.tweet.update({
      where: { id },
      data: { likes }
    })
    
    return tweet
  } catch (error) {
    console.error('Error updating tweet:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update tweet'
    })
  }
})
