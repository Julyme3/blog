<script lang="ts">
// static code must be called once so we moved it to tag <script> because code in <script setup> will call for every instance
import {
  ButtonTypesEnum
} from '@/shared/ui/BaseButton/types'

const typeClasses = {
  [ButtonTypesEnum.Primary]: 'bg-amber-500 enabled:hover:bg-amber-600 text-white',
  [ButtonTypesEnum.Neutral]: 'bg-gray-100 enabled:hover:bg-gray-200',
}
</script>

<script setup lang="ts">
import { type BUTTON_TYPE } from '@/shared/ui/BaseButton/types'

defineProps<{
  type: BUTTON_TYPE
}>();
</script>

<template>
  <button
    :class="`${typeClasses[type]} rounded p-3 disabled:cursor-not-allowed disabled:opacity-50`"
  >
    <slot></slot>
  </button>
</template>
