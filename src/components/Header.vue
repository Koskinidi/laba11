<script setup>
import Search from '@/components/Search.vue';
import Navbar from './Navbar.vue';
</script>

<template>

    <div class="bg-[#DCECF6] ">
        <div class="flex flex-col items-center align-items">
            <div class="flex space-x-4 sm:space-x-6 md:space-x-8 p-2 w-full justify-center  align-items">

                <Navbar/>

                <p class="text-[#07456A]  text-center content-center text-[12px] sm:text-[14px] md:text-[16px]  font-poppins">
                    Томск
                </p>

                <Search/>

                <div class="flex-row justify-center content-center w-20 sm:w-35  md:w-40 ">
                    <p
                        class="text-[#0AAB8C] text-center  text-[7px] sm:text-[14px] md:text-[16px] 'sans': ['Poppins'] ">
                        8(923) 433-34-56
                    </p>

                    <p class="text-[#07456A] text-center text-[6px] sm:text-[7px] md:text-[10px] 'sans': ['Poppins']  ">
                        Звонок бесплатный
                    </p>
                </div>

                <img class="w-10 h-10 rounded-full my-2" src="C:\Users\Эллина\Desktop\Web-project1\src\assets\ava1.JPG"
                    alt="Rounded avatar">
            </div>

            <div class="flex ">
                <div class="m-2 ">
                    <nav class="flex  gap-x-4 sm:gap-x-8 md:gap-x-12">
                        <RouterLink class="text-[12px] sm:text-[14px] md:text-[16px] 'sans': ['Poppins']  text-[#07456A] font-semibold "
                            to="/doctors">Врачи</RouterLink>
                        <RouterLink class=" text-[12px] sm:text-[14px] md:text-[16px] 'sans': ['Poppins'] text-[#07456A] font-semibold  "
                            to="/address">Адреса</RouterLink>
                        <RouterLink class="text-[12px] sm:text-[14px] md:text-[16px] 'sans': ['Poppins'] text-[#07456A] font-semibold " to="">
                            Пациенту</RouterLink>
                        <RouterLink class="text-[12px] sm:text-[14px] md:text-[16px] 'sans': ['Poppins'] text-[#07456A] font-semibold " to="/accii">
                            Акции</RouterLink>
                        <RouterLink class="text-[12px] sm:text-[14px] md:text-[16px] 'sans': ['Poppins'] text-[#07456A] font-semibold "
                            to="/appointment">Мои записи</RouterLink>
                        <RouterLink class="text-[12px] sm:text-[14px] md:text-[16px] 'sans': ['Poppins'] text-[#07456A] font-semibold " to="">Еще
                        </RouterLink>
                    </nav>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
.textsm {
    font-size: x-small;
}


.textsm2
    {
        font-size: 6px;
    }


@media only screen and (width: 390px) and (height: 844px) {
    .textsm {
        font-size: 8px;
    }


    .textsm2
    {
        font-size: 6px;
    }
}
</style>
