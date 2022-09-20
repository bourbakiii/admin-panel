<template>
  <nav class="sidebar" :class="{sidebar_open: props.open}">
    <router-link to='/' class="sidebar__logotype">
      <img src="@/assets/images/logo-icon.png" alt="Logotype icon" class="sidebar__logotype__icon">
      <img src="@/assets/images/logo-text.png" alt="Logotype text" class="sidebar__logotype__text">
    </router-link>

    <button @click="toggle">Click me!</button>

    <div class="sidebar__links">
      <router-link v-for="(route,index) in PARSED_ROUTES" :key="`sidebar-link-${index}`" :to="route.path">
        {{ route.navigation_name }}
      </router-link>
    </div>
  </nav>
</template>
<script setup>
import GSAP from 'GSAP';
import {watch, ref, computed} from 'vue';
import {routes} from '@/router/router.js';

const PARSED_ROUTES = computed(() => routes.map(route => ({navigation_name: route.navigation_name, path: route.path})))

const props = defineProps({open: {required: true, default: false}})

const emit = defineEmits(['close', 'open']);
const toggle = () => {
  if (props.open) emit('close')
  else emit('open')
}

watch(() => props.open, value => {
  if (value) openSidebarAnimations()
  else closeSidebarAnimations()
})

const openSidebarAnimations = () => {
  GSAP.to('.sidebar', {width: 300, ease: 'back'});
  GSAP.to('.sidebar__logotype__text', {width: 100, opacity: 1, marginLeft: 10, ease: 'back'})
}

const closeSidebarAnimations = () => {
  GSAP.to('.sidebar', {width: 100})
  GSAP.to('.sidebar__logotype__text', {width: 0, opacity: 0, marginLeft: 0})
}

</script>


<style lang="scss">
.sidebar {

  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height:100%;
  height: 100%;

  width: auto;
  border-radius: 0 8px 8px 0;
  background-color: lightblue;
  gap: 30px;

  &__logotype {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &__text {
      width: 0;
      opacity: 0;
    }
  }
}
</style>