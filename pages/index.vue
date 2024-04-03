<template>
  <div class="max-w-limit m-auto">
    <div class="font-xl text-center uppercase">homepage</div>

    <BasicCard
      class="py-24 text-center underline"
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :link="post.link"
    />

  </div>
</template>

<script setup>

const posts = ref([
  { id: 1, title: 'Le Vagabondage de Musashi', link: 'posts/le-vagabondage-de-musashi' },
  { id: 2, title: 'Tokyo Underground', link: 'posts/tokyo-underground' },
])

</script>
