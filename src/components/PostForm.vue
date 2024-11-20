<script setup lang="ts">
import { ref } from 'vue'
import { BaseButton } from '@/shared/ui/BaseButton'
import { ButtonTypesEnum } from '@/shared/ui/BaseButton/types'
import { type Post, type PostUpdateDto } from '@/shared/types/posts'

const props = defineProps<{
  post?: Post
}>()

const title = ref(props.post?.title ?? '')
const body = ref(props.post?.body ?? '')

const emit = defineEmits<{
  submit: [PostUpdateDto]
}>()

const submit = async () => {
  emit('submit', { title: title.value, body: body.value })
}
</script>

<template>
  <form class="flex flex-col gap-8 border-t bg-white p-4" @submit.prevent="submit">
    <div>
      <label for="title">Title</label>
      <input
        v-model="title"
        id="title"
        type="text"
        class="w-full rounded border p-4 text-xl h-[38px]"
      />
    </div>
    <div>
      <label for="body">Body</label>
      <textarea
        v-model="body"
        id="body"
        type="text"
        class="w-full rounded border p-4 text-xl"
        rows="5"
      />
    </div>
    <BaseButton
      :type="ButtonTypesEnum.Primary"
      class="w-fit"
      :disabled="title.trim() === '' && body.trim() === ''"
    >
      Save Post
    </BaseButton>
  </form>
</template>
