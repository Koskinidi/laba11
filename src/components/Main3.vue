<script setup>
import Button3 from '@/components/Button3.vue';
</script>


<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="place-content-evenly grid p-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8">
    <div>
        <img class="aspect-square w-full h-auto" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main3_1.jpg" />
    </div>
    <div>
        <img class="aspect-square w-full h-auto" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main3_2.jpg" />
    </div>
    <div>
        <img class="aspect-square w-full h-auto" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main3_3.jpg" />
    </div>
    <div>
        <img class="aspect-square w-full h-auto" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main3_4.jpg" />
    </div>
</div>

    <main>
    <div class="flex flex-col md:flex-row my-10 mx-10">
        <div class="flex-1">
            <div class="flex flex-col justify-items-center">
                <h1 class="text-[#0AAB8C] 'sans': ['Poppins'] w-115 text-justify font-semibold text-[20px]
                 sm:text-[24px] md:text-[30px] mb-4 ">
                    Медицинские услуги
                </h1>

                <div class="spase-x-1 ml-22 mt-10 grid sm:grid-flow-row md:grid-flow-col sm:grid-rows-5 md:grid-rows-3 gap-4 text-[10px] sm:text-[12px] md:text-[16px]">
                    <div class="flex">
                        <div class=" w-14">
                            <img class="w-10 h-8 rounded-sm" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main4_1.jpg" alt="Default avatar">
                        </div>
                        <div class="w-64">
                            Функциональная диагностика
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-14">
                            <img class="w-10 h-8 rounded-sm" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main4_2.jpg" alt="Default avatar">
                        </div>
                        <div class=" w-64">
                            УЗИ
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-14">
                            <img class="w-10 h-8 rounded-sm" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main4_3.jpg" alt="Default avatar">
                        </div>
                        <div class=" w-64">
                            Эхокардиографика
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-14">
                            <img class="w-10 h-8 rounded-sm" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main4_4.jpg" alt="Default avatar">
                        </div>
                        <div class=" w-64">
                            Иньекции
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-14">
                            <img class="w-10 h-8 rounded-sm" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main4_5.jpg" alt="Default avatar">
                        </div>
                        <div class=" w-64">
                            Прочие услуги
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end mr-18 mt-8">
                <Button3 />
            </div>
        </div>
        <div class="flex-none md:flex-initial md:w-auto mt-8 md:mt-0">
            <img class="p-14 max-w-full" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\Main4_6.jpg" alt="image description">
        </div>
    </div>
</main>


</template>

