<template>
  <nav class="navigation">
    <Switcher v-model="the_variable"/>
  </nav>
</template>
<script setup>
import Switcher from "@/components/Switcher.vue"
import {ref} from "vue";

const the_variable = ref(false);
</script>
<style lang="scss">
.navigation {
  width: 100%;
  height: 70px;
  background-color: rgba(125, 125, 125);
}
</style>