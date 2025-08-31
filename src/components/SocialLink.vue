<template>
  <div class="relative inline-flex items-center justify-center gap-4 group">
    <div class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r
    from-red-500 via-rose-500 to-amber-500 rounded-xl blur-md filter
      group-hover:opacity-100 group-hover:duration-200">
    </div>
    <a class="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900
      px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg
      hover:-translate-y-0.5 hover:shadow-gray-600/30 w-full" role="button" :title="title" :href="link" target="_blank"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: "SocialLink",
  props: {
    link: String,
    title: String,
  }
}
</script>

<style>

</style>
