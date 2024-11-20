<script setup lang="ts">
import { useRouter } from 'vue-router'
import PostForm from '@/components/PostForm.vue'
import { usePostsStore } from '@/stores/posts'
import { PAGE_POSTS_LIST } from '@/shared/constants'
import type { PostUpdateDto } from '@/shared/types/posts'

const router = useRouter()

const { getPosts, createPost } = usePostsStore()

const handleCreatePost = async (post: PostUpdateDto) => {
  await createPost(post)

  getPosts()
  router.push({ path: `/${PAGE_POSTS_LIST}` })
}
</script>

<template>
  <main>
    <PostForm @submit="handleCreatePost" />
  </main>
</template>
