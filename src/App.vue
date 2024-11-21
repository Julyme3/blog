<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'

import { usePostsStore } from '@/stores/posts'

const store = usePostsStore()

store.getPosts()
</script>

<template>
  <TheHeader />
  <RouterView class="container flex-grow mx-auto px-1 b-1 border-black my-8" />
</template>

<style scoped></style>
