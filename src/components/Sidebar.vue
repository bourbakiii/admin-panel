<template>
  <div class="sidebar flex al flex-col direction justify-start items-start p-3">
    <router-link v-for="{name,path} in routesMap" class="sidebar__link" :to="path">{{ name }}</router-link>
  </div>
</template>
<script setup>
import {routes} from '../router/router.js';
const routesMap = routes.map(el => ({name: el.name, path: el.path}));
</script>