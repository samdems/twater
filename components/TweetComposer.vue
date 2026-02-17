<template>
  <div class="card bg-base-100 border-b border-base-300">
    <div class="card-body">
      <div class="flex gap-4">
        <div class="avatar placeholder">
          <div class="bg-primary text-primary-content rounded-full w-12">
            <span>YO</span>
          </div>
        </div>
        <div class="flex-1">
          <textarea
            v-model="tweetText"
            placeholder="What's happening?"
            class="textarea textarea-ghost w-full text-lg resize-none focus:outline-none"
            rows="3"
            maxlength="280"
          ></textarea>
          <div class="flex justify-between items-center mt-2">
            <div class="flex gap-2">
              <button class="btn btn-ghost btn-sm btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <button class="btn btn-ghost btn-sm btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <button class="btn btn-ghost btn-sm btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-sm" :class="{ 'text-error': tweetText.length > 280 }">
                {{ tweetText.length }}/280
              </span>
              <button 
                class="btn btn-primary btn-sm"
                :disabled="!tweetText.trim() || tweetText.length > 280"
                @click="postTweet"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tweetText = ref('')
const emit = defineEmits<{
  tweet: [text: string]
}>()

const postTweet = () => {
  if (tweetText.value.trim() && tweetText.value.length <= 280) {
    emit('tweet', tweetText.value)
    tweetText.value = ''
  }
}
</script>
