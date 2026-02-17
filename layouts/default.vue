<template>
  <div class="min-h-screen bg-base-200">
    <div class="container mx-auto flex max-w-7xl">
      <!-- Sidebar -->
      <aside class="w-64 min-h-screen bg-base-100 border-r border-base-300 sticky top-0">
        <div class="p-4">
          <h1 class="text-3xl font-bold text-primary mb-6">twater</h1>
          <nav class="space-y-2">
            <NuxtLink to="/" class="btn btn-ghost justify-start w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </NuxtLink>
            <NuxtLink to="/explore" class="btn btn-ghost justify-start w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Explore
            </NuxtLink>
            <NuxtLink to="/notifications" class="btn btn-ghost justify-start w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Notifications
            </NuxtLink>
            <NuxtLink to="/profile" class="btn btn-ghost justify-start w-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </NuxtLink>
          </nav>
          <button class="btn btn-primary w-full mt-4">Tweet</button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 border-r border-base-300">
        <slot />
      </main>

      <!-- Right Sidebar (Trends, Who to Follow) -->
      <aside class="w-80 bg-base-100 p-4 hidden lg:block">
        <div class="card bg-base-200 mb-4">
          <div class="card-body">
            <h3 class="card-title text-sm">What's happening</h3>
            <div class="space-y-3">
              <div class="hover:bg-base-300 p-2 rounded cursor-pointer">
                <p class="text-xs text-base-content/60">Trending in Tech</p>
                <p class="font-bold">#NuxtJS</p>
                <p class="text-xs text-base-content/60">12.5K tweets</p>
              </div>
              <div class="hover:bg-base-300 p-2 rounded cursor-pointer">
                <p class="text-xs text-base-content/60">Trending in Web Dev</p>
                <p class="font-bold">#TailwindCSS</p>
                <p class="text-xs text-base-content/60">8.2K tweets</p>
              </div>
              <div class="hover:bg-base-300 p-2 rounded cursor-pointer">
                <p class="text-xs text-base-content/60">Trending Worldwide</p>
                <p class="font-bold">#Vue3</p>
                <p class="text-xs text-base-content/60">15.7K tweets</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-sm">Who to follow</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="avatar">
                    <div class="w-10 rounded-full">
                      <img :src="useAvatar('youyuxi')" alt="Evan You avatar" />
                    </div>
                  </div>
                  <div>
                    <p class="font-bold text-sm">Evan You</p>
                    <p class="text-xs text-base-content/60">@youyuxi</p>
                  </div>
                </div>
                <button class="btn btn-sm btn-outline">Follow</button>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="avatar">
                    <div class="w-10 rounded-full">
                      <img :src="useAvatar('atinux')" alt="Sebastien Chopin avatar" />
                    </div>
                  </div>
                  <div>
                    <p class="font-bold text-sm">Sebastien Chopin</p>
                    <p class="text-xs text-base-content/60">@atinux</p>
                  </div>
                </div>
                <button class="btn btn-sm btn-outline">Follow</button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
