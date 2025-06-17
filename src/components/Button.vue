<template>
  <div>
    <button type="button" class="custom-button ">
      Записаться
    </button>
  </div>
</template>

<style lang="scss">
  $color1: #1BC04D;
  $hoverColor: #00EB26; 

  .custom-button {
    background-color: $color1;
    color: white; 
    padding: 8px 16px; 
    border-radius: 9999px;
    cursor: pointer;
     font-size: 16px;

     &:hover {
      background-color: $hoverColor;
    }
  }
</style>

<script setup>
const color1 = '#1BC04D'; 
</script>

