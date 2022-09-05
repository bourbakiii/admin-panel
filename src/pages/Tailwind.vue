<template>
  <div class="page tailwind-page">
    <h1 class="text-2xl font-bold mb-5">Tailwind page</h1>
    <hr>
    <div class="tailwind-page grid-inputs">
      <InputBlock v-model="some_value" :id="'тесла'" title="яман" v-for='item in 1'>{{
          item
        }}
      </InputBlock>
      <input v-model="some_value" type="text">
    </div>
  </div>
</template>
<script setup>
import InputBlock from "../components/InputBlock.vue";
import {ref} from "vue";

const some_value = ref(null);
const loggy = value => {
  console.log("the value is");
  console.log(value);
}
</script>