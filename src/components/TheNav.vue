<script setup lang="ts">
import { NAV_ITEMS } from '@/shared/constants'
import NavItem from '@/components/NavItem.vue'
</script>

<template>
  <nav>
    <ul class="flex items-center justify-around">
      <NavItem v-for="(title, path) in NAV_ITEMS" :key="path" :path="`/${path}`">
        {{ title }}
      </NavItem>
    </ul>
  </nav>
</template>
