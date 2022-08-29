<template>
  <main class="page home-page">
    <h1> Home page! </h1>
    <Select :values="data.values" :input='{placeholder:"placeholder"}' class="home-page__select"/>
  </main>
</template>
<script setup>
import Select from "@/components/Input/Select.vue"
import {reactive, ref} from "vue";

const data = reactive({
  current_value: null,
  values: [{
    id: 1,
    value: 100
  },
    {
      id: 2,
      value: 200
    }, {
      id: 3,
      value: 300
    }, {
      id: 4,
      value: 400
    }, {
      id: 5,
      value: 500
    }, {
      id: 6,
      value: 600
    }, {
      id: 7,
      value: 700
    }, {
      id: 8,
      value: 800
    }, {
      id: 9,
      value: 900
    }, {
      id: 10,
      value: 1000
    }, {
      id: 11,
      value: 1100
    }]
});
const loggy = item => {
  console.log("the item is");
  console.log(item);
  data.current_value = item;
}
</script>
<style lang="scss">
.home-page__select {
}
</style>
