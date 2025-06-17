<script setup>
import Button from '@/components/Button.vue';
</script>

<template>

    <main>
    <div class="flex  flex-col-reverse md:flex-row">
          <div class="w-avto md:w-200 h-avto flex justify-center">
            <div class="p-8    w-80  sm:w-100 md:w-110 flex flex-col justify-center">
               <h1 class=" text-center sm:text-left md:text-left text-[#0AAB8C] 'sans': ['Poppins'] text-[20px] sm:text-[24px] md:text-[30px] mb-4">
                Муниципальная городская <br> больница
                </h1>
               <p class=" text-[#07456A] indent-3 text-[12px] sm:text-[13px] md:text-[14px] mb-4 
                'sans': ['Merriweather Sans'] text-justify ">
                Наша больница предоставляет широкий спектр медицинских услуг и заботится о здоровье жителей 
                нашего города. Здесь вы можете узнать о наших отделениях,
                квалифицированных специалистах, доступных услугах и последних новостях в области
                медицины.
               </p>
              <div class=" flex justify-end">
                <Button/>
              </div>
            </div>
          </div>

        <div class="flex justify-center">
            <img class="h-100 md:h-auto max-w-full" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\vrachi.jpg"
             alt="image description">
        </div>
    </div>


</main>
</template>




