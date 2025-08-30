<script setup lang="ts">
  import SocialLink from './components/SocialLink.vue'
</script>

<template>
  <header class="my-10 flex flex-col gap-4">
    <div class="relative inline-flex items-center justify-center gap-4 group">
      <div class="absolute start-1/2 duration-1000 opacity-60 transitiona-all bg-gradient-to-r
      from-red-500 to-amber-500 rounded-full blur-lg filter w-40 lg:w-60 aspect-square
        group-hover:opacity-100 group-hover:duration-200 transform -translate-x-1/2 z-10">
      </div>
      <img class="aspect-square w-40 lg:w-60 mx-auto rounded-full select-none overflow-hidden mb-4 relative z-20"
        src="./assets/pfp.webp" alt="Mahmoud Mahmoud (MahmoudTR) - (Marlo)" title="Mahmoud Mahmoud (MahmoudTR) - (Marlo)">
    </div>
      <h1 class="text-center text-2xl md:text-3xl font-bold">
          Mahmoud Mahmoud
      </h1>
      <p class="text-center md:text-xl w-2/3 mx-auto">
        Team Leader, Full Stack Developer, and Software Engineer
      </p>
  </header>

  <main>
    <div class="flex flex-col max-w-4/5 md:max-w-md gap-8 mx-auto">
      <SocialLink v-for="link in links" :link="link.url" :title="link.name">
        <div class="grid grid-cols-4 md:grid-cols-5 items-center text-2xl w-full gap-6">
          <font-awesome-icon class="ms-auto md:col-span-2" :icon="link.icon" />
          <span class="col-span-3 md:col-span-3">{{ link.name }}</span>
        </div>
      </SocialLink>
    </div>
  </main>

  <footer class="mt-20 mb-10">
    <div class="container mx-auto">
      <hr class="opacity-25 mb-8">
      <p class="text-center">
        Copyright © 2025 All Rights Reserved - MahmoudTR
      </p>
    </div>
  </footer>
</template>
<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/mahmoudtr",
          icon: "fa-brands fa-linkedin-in",
        },
        {
          name: "GitHub",
          url: "https://github.com/Mahmoud217TR",
          icon: "fa-brands fa-github",
        },
        {
          name: "Twitter / X",
          url: "https://twitter.com/Mahmoud2TR",
          icon: "fa-brands fa-x-twitter",
        },
        {
          name: "Medium",
          url: "https://medium.com/@mahmoud17tr",
          icon: "fa-brands fa-medium",
        },
        {
          name: "Dev Community",
          url: "https://dev.to/mahmoudtr",
          icon: "fa-brands fa-dev",
        },
        {
          name: "BlueSky",
          url: "https://bsky.app/profile/mahmoud2tr.bsky.social",
          icon: "fa-brands fa-bluesky",
        },
      ]
    }
  },
}
</script>
<style scoped>
</style>
