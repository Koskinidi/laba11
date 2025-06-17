<template>
  <div class="container mx-auto my-10">
    <h1 class=" font-semibold text-[24px] sm:text-[26px] md:text-[30px] mx-10 my-10 text-[#07456A]">
      Записаться на прием</h1>
    
    <div class="max-w-70  sm:max-w-md md:max-w-lg  mx-auto rounded-lg shadow-lg  mb-10">
      <form @submit.prevent="submitForm">
        <div class="bg-gray-200 p-4"> 
          <label for="fullName" class="text-[14px] sm:text-[18px] md:text-[20px] block mb-2 font-medium text-[#07456A]">ФИО</label>
          <input type="text" v-model="fullName" id="fullName" placeholder="Иванов Иван Иванович" 
          class="shadow-sm 
          bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-[#1BC04D]" required />
        </div>

        <div class="bg-gray-200 p-4">
          <label for="birthDate" class="text-[14px] sm:text-[18px] md:text-[20px] block mb-2 font-medium 
          text-[#07456A]">Дата рождения</label>
          <input type="date" v-model="birthDate" id="birthDate" class="shadow-sm bg-gray-50 text-gray-900 
          text-sm rounded-lg block w-full p-2.5" required />
        </div>

        <div class="bg-gray-200 p-4">
          <label for="phone" class="text-[14px] sm:text-[18px] md:text-[20px] block mb-2  font-medium 
          text-[#07456A]">Телефон</label>
          <input type="tel" v-model="phone" id="phone" placeholder="+7 (999) 999-99-99" class="shadow-sm 
          bg-gray-50 hover:border-[#1BC04D] text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
        </div>

        <div class="flex justify-center items-center   py-1">
          <div class="flex mx-2 space-x-2">
            <input id="gender-male" type="radio" v-model="gender" value="male" class="w-4 h-4 
            border-gray-300 focus:ring-2 focus:ring-blue-300" />
            <label for="gender-male" class="text-[12px] sm:text-[14px] md:text-[16px] text-[#07456A] mr-7">
              Мужчина</label>
          </div>

          <div class="flex mx-2 space-x-2">
            <input id="gender-female" type="radio" v-model="gender" value="female" class="w-4 h-4 
            border-gray-300 focus:ring-2 focus:ring-blue-300" />
            <label for="gender-female" class="text-[12px] sm:text-[14px] md:text-[16px]  text-[#07456A]">
              Женщина</label>
          </div>
        </div>


        <div class="flex items-start mb-5 m-4">
          <div class="flex justify-center items-center ">
            <input id="agreement" type="checkbox" v-model="agreement" class="w-4 h-4 border border-gray-300
             rounded-sm bg-gray-50 focus:ring-blue-300" required />
          </div>
          <label for="agreement" class="ml-2 text-[8px] sm:text-[10px] md:text-[12px] font-medium text-gray-700">
            Я согласен с условиями хранения и обработки моих данных и с политикой конфиденциальности ГК МО 
            "Жизнь"</label>
        </div>

         <div class="flex justify-end items-center mx-5 p-2" >
        <button type="submit" class="text-white bg-[#1BC04D] py-2 px-10 hover:bg-[#00EB26] font-medium 
        rounded-lg text-center cursor-pointer text-[12px] sm:text-[16px] md:text-[18px] ">Записаться</button>
        
      </div>


      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const fullName = ref('');
const birthDate = ref('');
const phone = ref('');
const gender = ref(''); 
const agreement = ref(false);

const submitForm = () => {
  if (!agreement.value) {
    alert('Пожалуйста, согласитесь с условиями.');
    return;
  }

  // Создание объекта с данными формы
  const formData = {
    fullName: fullName.value,
    birthDate: birthDate.value,
    phone: phone.value,
    gender: gender.value,
    agreement: agreement.value,
  };

  console.log('Данные формы:', formData); // Можно отправить данные на сервер

  // Сброс значений формы
  fullName.value = '';
  birthDate.value = '';
  phone.value = '';
  gender.value = ''; 
  agreement.value = false;
};
</script>









