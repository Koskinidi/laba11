<template>
  <div class="min-h bg-gray-100 p-6 md:p-12">
    <h1 class="text-[24px] sm:text-[26px] md:text-[30px] font-bold text-center text1 mb-6">
      Адреса Муниципальной больницы</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(address, index) in addresses" 
      :key="index" class="transition-transform transform hover:scale-105 duration-300">
        <div class="shadow-lg rounded-lg p-4">
          <h2 class="text-[18px] sm:text-[19px] md:text-[22px] font-semibold text1 ">
            {{ address.title }}
          </h2>
          <p class="text-[15px] sm:text-[17px] md:text-[19px]  ">
            {{ address.description }}
          </p>
          <p class="text-[17px] sm:text-[18px] md:text-[20px] font-bold">
            {{ address.location }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-10 text-center ">
      <button @click="scrollToTop" class="bg-[#1BC04D] text-lg  hover:bg transition cursor-pointer 
      py-2 px-4 rounded">
        Вернуться к началу
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const addresses = ref([
  {
    title: 'Главный корпус',
    description: 'Основное отделение больницы, где проводятся все основные операции.',
    location: 'Улица Центральная, 1',
  },
  {
    title: 'Педиатрическое отделение',
    description: 'Отделение для лечения детей и подростков.',
    location: 'Улица Лесная, 5',
  },
  {
    title: 'Хирургическое отделение',
    description: 'Специализированное отделение для хирургических операций.',
    location: 'Улица Медицинская, 10',
  },
  {
    title: 'Стационар',
    description: 'Отделение для длительного наблюдения и лечения пациентов.',
    location: 'Улица Стационарная, 15',
  },
]);


</script>

<style src="C:\Users\Эллина\Desktop\Web-project1\src\assets\css\styl.css"></style>


