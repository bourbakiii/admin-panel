<template>
  <div
      class="sidebar ease-jump-bezier gap-7 box-border flex flex-col justify-start items-start  bg-main text-white max-w-30vw duration-300 ease-[cubic-bezier(.47,1.64,.41,.8)]"
      :class="opened?'w-[240px]':'w-[50px]'">

    <button @click="opened=!opened">Switch</button>
    <div class="sidebar__links">
      <SidebarLink v-for="{name,path,fa_icon} in routesMap" :to="path">
        <template v-slot:icon>
          <font-awesome-icon :icon="'fa-solid ' + fa_icon"/>
        </template>
        <template v-slot:content>{{ name }}</template>
      </SidebarLink>
    </div>
  </div>
</template>
<script setup>
import SidebarLink from "@/components/Sidebar/Link.vue"
import {routes} from "@/router/router"
import {ref} from "vue";

const routesMap = routes.map(el => ({name: el.name, path: el.path, fa_icon: el.icon}));
const opened = ref(false);
</script>
