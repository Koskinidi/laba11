<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="font-bold text-center">Моя страница</h1>
    <div class="wrapper">

      <nav class="px-3 flex items-center gap-2 border-b border-gray-200 py-2">
        <RouterLink class="cursor-pointer font-bold" to="/">Home</RouterLink>
        <RouterLink  class="cursor-pointer font-bold" to="/about">About</RouterLink>
        <RouterLink  class="cursor-pointer font-bold" to="/props">Props</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />
</template>
