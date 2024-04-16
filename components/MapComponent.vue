<template>
  <div class="flex flex-col items-center py-20">
    <div class="py-2">
      {{ headerMap }}
    </div>
    <div id="my-map">
      <div class="pop-up-container">
        <div class="popup-map" :style="{ 'visibility': activePopup.visibility }">
          <div class="px-4 flex items-center justify-between border-b my-2">
            <h1 class="font-bold uppercase py-1">{{ activePopup.location }}</h1>
            <svg @click="closePopup" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cursor-pointer" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </div>
          <div class="py-2 px-4 text-left" v-for="quote in activePopup.quotes">
            {{ quote }}
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script setup>
import wellknown from 'wellknown';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibG9yaXNtYXQiLCJhIjoiY2x1cHgzc2VtMjdicTJqbjJvM3FycjVlbCJ9.2ba5KVTSvwIYmr0hyK7qJw'; // Set your Mapbox access token here

const props = defineProps([
  "headerMap", "points"
])

const map = ref(null);

const activePopup = ref({
  "location": undefined,
  "quotes": undefined,
  "visibility": "hidden"
});

function closePopup() {
  activePopup.value.visibility = "hidden"
}

onMounted(() => {
  map.value = new mapboxgl.Map({
    container: 'my-map',    
    style: 'mapbox://styles/lorismat/clupx4xy501af01piby2e5lbt',
    center: [136, 37], 
    zoom: 5,
    maxZoom: 12,
    minZoom: 4
    
  });
})

function showPopup() {
}

watch(() => props.points, value => {
  props.points.forEach(point => {
    const coordinates = wellknown(point.coordinates).coordinates;
    // Create a custom HTML marker
    const customMarker = document.createElement('div');

    
    if (point.frequency > 40) {
      customMarker.className = 'custom-marker custom-marker-big';
    } else if (point.frequency > 15) {
      customMarker.className = 'custom-marker custom-marker-medium';
    } else {
      customMarker.className = 'custom-marker custom-marker-small';
    }
    

    const marker = new mapboxgl.Marker(customMarker)
      .setLngLat(coordinates)
      .addTo(map.value);
    marker.getElement().addEventListener('click', () => {
        activePopup.value.location = point.location;
        activePopup.value.quotes = point.quotes.replaceAll("、",",").split("--$$$$$$$--");
        activePopup.value.visibility = "initial";
        showPopup()
      });
  });
});

</script>

<style scoped>

/* cutsom-marker are defined */

#my-map {
  width: 90%;
  height:800px;
  max-width: 1200px;
  position: relative;
}

.popup-map {
  width: 95%;
  max-width: 400px;
  border-radius: 6px;
  max-height: 40%;
  left: 10px;
  top: 10px;
  position:absolute;
  z-index: 10;
  background-color: #ffffff;
  overflow: scroll;
}

@media screen and (max-width: 992px) {
  #my-map {
    width: 95%;
    height:600px;
  }
}

@media screen and (max-width: 600px) {
  #my-map {
    width: 100%;
    height:600px;
  }

  .popup-map {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
}
</style>
