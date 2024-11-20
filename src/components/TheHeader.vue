<script setup lang="ts">
import TheLogo from '@/components/TheLogo.vue'
import TheNav from '@/components/TheNav.vue'
</script>

<template>
  <header
    class="sticky top-0 z-20 flex items-center justify-between border-b bg-amber-100 p-10"
  >
    <TheLogo />
    <TheNav />
  </header>
</template>
