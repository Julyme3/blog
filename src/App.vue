<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <RouterView class="container flex-grow mx-auto px-1 b-1 border-black mt-8" />
</template>

<style scoped>
</style>
