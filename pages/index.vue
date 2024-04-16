<template>
  <div class="max-w-limit m-auto font-sans">
    <PageTitle title="chroniques" />

    <BasicCard
      class="py-16 text-center max-w-2xl m-auto"
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :link="post.link"
    />

  </div>
</template>

<script setup>

const posts = ref([
  { id: 1, title: 'Le vagabondage de Musashi', link: 'posts/le-vagabondage-de-musashi' },
  { id: 2, title: 'Les deux histoires de Kafka sur le rivage', link: 'posts/kafka-sur-le-rivage' },
  { id: 3, title: 'Le Tokyo underground de Ryū Murakami', link: 'posts/tokyo-underground' },
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
