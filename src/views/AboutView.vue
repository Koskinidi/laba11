<script setup>
import { ref } from "vue";

const spanContent = ref("JS");
const description = ref("Это страница.");
const isDarkMode = ref(false);

const toggleLanguage = () => {
  spanContent.value = spanContent.value === "JS" ? "Java" : "JS";
};

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>

<template>
  <div :class="isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'" 
  class="flex flex-col items-center gap-4 border-b border-gray-200 py-8 transition-colors duration-300">
    <h1 class="text-2xl font-semibold">На этой странице можно изменить цвет темы</h1>
    <h2 class="underline text-lg">Тут подчеркивается текст</h2>
    <h3 class="text-xl">
      Тут может меняться при нажатии язык программирования
      <span 
        class="cursor-pointer font-bold text-blue-500 hover:underline" 
        v-on:click="toggleLanguage"
      >
        {{ spanContent }}
      </span>
    </h3>
    <p class="mt-6 text-center">
      {{ description }} 
      Тут можно поменять тему
    </p>
    <button 
      class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer transition-colors duration-200"
      @click="toggleTheme"
    >
      Переключить тему
    </button>
  </div>
</template>


<style scoped>
.transition-colors {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>


