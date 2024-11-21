<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostsStore } from '@/stores/posts'
import { BaseButton } from '@/shared/ui/BaseButton'
import { ButtonTypesEnum } from '@/shared/ui/BaseButton/types'
import { PencilSquareIcon } from '@heroicons/vue/24/outline'
import { TrashIcon } from '@heroicons/vue/24/outline'
import { PAGE_POST_CREATE, PAGE_POST_EDIT } from '@/shared/constants'

const router = useRouter()

const { deletePost, filteredPostsById } = usePostsStore()
const { posts } = storeToRefs(usePostsStore())

const handleDeleteBtn = async (id: number) => {
  await deletePost(id)
  filteredPostsById(id)
}
</script>

<template>
  <main>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-bold">Posts</h2>
      <BaseButton
        :type="ButtonTypesEnum.Primary"
        @click="router.push({ path: `/${PAGE_POST_CREATE}` })"
        >Create Post</BaseButton
      >
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
          <td class="border p-4">
            <div class="flex gap-2">
              <BaseButton
                :type="ButtonTypesEnum.Neutral"
                @click="router.push({ path: `/${PAGE_POST_EDIT}/${post.id}` })"
              >
                <PencilSquareIcon class="w-[20px]" />
              </BaseButton>
              <BaseButton :type="ButtonTypesEnum.Neutral" @click="handleDeleteBtn(post.id)">
                <TrashIcon class="w-[20px]" />
              </BaseButton>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
