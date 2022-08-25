<template>
  <component :is="CurrentLayout??()=>import('./layouts/default.vue')"></component>
</template>
<script setup>
// import CurrentLayout from "./layouts/default.vue";
const CurrentLayout = null;
</script>
<style scoped lang="scss">
</style>
