<script setup>
import UserCard from "../components/UserC.vue";

const users = [
  { name: "Alice", description: "Frontend Developer" },
  { name: "Bob", description: "Backend Developer" },
  { name: "Charlie", description: "UI/UX Designer" },
  { name: "David", description: "Data Scientist" },
  { name: "Eva", description: "Project Manager" },
];
</script>

<template>
  <div class="flex flex-col items-center gap-8">
    <h1 class="text-2xl font-bold">Список пользователей</h1>
    <div class="flex flex-wrap justify-center gap-4">
      <UserCard 
        v-for="(user, index) in users" 
        :key="index" 
        :name="user.name" 
        :description="user.description"
      />
    </div>
    <p class="text-gray-300">Это список пользователей с их описаниями.</p>
  </div>
</template>

