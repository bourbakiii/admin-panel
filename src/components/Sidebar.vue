<template>
  <nav @click.self="emit('open')" class="sidebar" :class="{sidebar_open: props.open}">
    <router-link to='/' class="sidebar__logotype">
      <img src="@/assets/images/logo-icon.png" alt="Logotype icon" class="sidebar__logotype__icon">
      <img src="@/assets/images/logo-text.png" alt="Logotype text" class="sidebar__logotype__text">
    </router-link>
    <button @click="toggle">Click me!</button>
    <div class="sidebar__links">
      <router-link class="sidebar__link" v-for="(route,index) in PARSED_ROUTES" :key="`sidebar-link-${index}`"
                   :to="route.path">
        <font-awesome-icon :icon="route.icon_name" class="sidebar__link__icon"/>
        <span class="sidebar__link__name">
        {{ route.navigation_name }}
        </span>
      </router-link>
    </div>
  </nav>
</template>
<script setup>
import GSAP from 'gsap';
import {watch, computed, onMounted} from 'vue';
import {routes} from '@/router/router.js';
import {useRoute} from 'vue-router';
//////////////////////////////////////////

const PARSED_ROUTES = computed(() => routes.map(route => ({
  navigation_name: route.navigation_name,
  path: route.path,
  icon_name: route.icon_name
})))

///////////////////////////////////////////
const props = defineProps({open: {required: true, default: false}})
const emit = defineEmits(['close', 'open']);
const toggle = () => {
  if (props.open) emit('close'); else emit('open')
}
watch(() => props.open, value => {
  if (value) openSidebarAnimations()
  else closeSidebarAnimations()
})

const openSidebarAnimations = () => {
  GSAP.to('.sidebar', {width: 300, ease: 'back'});
  GSAP.to('.sidebar__logotype__text', {width: 100, opacity: 1, marginLeft: 10, ease: 'back'})
  GSAP.fromTo('.sidebar__link__name', {transform: 'translateX(50px)'}, {
    transform: 'translateX(0)',
    width: 'auto',
    opacity: 1,
    display: 'block',
    stagger: {amount: 0.15},
    marginLeft: 10
  })
}

const closeSidebarAnimations = () => {
  GSAP.to('.sidebar', {width: 100})
  GSAP.to('.sidebar__logotype__text', {width: 0, opacity: 0, marginLeft: 0})
  GSAP.to('.sidebar__link__name', {width: 0, opacity: 0, display: 'none', marginLeft: 0})
}

///////////////////////////////////////////
const CURRENT_ROUTE = useRoute();
watch(() => CURRENT_ROUTE.path, () => emit('close'))
</script>


<style lang="scss">
.sidebar {
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100%;
  height: 100%;

  width: auto;
  border-radius: 0 8px 8px 0;
  background-color: lightblue;
  gap: 30px;
  overflow: hidden;

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

  &__links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    grid-gap: 15px;
  }

  &__link {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 17px;
    color: black;
    text-decoration: none;
    transition: .3s;

    &.router-link-active {
      color: white;
    }

    &__icon {
    }

    &__name {
      display: none;
    }
  }
}
</style>