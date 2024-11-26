<script setup lang="ts">
import { usePostsStore } from '@/stores/posts'
import { storeToRefs } from 'pinia'

const { posts } = storeToRefs(usePostsStore())
</script>

<template>
  <main class="grid grid-cols-2 sm:grid-cols-4 gap-8">
    <article v-for="(post, i) in posts" :key="i" class="p-4 shadow-md">
      <h2 class="text-2xl mb-4">{{ post.title }}</h2>
      <p>
        {{ post.body }}
      </p>
    </article>
  </main>
</template>
