<template>
  <div>
    <div>
      <div class="pb-2">
        <NuxtLink :to="link" class="font-sans uppercase font-bold border-b border-black hover:border-none">{{ title }}</NuxtLink>
      </div>
      <p class="font-serif">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus posuere nisl sit amet accumsan finibus. 
        Suspendisse ullamcorper, turpis a sollicitudin venenatis, 
        turpis lacus aliquam turpis, a feugiat risus ipsum euismod mi.
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps([
  "link", "title"
])
</script>