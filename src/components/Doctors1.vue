<template>
  <main class="bg-gray-100 min-h-screen p-6">
    <section class="mb-12">
        <h1 class="text-[24px] sm:text-[26px] md:text-[32px] font-bold text-center text-[#0AAB8C] mb-4">Наши Врачи</h1>
        <p class="text-[16px] sm:text-[20px] md:text-[22px] text-center text-gray-700 mb-8">
            Познакомьтесь с нашими высококвалифицированными врачами, которые готовы помочь вам.
        </p>

        <div class="flex justify-center text-[16px] sm:text-[20px] md:text-[22px] mb-6 text-[#0AAB8C] rounded-r-sm">
            <select v-model="selectedSpecialty" @change="filterDoctors" class="border-2 border-[#0AAB8C] 
            rounded-sm p-2 hover:border-2 hover:border-[#0AAB8C] transition duration-200">
                <option value="">Все специальности</option>
                <option v-for="specialty in specialties" :key="specialty" :value="specialty">
                    {{ specialty }}
                </option>
            </select>
        </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center">
        <div v-for="doctor in filteredDoctors" :key="doctor.id" class="bg-white max-w-sm rounded-lg transform transition-transform duration-300 hover:scale-105 flex flex-col">
            <img :src="doctor.image" alt="Doctor Image" class="h-auto object-cover">
            <div class="p-4 flex-grow"> 
                <h2 class="text-2xl font-semibold text-[#0AAB8C] 'sans': ['Poppins']">
                    {{ doctor.name }}</h2>
                <p class="text-[#07456A] 'sans': ['Merriweather Sans']">
                    {{ doctor.specialty }}
                </p>
                <p class="mt-2 text-gray-500">
                    {{ doctor.description }}
                </p>

                <button @click="viewDetails(doctor.id)" class="mt-4 bg-[#1BC04D] 'sans': ['Merriweather Sans'] 
                hover:bg-[#00EB26] text-white py-2 px-4 rounded hover:bg-[#0AAB8C]/80 transition 
                cursor-pointer">Подробнее</button>
            </div>
        </div>
    </section>

    <section v-if="selectedDoctor" class="fixed inset-0 bg-[#DCECF6] bg-opacity-50 flex items-center
      justify-center z-50">
        <div class="bg-white border-2 border-[#0AAB8C] rounded-lg p-4 w-11/12 md:w-1/3 relative">
            <h2 class="text-xl font-semibold text-[#0AAB8C] 'sans': ['Poppins']">{{ selectedDoctor.name }}</h2>
            <p class="text-[#07456A] 'sans': ['Merriweather Sans']">{{ selectedDoctor.specialty }}</p>
            <p class="mt-2 text-gray-500">{{ selectedDoctor.description }}</p>
            <button @click="closeDetails" class="absolute top-2 right-2 text-gray-500 hover:text-red-500 
            transition cursor-pointer">✖</button>
            <button @click="closeDetails" class="mt-4 bg-[#D6D400] text-white py-2 px-4 rounded hover:bg-[#E4E33A]
             transition cursor-pointer">Закрыть</button>
        </div>
    </section>
</main>
</template>

<script setup>
import { ref, computed } from 'vue';

const doctors = ref([
  {
    id: 1,
    name: 'Иванов Иван Иванович',
    specialty: 'Терапевт',
    description: 'Опытный терапевт с более чем 10-летним стажем работы.',
    image: '/images/doctor3.jpg',
  },
  {
    id: 2,
    name: 'Петрова Мария Федоровна',
    specialty: 'Хирург',
    description: 'Специализируется на лапароскопической хирургии.',
    image: '/images/doctor1.jpg',
  },
  {
    id: 3,
    name: 'Сидоров Сергей Владимирович',
    specialty: 'Кардиолог',
    description: 'Проводит диагностику и лечение сердечно-сосудистых заболеваний.',
    image: '/images/doctor4.jpg',
  },
  {
    id: 4,
    name: 'Смирнова Анна Николаевна',
    specialty: 'Педиатр',
    description: 'Специализируется на лечении детей и подростков.',
    image: '/images/doctor2.jpg',
  },
  {
    id: 5,
    name: 'Кузнецов Дмитрий Михайлович',
    specialty: 'Офтальмолог',
    description: 'Проводит диагностику и лечение заболеваний глаз.',
    image: '/images/doctor5.jpg',
  },
]);

const specialties = ref(['Терапевт', 'Хирург', 'Кардиолог', 'Педиатр', 'Офтальмолог']);
const selectedSpecialty = ref('');
const selectedDoctor = ref(null);

const filteredDoctors = computed(() => 
{
  return selectedSpecialty.value ? doctors.value.filter(doctor => doctor.specialty === selectedSpecialty.value) : 
  doctors.value;
});

const viewDetails = (id) => 
{
  selectedDoctor.value = doctors.value.find(doctor => doctor.id === id);
};

const closeDetails = () => 
{
  selectedDoctor.value = null;
};

const filterDoctors = () => 
{
};
</script>

