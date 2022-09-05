<template>
  <div class="sidebar flex flex-col justify-start items-start p-5 rounded-r-xl bg-main text-white transitioned w-full"
       :class="opened?'max-w-[300px]':'max-w-[80px]'">
    <transition name="burger-transition" mode="out-in">
      <font-awesome-icon @click.prevent="opened=true" v-if="!opened" icon="fa-solid fa-bars"
                         class="clickable-icon text-4xl"/>
      <font-awesome-icon @click.prevent="opened=false" v-else icon="fa-solid fa-arrow-left"
                         class="clickable-icon text-4xl"/>
    </transition>
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

<style lang="scss">
.burger-transition {
  &-enter-from, &-leave-to {
    opacity: 0;
    transform: scale(0)
  }

  &-enter-active, &-leave-active {
    transition: .1s;
  }
}
</style>
