<template>
  <div class="layout default-layout">
    <Sidebar class="default-layout__sidebar" @close="closeSidebar" @open="openSidebar" :open="is_sidebar_open"/>
    <div class="default-layout__content">
      <Navigation class="default-layout__navigation"/>
    </div>
  </div>
</template>
<script setup>
import Sidebar from "../components/Sidebar.vue";
import Navigation from "../components/Navigation.vue";
import {ref} from "vue";

const is_sidebar_open = ref(false);
const closeSidebar = () => is_sidebar_open.value = false;
const openSidebar = () => is_sidebar_open.value = true;
</script>

<style lang="scss">
.default-layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;

  &__sidebar {
    position: sticky;
    left: 0;
    top: 0;
    height: 100%;
    flex-shrink: 0;
    z-index: $sidebar_z_index;
  }
  &__content{
    width:100%;
    height:100%;
    background-color: lightgray;
  }
}
</style>