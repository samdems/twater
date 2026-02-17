<template>
  <div class="card bg-base-100 border-b border-base-300 hover:bg-base-200/50 transition-colors">
    <div class="card-body p-4">
      <div class="flex gap-3">
        <div class="avatar">
          <div class="w-12 rounded-full">
            <img :src="useAvatar(tweet.handle)" :alt="`${tweet.author} avatar`" />
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="font-bold hover:underline cursor-pointer">{{ tweet.author }}</span>
            <span class="text-base-content/60 text-sm">@{{ tweet.handle }}</span>
            <span class="text-base-content/60 text-sm">· {{ tweet.time }}</span>
          </div>
          <p class="mb-3">{{ tweet.content }}</p>
          <div class="flex justify-between max-w-md">
            <button class="btn btn-ghost btn-sm btn-circle group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span class="ml-1 text-sm">{{ tweet.comments }}</span>
            </button>
            <button class="btn btn-ghost btn-sm btn-circle group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span class="ml-1 text-sm">{{ tweet.retweets }}</span>
            </button>
            <button class="btn btn-ghost btn-sm btn-circle group" @click="toggleLike">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="{ 'fill-error text-error': isLiked, 'group-hover:text-error': !isLiked }" :fill="isLiked ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span class="ml-1 text-sm" :class="{ 'text-error': isLiked }">{{ likes }}</span>
            </button>
            <button class="btn btn-ghost btn-sm btn-circle group">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tweet {
  id: string
  author: string
  handle: string
  authorInitials: string
  avatarColor: string
  content: string
  time: string
  comments: number
  retweets: number
  likes: number
}

const props = defineProps<{
  tweet: Tweet
}>()

const isLiked = ref(false)
const likes = ref(props.tweet.likes)

const toggleLike = () => {
  isLiked.value = !isLiked.value
  likes.value = isLiked.value ? likes.value + 1 : likes.value - 1
}
</script>
