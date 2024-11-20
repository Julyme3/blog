<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <li>
    <router-link :to="$attrs.to"
      class="p-2 text capitalize"
    >
      <slot></slot>
    </router-link>
  </li>
</template>
