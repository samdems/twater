export interface Tweet {
  id: string
  author: string
  handle: string
  content: string
  createdAt: Date | string
  comments: number
  retweets: number
  likes: number
}

export const useTweets = () => {
  const fetchTweets = async (): Promise<Tweet[]> => {
    try {
      const data = await $fetch<Tweet[]>('/api/tweets')
      return data
    } catch (error) {
      console.error('Failed to fetch tweets:', error)
      return []
    }
  }

  const createTweet = async (content: string, author: string, handle: string): Promise<Tweet | null> => {
    try {
      const data = await $fetch<Tweet>('/api/tweets', {
        method: 'POST',
        body: { content, author, handle }
      })
      return data
    } catch (error) {
      console.error('Failed to create tweet:', error)
      return null
    }
  }

  const updateTweetLikes = async (id: string, likes: number): Promise<Tweet | null> => {
    try {
      const data = await $fetch<Tweet>(`/api/tweets/${id}`, {
        method: 'PATCH',
        body: { likes }
      })
      return data
    } catch (error) {
      console.error('Failed to update tweet likes:', error)
      return null
    }
  }

  return {
    fetchTweets,
    createTweet,
    updateTweetLikes
  }
}
