<template>
  <div class="sidebar">
    <router-link v-for='({name,path},index) in routesMap' :key="`sidebar-link-${index}`" class="sidebar__link"
                 :to="path">
      {{ name }}
    </router-link>
  </div>
</template>
<script setup>
import {routes} from "@/router/router"

const routesMap = routes.map(el => ({name: el.name, path: el.path}));
</script>
<style lang="scss">
.sidebar {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>