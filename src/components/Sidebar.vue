<template>
  <div class="sidebar p-5 rounded-r-xl bg-main text-white transitioned" :class="opened?'min-w-[300px]':'min-w-[50px]'">
    <input type="checkbox" v-model="opened">
    <router-link v-for='({name,path},index) in routesMap' :key="`sidebar-link-${index}`" class="sidebar__link"
                 :to="path">
      {{ name }}
    </router-link>
  </div>
</template>
<script setup>
import {routes} from "@/router/router"
import {ref} from "vue";

const routesMap = routes.map(el => ({name: el.name, path: el.path}));
const opened = ref(false);
</script>


