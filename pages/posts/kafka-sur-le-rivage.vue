<template>
  <div>
    <PostTitle>Les deux histoires de Kafka sur le rivage</PostTitle>

    <PostParagraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vivamus posuere nisl sit amet accumsan finibus. 
      Suspendisse ullamcorper, turpis a sollicitudin venenatis, 
      turpis lacus aliquam turpis, a feugiat risus ipsum euismod mi.
    </PostParagraph>

    <PostParagraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vivamus posuere nisl sit amet accumsan finibus. 
      Suspendisse ullamcorper, turpis a sollicitudin venenatis, 
      turpis lacus aliquam turpis, a feugiat risus ipsum euismod mi.
    </PostParagraph>

    <PostParagraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vivamus posuere nisl sit amet accumsan finibus. 
      Suspendisse ullamcorper, turpis a sollicitudin venenatis, 
      turpis lacus aliquam turpis, a feugiat risus ipsum euismod mi.
    </PostParagraph>
    
    <MapComponent 
      :points="points" 
    />

  </div>
</template>

<script setup>
const points = ref([])

onMounted(() => {
  useLoadCSV(points, "Kafka Sur Le Rivage");
})

</script>