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

    <div>
      <TweetCard v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
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

const tweets = ref<Tweet[]>([
  {
    id: '1',
    author: 'Nuxt Team',
    handle: 'nuxt_js',
    authorInitials: 'NT',
    avatarColor: 'primary',
    content: 'Just released Nuxt 4! 🎉 Faster, lighter, and better than ever. Check out the new features and improvements in our blog post.',
    time: '2h',
    comments: 45,
    retweets: 234,
    likes: 892
  },
  {
    id: '2',
    author: 'Vue.js',
    handle: 'vuejs',
    authorInitials: 'VJ',
    avatarColor: 'success',
    content: 'Vue 3.5 is now available! New performance optimizations and better TypeScript support. Upgrade today! 🚀',
    time: '4h',
    comments: 67,
    retweets: 456,
    likes: 1243
  },
  {
    id: '3',
    author: 'Tailwind CSS',
    handle: 'tailwindcss',
    authorInitials: 'TW',
    avatarColor: 'info',
    content: 'New in Tailwind CSS: Dynamic color utilities! Now you can use arbitrary values for even more flexibility. Learn more in our docs.',
    time: '6h',
    comments: 89,
    retweets: 567,
    likes: 1678
  },
  {
    id: '4',
    author: 'DaisyUI',
    handle: 'daisyui',
    authorInitials: 'DU',
    avatarColor: 'secondary',
    content: 'DaisyUI 5.0 is here! 🌼 New themes, improved accessibility, and better performance. Perfect for your next Tailwind project.',
    time: '8h',
    comments: 34,
    retweets: 189,
    likes: 654
  },
  {
    id: '5',
    author: 'Web Dev Tips',
    handle: 'webdevtips',
    authorInitials: 'WD',
    avatarColor: 'accent',
    content: 'Pro tip: Combine Nuxt.js with Tailwind CSS and DaisyUI for rapid prototyping. You can build beautiful UIs in minutes! 💡',
    time: '10h',
    comments: 23,
    retweets: 145,
    likes: 432
  }
])

const addTweet = (content: string) => {
  const newTweet: Tweet = {
    id: Date.now().toString(),
    author: 'You',
    handle: 'your_handle',
    authorInitials: 'YO',
    avatarColor: 'primary',
    content,
    time: 'now',
    comments: 0,
    retweets: 0,
    likes: 0
  }
  tweets.value.unshift(newTweet)
}
</script>
