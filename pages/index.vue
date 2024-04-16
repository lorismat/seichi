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

<style>
/* marker general for map */

.custom-marker {
  background-color: #000ff096;
  border: 1px solid #fff;
  border-radius: 50%;
}

.custom-marker-big {
  width: 40px;
  height: 40px;
}

.custom-marker-medium {
  width: 25px;
  height: 25px;
}

.custom-marker-small {
  width: 15px;
  height: 15px;
}
</style>
