<script setup lang="ts">
import { PAGE_HOME } from '@/shared/constants'
</script>

<template>
  <router-link :to="`/${PAGE_HOME}`" class="uppercase font-bold text-5xl">
    Blog
  </router-link>
</template>
