<template>
  <div>
    <div class="border-b border-base-300 bg-base-100/80 backdrop-blur sticky top-0 z-10">
      <div class="p-4">
        <h2 class="text-xl font-bold">Home</h2>
      </div>
      <div class="tabs tabs-boxed bg-transparent">
        <a class="tab tab-active">For you</a>
        <a class="tab">Following</a>
      </div>
    </div>

    <TweetComposer @tweet="addTweet" />

    <div v-if="loading" class="p-8 text-center">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
    
    <div v-else>
      <TweetCard v-for="tweet in displayTweets" :key="tweet.id" :tweet="tweet" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { fetchTweets, createTweet } = useTweets()
const loading = ref(true)
const tweets = ref<any[]>([])

// Load tweets on mount
onMounted(async () => {
  const data = await fetchTweets()
  tweets.value = data
  loading.value = false
})

// Computed property to format tweets for display
const displayTweets = computed(() => {
  return tweets.value.map(tweet => {
    const createdAt = new Date(tweet.createdAt)
    const now = new Date()
    const diffMs = now.getTime() - createdAt.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)
    
    let timeAgo
    if (diffMins < 1) {
      timeAgo = 'now'
    } else if (diffMins < 60) {
      timeAgo = `${diffMins}m`
    } else if (diffHours < 24) {
      timeAgo = `${diffHours}h`
    } else {
      timeAgo = `${diffDays}d`
    }
    
    return {
      ...tweet,
      time: timeAgo,
      // Keep these for backward compatibility with TweetCard
      authorInitials: tweet.author.split(' ').map((n: string) => n[0]).join(''),
      avatarColor: 'primary'
    }
  })
})

const addTweet = async (content: string) => {
  const newTweet = await createTweet(content, 'You', 'your_handle')
  if (newTweet) {
    tweets.value.unshift(newTweet)
  }
}
</script>
