<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { BaseButton } from '@/shared/ui/BaseButton'
import { ButtonTypesEnum } from '@/shared/ui/BaseButton/types'
import type { Post, PostUpdateDto } from '@/shared/services/posts/types'

const props = defineProps<{
  post?: Post | null
}>()

const title = ref('')
const body = ref('')

const emit = defineEmits<{
  submit: [PostUpdateDto]
}>()

const isDirtyForm = computed(() => {
  return title.value !== props.post?.title || body.value !== props.post?.body
})

const isDisabledSubmit = computed(
  () => !isDirtyForm.value || (title.value.trim() === '' && body.value.trim() === ''),
)

const submit = async () => {
  emit('submit', { title: title.value, body: body.value })
}

watchEffect(() => {
  title.value = props.post?.title ?? ''
  body.value = props.post?.body ?? ''
})
</script>

<template>
  <form class="flex flex-col gap-8 border-t bg-white p-4" @submit.prevent="submit">
    <div>
      <label for="title">Title</label>
      <!--       TODO replaced to shared/ui-->
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
    <BaseButton :type="ButtonTypesEnum.Primary" class="w-fit" :disabled="isDisabledSubmit">
      Save Post
    </BaseButton>
  </form>
</template>
