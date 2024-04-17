<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>

const points = useState('points', () => [])

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