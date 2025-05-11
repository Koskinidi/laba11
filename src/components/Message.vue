<template>
  <div>
    <h1 class="text-center font-bold text-2xl">
      Добро пожаловать на страницу!
    </h1>
    <div class=" text-center p-4">
      <p class="text-center text-amber-3">
        Тут может быть какой-то текст и он будет по середине
      </p>
      <p class="text-center">
        Это тоже текст по середине.
        Тут может быть описание страницы 
      </p>
      <p class="text-center">
        Это новый заголовок
      </p>
      <div class="flex justify-center mt-6">
        <button 
          class="bg-green-500 text-white rounded-md p-4 hover:bg-green-600 transition duration-300 cursor-pointer" 
          @click="updateMessage"
        >
          Получить случайное сообщение
        </button>
      </div>
      <p class="text-center text-blue-600 border mt-8 border-blue-700 p-10" style="font-size: 20px;">
  {{ message }}
</p>


    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Создаем реактивное состояние
const messages = [
  "Сообщение 1: Жизнь прекрасна!",
  "Сообщение 2: Никогда не сдавайся!",
  "Сообщение 3: Улыбка - это ключ к счастью!",
  "Сообщение 4: Каждый день - это новый шанс!",
  "Сообщение 5: Ты способен на большее, чем думаешь!"
];

const message = ref("Нажмите кнопку, чтобы получить сообщение.");

// Функция для обновления сообщения
function updateMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  message.value = messages[randomIndex];
}
</script>

<style scoped>

</style>


