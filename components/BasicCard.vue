<template>
  <div>
    <div class="font-bold font-xl">
      <NuxtLink :to="link">{{ title }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps([
  "link", "title"
])
</script>