<template>
  <component :is="CurrentLayout||BaseLayout"></component>
</template>
<script setup>
import BaseLayout from "./layouts/default.vue";

let CurrentLayout = null;
</script>
<style scoped lang="scss">

</style>
