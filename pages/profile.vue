<template>
  <div>
    <div class="border-b border-base-300 bg-base-100/80 backdrop-blur sticky top-0 z-10">
      <div class="relative h-48 bg-gradient-to-r from-primary to-secondary"></div>
      <div class="px-4 pb-4">
        <div class="flex justify-between items-end -mt-16 mb-4">
          <div class="avatar placeholder">
            <div class="bg-primary text-primary-content rounded-full w-32 ring ring-base-100 ring-offset-base-100 ring-offset-2">
              <span class="text-3xl">YO</span>
            </div>
          </div>
          <button class="btn btn-outline">Edit Profile</button>
        </div>
        <div>
          <h2 class="text-2xl font-bold">Your Name</h2>
          <p class="text-base-content/60">@your_handle</p>
          <p class="mt-3">Building amazing things with Nuxt.js, Vue, and Tailwind CSS 🚀</p>
          <div class="flex gap-4 mt-3 text-sm">
            <div class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-base-content/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span class="text-base-content/60">Joined February 2026</span>
            </div>
          </div>
          <div class="flex gap-4 mt-3">
            <div>
              <span class="font-bold">247</span>
              <span class="text-base-content/60"> Following</span>
            </div>
            <div>
              <span class="font-bold">1,234</span>
              <span class="text-base-content/60"> Followers</span>
            </div>
          </div>
        </div>
      </div>
      <div class="tabs tabs-boxed bg-transparent border-t border-base-300">
        <a class="tab tab-active">Tweets</a>
        <a class="tab">Tweets & Replies</a>
        <a class="tab">Media</a>
        <a class="tab">Likes</a>
      </div>
    </div>
    <div class="p-8 text-center text-base-content/60">
      <p>Your tweets will appear here</p>
    </div>
  </div>
</template>
