<script setup lang="ts">
import { usePostsStore } from '@/stores/posts'
import { storeToRefs } from 'pinia'
import { BaseButton } from '@/shared/ui/BaseButton';

const { posts } = storeToRefs(usePostsStore())
</script>

<template>
  <main>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-bold">Posts</h2>
      <BaseButton type="primary" size="sm">Create Post</BaseButton>
    </div>
    <table class="w-full text-left border-collapse border border-gray-300">
      <thead>
        <tr class="bg-amber-100">
          <th class="p-4">Title</th>
          <th class="p-4">Body</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td class="border p-4">{{ post.title }}</td>
          <td class="border p-4">{{ post.body }}</td>
          <td class="border p-4">3</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
