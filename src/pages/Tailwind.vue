<template>
  <div class="page tailwind-page">
    <h1 class="text-2xl font-bold mb-5">Tailwind page</h1>
    <hr>
    <div class="tailwind-page grid-inputs">
      <InputBlock v-model="some_value" :id="'тесла'" title="яман" v-for='item in 1'>{{
          item
        }}
      </InputBlock>
      <Checkbox v-model="checkbox_value"/>
      <div class="text-right">
        <Switcher v-model="switch_value"/>
        От заебов и забот
      </div>
    </div>
  </div>
</template>
<script setup>
import InputBlock from "@/components/InputBlock.vue";
import {ref} from "vue";
import Checkbox from "../components/Checkbox.vue";
import Switcher from "../components/Switcher.vue";

const some_value = ref(null);
const checkbox_value = ref(false);
const switch_value = ref(false);
</script>

<style lang="scss">
.text-left {
  display: flex;
  *{
    order:2;
  }

}
.text-right {
  display: flex;
  *{
    order:-1;
  }

}
</style>