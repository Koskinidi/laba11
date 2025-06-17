<template>
  <div class="mx-20 my-6">
    <h1 class="text-center 'sans': ['Poppins'] text-[#0AAB8C]  text-[20px] sm:text-[24px] md:text-[30px]">
      Добро пожаловать на сайт муниципальной больницы!
    </h1>
    <div class="text-center p-4  ">
      <p class="text-[#07456A] text-[12px] sm:text-[13px] md:text-[14px] text-center  'sans': ['Merriweather Sans']">
        Мы рады предложить вам качественную медицинскую помощь и заботу.
      </p>
      <p class="text-center text-[#07456A] text-[12px] sm:text-[13px] md:text-[14px] 'sans': ['Merriweather Sans']">
        Наша команда профессионалов всегда готова помочь вам в трудную минуту.
      </p>
      <p class="text-center text-[#07456A] text-[12px] sm:text-[13px] md:text-[14px] font-semibold 
      'sans': ['Merriweather Sans']">
        Узнайте больше о наших услугах
      </p>

      
      <div class="flex flex-col items-center mt-15">
        <button  class=" 'sans': ['Merriweather Sans'] bg-[#1BC04D] text-white rounded-md p-3 hover:bg-[#00EB26] animate-bounce 
           transition duration-300 cursor-pointer text-[15px] sm:text-[17px] md:text-[20px]"  @click="updateMessage">
           Получить совет по здоровью</button>
        <p class=" 'sans': ['Merriweather Sans'] text-center text-[#0AAB8C]  mt-3  p-6" style="font-size: 18px">{{ message }}</p>
      </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Создаем реактивное состояние
const messages = [
  "Совет №1: Регулярно проходите медицинские осмотры!",
  "Совет №2: Пейте достаточно воды каждый день.",
  "Совет №3: Сбалансированное питание - залог здоровья!",
  "Совет №4: Не забывайте про физическую активность.",
  "Совет №5: Уделяйте время отдыху и сну.",
  "Совет №6: Избегайте стрессовых ситуаций и учитесь расслабляться.",
  "Совет №7: Ограничьте потребление сахара и соли.",
  "Совет №8: Регулярно занимайтесь физической активностью не менее 30 минут в день.",
  "Совет №9: Не курите и избегайте пассивного курения.",
  "Совет №10: Следите за своим психическим здоровьем и обращайтесь за помощью при необходимости."
];

const message = ref("Нажмите кнопку, чтобы получить совет по здоровью.");

// Функция для обновления сообщения
function updateMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  message.value = messages[randomIndex];
}
</script>




