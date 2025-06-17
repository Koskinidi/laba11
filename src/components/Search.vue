<template>
    <form>
    <div class="flex content-center  my-4">
        <div class=" w-40 h-10 sm:w-60 md:w-90 border-2 border-[#0AAB8C] rounded-lg transition-colors duration-200 relative"> 
            <input type="search" class="block  my-2 mx-2 w-full text-[12px] sm:text-[14px] md:text-[16px] text-[#0AAB8C] 
                    rounded-l-lg border-[#0AAB8C] focus:ring-[#0AAB8C] 
                    focus:border-[#0AAB8C] focus:outline-none" 
            placeholder="Поиск" required>
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white
                     bg-[#0AAB8C] rounded-r-sm border-[#0AAB8C] hover:bg-[#0AAB8C] hover:border-[#0AAB8C]
                      ">
                     <svg aria-hidden="true" class="w-5 h-4.5" fill="none" stroke="currentColor" 
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" 
                        stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                        </path></svg>
                        <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>


</template>