import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
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
  
  try {
    const tweet = await prisma.tweet.update({
      where: { id },
      data: { likes }
    })
    
    return tweet
  } catch (error: any) {
    // Check if it's a Prisma "record not found" error
    if (error?.code === 'P2025') {
      throw createError({
        statusCode: 404,
        statusMessage: 'Tweet not found'
      })
    }
    
    console.error('Error updating tweet:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update tweet'
    })
  }
})
