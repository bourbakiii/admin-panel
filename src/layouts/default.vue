<template>
    <Navigation />
    <Sidebar />
  <router-view></router-view>
</template>
<script setup>
import Navigation from "../components/Navigation.vue";
import Sidebar from "../components/Sidebar.vue";
</script>
<style lang="scss">
</style>
