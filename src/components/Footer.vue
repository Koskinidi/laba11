<script setup>
import Search from '@/components/Search.vue';
import Navbar from './Navbar.vue';
</script>


<template>
    <footer class="bg-[#DCECF6] ">
    <div class="mx-auto w-full max-w-screen-xl md:w-full">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-[#07456A] uppercase">О больнице</h2>
                <ul class="text-gray-500  font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">О нас</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Карьера</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Новости</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Блог</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-[#07456A] uppercase ">Помощь</h2>
                <ul class="text-gray-500  font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Часто задаваемые вопросы</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Контакты</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Обратная связь</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-[#07456A] uppercase ">Правовая информация</h2>
                <ul class="text-gray-500 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Политика конфиденциальности</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Условия использования</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-[#07456A] uppercase ">Скачайте наше приложение</h2>
                <ul class="text-gray-500  font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">iOS</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Android</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="px-4 py-6 bg-[#C4E5F9] md:flex md:items-center md:justify-between">
    <span class="text-sm text-gray-700  sm:text-center">© 2023 Муниципальная больница «Жизнь». Все права защищены.</span>
    <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
        <a href="#" class="text-gray-400 hover:text-gray-900 ">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
            </svg>
            <span class="sr-only">Facebook страница</span>
        </a>

        <a href="#" class="text-gray-400 hover:text-gray-900 ">
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16A11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
            </svg>
            <span class="sr-only">Twitter страница</span>
        </a>

        
        <a href="#" class="text-gray-400 hover:text-gray-900 ">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="#989898" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(4,4)"><path d="M32,6c-14.359,0 -26,11.641 -26,26c0,14.359 11.641,26 26,26c14.359,0 26,-11.641 26,-26c0,-14.359 -11.641,-26 -26,-26zM42.323,43c-1.219,-3.804 -4.257,-6.747 -8.275,-7.147v7.147h-0.62c-10.932,0 -17.168,-7.508 -17.428,-20h5.477c0.18,9.169 4.217,13.053 7.415,13.854v-13.854h5.157v7.908c3.158,-0.34 6.476,-3.944 7.595,-7.908h5.157c-0.859,4.885 -4.457,8.488 -7.016,9.97c2.558,1.201 6.656,4.344 8.215,10.03z"></path></g></g>
</svg>
            <span class="sr-only">VK страница</span>
        </a>

        <a href="#" class="text-gray-400 hover:text-gray-900 ">
            
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="#908b8b" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M26.07031,3.99609c-0.33594,0.01563 -0.65234,0.11328 -0.93359,0.22266h-0.00391c-0.28516,0.11328 -1.64062,0.68359 -3.69922,1.54688c-2.05859,0.86719 -4.73047,1.99219 -7.38281,3.10938c-5.29687,2.23047 -10.50391,4.42578 -10.50391,4.42578l0.0625,-0.02344c0,0 -0.35937,0.11719 -0.73437,0.375c-0.19141,0.125 -0.40234,0.29688 -0.58594,0.56641c-0.18359,0.26953 -0.33203,0.68359 -0.27734,1.10938c0.08984,0.72266 0.55859,1.15625 0.89453,1.39453c0.33984,0.24219 0.66406,0.35547 0.66406,0.35547h0.00781l4.88281,1.64453c0.21875,0.70313 1.48828,4.875 1.79297,5.83594c0.17969,0.57422 0.35547,0.93359 0.57422,1.20703c0.10547,0.14063 0.23047,0.25781 0.37891,0.35156c0.05859,0.03516 0.12109,0.0625 0.18359,0.08594c0.01953,0.01172 0.03906,0.01563 0.0625,0.01953l-0.05078,-0.01172c0.01563,0.00391 0.02734,0.01563 0.03906,0.01953c0.03906,0.01172
0.06641,0.01563 0.11719,0.02344c0.77344,0.23438 1.39453,-0.24609 1.39453,-0.24609l0.03516,-0.02734l2.88281,-2.625l4.83203,3.70703l0.10938,0.04688c1.00781,0.44141 2.02734,0.19531 2.56641,-0.23828c0.54297,-0.4375 0.75391,-0.99609 0.75391,-0.99609l0.03516,-0.08984l3.73438,-19.12891c0.10547,-0.47266 0.13281,-0.91406 0.01563,-1.34375c-0.11719,-0.42969 -0.41797,-0.83203 -0.78125,-1.04687c-0.36719,-0.21875 -0.73047,-0.28516 -1.06641,-0.26953zM25.96875,6.04688c-0.00391,0.0625 0.00781,0.05469 -0.01953,0.17578v0.01172l-3.69922,18.92969c-0.01562,0.02734 -0.04297,0.08594 -0.11719,0.14453c-0.07812,0.0625 -0.14062,0.10156 -0.46484,-0.02734l-5.91016,-4.53125l-3.57031,3.25391l0.75,-4.78906c0,0 9.25781,-8.62891 9.65625,-9c0.39844,-0.37109 0.26563,-0.44922 0.26563,-0.44922c0.02734,-0.45312 -0.60156,-0.13281 -0.60156,-0.13281l-12.17578,7.54297l-0.00391,-0.01953l-5.83594,-1.96484v-0.00391c-0.00391,0 -0.01172,-0.00391 -0.01562,-0.00391c0.00391,0 0.03125,-0.01172 0.03125,-0.01172l0.03125,-0.01562l0.03125,-0.01172c0,0 5.21094,-2.19531 10.50781,-4.42578c2.65234,-1.11719 5.32422,-2.24219 7.37891,-3.10937c2.05469,-0.86328 3.57422,-1.49609 3.66016,-1.53125c0.08203,-0.03125 0.04297,-0.03125 0.10156,-0.03125z"></path></g></g>
</svg>
            <span class="sr-only">Telegram канал</span>
        </a>
    </div>
    </div>
</div>
</footer>
</template>

