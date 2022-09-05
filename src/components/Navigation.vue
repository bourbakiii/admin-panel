<template>
  <nav class="navigation">
    <Checkbox/>
  </nav>
</template>
<script setup>
import Checkbox from "@/components/Checkbox.vue"
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