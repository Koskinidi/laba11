<script setup>
import Button from '@/components/Button.vue';
</script>

<template>
<main class="flex justify-center">
  <div class="flex flex-col md:flex-row items-center">
    <div class="w-full md:w-120 flex justify-center ">
      <div class=" w-80 sm:w-100 md:w-160 flex flex-col justify-center m-22">
        <h1 class="text-center sm:text-left text-[#0AAB8C] 'sans': ['Poppins'] text-[26px] sm:text-[24px] md:text-[28px] mb-4">
          Муниципальная <br> больница «Жизнь»
        </h1>
        <p class="text-[#07456A] indent-3 text-[14px] sm:text-[15px] md:text-[16px] mb-4 'sans': ['Merriweather Sans'] text-justify">
          Для каждого человека важно заботиться о здоровье себя и близких. Вот уже 15 лет мы помогаем томичам быть здоровыми и счастливыми. Благодаря высокому качеству 
          медицинской помощи и опытным специалистам нам оказывают доверие более 15 тысяч пациентов в месяц.
        </p>
      </div>
    </div>

    <div class="w-full md:w-110 flex justify-center">
      <div class="grid m-20 grid-cols-2 place-items-center gap-4">
        <div>
          <img class="aspect-square w-full h-auto" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\main2_1.jpg" />
        </div>
        <div>
          <img class="aspect-square w-full h-auto" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main2_2.jpg" />
        </div>
        <div>
          <img class="aspect-square w-full h-auto" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main2_3.jpg"/>
        </div>
      </div>
    </div>
  </div>
</main>
</template>