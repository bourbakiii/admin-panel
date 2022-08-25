<template>
  <component :is="CurrentLayout||BaseLayout"></component>
</template>
<script setup>
import BaseLayout from "./layouts/default.vue";
// import CurrentLayout from "./layouts/default.vue";
</script>
<style scoped lang="scss">
</style>
