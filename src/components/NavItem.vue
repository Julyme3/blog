<script setup lang="ts">
defineProps<{
  path: string
}>()
</script>

<template>
  <li>
    <router-link :to="path" class="p-2 text capitalize">
      <slot></slot>
    </router-link>
  </li>
</template>
