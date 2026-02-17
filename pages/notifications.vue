<template>
  <div>
    <div class="border-b border-base-300 bg-base-100/80 backdrop-blur sticky top-0 z-10">
      <div class="p-4">
        <h2 class="text-xl font-bold">Notifications</h2>
      </div>
      <div class="tabs tabs-boxed bg-transparent">
        <a class="tab tab-active">All</a>
        <a class="tab">Mentions</a>
      </div>
    </div>
    <div class="divide-y divide-base-300">
      <div class="p-4 hover:bg-base-200 cursor-pointer">
        <div class="flex gap-3">
          <div class="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <p><span class="font-bold">Nuxt Team</span> liked your tweet</p>
            <p class="text-base-content/60 text-sm">2h ago</p>
          </div>
        </div>
      </div>
      <div class="p-4 hover:bg-base-200 cursor-pointer">
        <div class="flex gap-3">
          <div class="text-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div>
            <p><span class="font-bold">Vue.js</span> retweeted your tweet</p>
            <p class="text-base-content/60 text-sm">5h ago</p>
          </div>
        </div>
      </div>
      <div class="p-4 hover:bg-base-200 cursor-pointer">
        <div class="flex gap-3">
          <div class="text-info">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p><span class="font-bold">Tailwind CSS</span> started following you</p>
            <p class="text-base-content/60 text-sm">1d ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
