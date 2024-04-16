<template>
  <div>
    <div>
      <div class="font-bold font-xl text-center font-serif">MUSASHI ARTICLE</div>
    </div>
    <div class="text-center p-0 sm:p-6">
      <h1 class="uppercase">{{ title }}</h1>
      <div>
        <MapComponent 
          headerMap="MUSASHI" 
          :points="points" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import * as aq from 'arquero';

const title = "Carte de Musashi"
const points = ref([])

// create a function here that fetches the book name
// can be called in the other articles

async function loadCSV() {
  try {
    let dt = await aq.loadCSV('/db.csv');
    dt = dt.filter(d => d["Book"] === "Musashi")

    const locations = dt.array('Location');
    const coordinates = dt.array('WKT');
    const text = dt.array('text');
    const frequency = dt.array('frequency');

    let arrPoints = [];
    for (let i = 0; i < locations.length; i++) {
      arrPoints.push({
        "location": locations[i],
        "coordinates": coordinates[i],
        "quotes": text[i],
        "frequency": frequency[i]
      })
    }
    points.value = arrPoints;
    console.log(points.value)
  } catch (error) {
  }
}

onMounted(() => {
  loadCSV();
})

</script>