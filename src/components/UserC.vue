<template>
  <div class="border-2 border-green-500 rounded-lg p-4 text-center">
    <h2 class="text-lg font-semibold">{{ name }}</h2>
    <p class="text-gray-700">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps(['name', 'description']);
</script>

<style scoped>
/* Дополнительные стили для UserCard, если нужно */
</style>
