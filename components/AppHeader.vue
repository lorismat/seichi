<template>
  <div class="py-8 w-full max-w-limit m-auto">
    <div class="flex justify-center">
      <img src="/logo.png" alt="seichi-logo" class="max-w-16">
    </div>
    <nav class="justify-between m-auto my-4 max-w-42">
      <ul class="grid grid-cols-1 sm:grid-cols-3 justify-items-center uppercase font-bold text-sm my-4 sm:my-12 gap-2">
        <li><NuxtLink to="/">Chroniques</NuxtLink></li>
        <li><NuxtLink to="/carte">Carte</NuxtLink></li>
        <li><NuxtLink to="/a-propos">À Propos</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>