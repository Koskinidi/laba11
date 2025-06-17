<script>
import Button2 from '@/components/Button2.vue';
import { useCounterStore } from "@/stores/store.js"; 

export default {
  components: {
    Button2
  },
  setup() {
    const store = useCounterStore();
    return { store };
  }
};
</script>

<template>
<main>
  <div class="p-4 mx-10">
    <h2 class="text-[#0AAB8C] 'sans': ['Poppins'] text-justify text-[26px] sm:text-[28px] md:text-[30px] ">
      Врачи клиники
    </h2>

    <div class="">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5 m-5  ">
        <div 
          class="rounded bg-white space-y-3 flex flex-col items-center " 
          v-for="item in store.data" 
          :key="item.id"
        >
          <img 
            class="w-[140px] h-[200px] sm:w-[160px] sm:h-[220px] md:w-[190px] md:h-[250px] object-cover" 
            :src="item.adress" 
            alt="Image" 
          />

          <div class="text-[#0AAB8C] 'sans': ['Merriweather Sans'] text-center text-[18px] sm:text-[20px]
           md:text-[22px] ">
            {{ item.name }}
          </div>
          <div class="text-[#07456A] 'sans': ['Merriweather Sans'] text-center text-[11px] sm:text-[12px] 
          md:text-[13px] ">
            {{ item.prof }}
          </div>

          <div>
            <Button2/>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>





</template>

