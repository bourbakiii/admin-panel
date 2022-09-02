<template>
  <div class="page tailwind-page">
    <h1 class="text-2xl font-bold mb-5">Tailwind page</h1>
    <hr>
    <div class="tailwind-page grid-inputs">
      <InputBlock :id="'тесла'" title="яман" v-for='item in 10'>{{
          item
        }}
      </InputBlock>
    </div>
  </div>
</template>
<script setup>
import InputBlock from "../components/InputBlock.vue";
</script>