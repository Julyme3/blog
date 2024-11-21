<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import PostForm from '@/components/PostForm.vue'
import { usePostsStore } from '@/stores/posts'
import { PAGE_POSTS_LIST } from '@/shared/constants'
import type { PostUpdateDto, Post } from '@/shared/types/posts'

const router = useRouter()
const route = useRoute()

const currentPost = ref<Post | null>(null)
const postId = computed(() => route.params.id as string)

const { getPost, updatePost } = usePostsStore()

const handleUpdatePost = async (post: PostUpdateDto) => {
  await updatePost(post, postId.value)

  router.push({ path: `/${PAGE_POSTS_LIST}` })
}

watchEffect(async () => {
  currentPost.value = (await getPost(postId.value)) ?? null
})
</script>

<template>
  <main>
    <PostForm :post="currentPost" @submit="handleUpdatePost" />
  </main>
</template>
