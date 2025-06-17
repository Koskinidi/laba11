<template>
  <div class="p-8 m-2 ">
    <h1 class=" text-[#0AAB8C] font-bold mb-4 text-[24px] sm:text-[26px] md:text-[32px]">Наши акции</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="rounded-lg">
        <img src="/images/accii3.jpg" alt="Акция 1" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#07456A]">Скидка на обследование</h2>
          <p class="text-[#07456A]">Получите 20% скидку на все виды обследования до конца месяца.</p>
          <button class="mt-2 bg-[#1BC04D] cursor-pointer text-white py-2 px-4 rounded hover:bg-[#00EB26]">Узнать больше</button>
        </div>
      </div>
      <div class="rounded-lg">
        <img src="/images/accii1.jpg" alt="Акция 2" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#07456A]">Бесплатная консультация</h2>
          <p class="text-[#07456A]">Запишитесь на бесплатную консультацию с врачом в этом месяце.</p>
          <button class="mt-2 bg-[#1BC04D] cursor-pointer text-white py-2 px-4 rounded hover:bg-[#00EB26]">Узнать больше</button>
        </div>
      </div>
      <div class="rounded-lg">
        <img src="/images/accii2.jpg" alt="Акция 3" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#07456A]">Семейный пакет</h2>
          <p class="text-[#07456A]">Специальное предложение для семей: скидка на услуги для детей.</p>
          <button class="mt-2 bg-[#1BC04D] cursor-pointer text-white py-2 px-4 rounded hover:bg-[#00EB26] text-[12px] sm:text-[16px] md:text-[18px]">Узнать больше</button>
        </div>
      </div>
    </div>

    <div class="mt-8 p-4 shadow-md rounded-lg">
      <h2 class="text-[#0AAB8C] text-[24px] sm:text-[26px] md:text-[32px] font-semibold mb-8">Шутки дня</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(joke, index) in jokes " 
        :key="index" class="text-[#6dc5f7] p-4 rounded-lg shadow-md">
          <p class="text-gray-700 text-[16px] sm:text-[18px] md:text-[22px]">{{ joke.setup }}</p>
          <p class="font-bold mt-2 text-[15px] sm:text-[16px] md:text-[20px]">{{ joke.punchline }}</p>
        </div>
      </div>
      <button @click="fetchJokes" class="mt-10 mb-10 button hover:button2 text-white py-2 px-4 rounded 
      cursor-pointer">Получить новые шутки</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const jokes = ref([]); //реактивную переменную jokes, которая изначально является пустым массивом.
// В нее будут сохраняться шутки.

const fetchJokes = async () => { //функция использоваться для получения данных о шутках из API.

  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_ten'); //метод fetch для отправки 
    // запроса на указанный URL.
    if (!response.ok) {
      throw new Error('Ошибка');
    }
    const data = await response.json();
    jokes.value = data.slice(0, 3); // Получаем только первые три шутки
  } catch (error) {
    console.error('Ошибка при получении шуток:', error);
  }
};

fetchJokes(); // Получаем шутки при загрузке компонента метод
</script>




