<template>
  <div>
    <PostTitle>Le vagabondage de Musashi</PostTitle>

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

const points = ref([]);

onMounted(() => {
  console.log("mounting ------- MUSASHI")
  useLoadCSV(points, "Musashi");
})

</script>