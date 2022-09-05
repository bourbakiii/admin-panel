<template>
  <div class="layout default-layout">
    <Sidebar class="default-layout__sidebar"/>
    <div class="default-layout__content layout__content">
      <Navigation/>
      <div class="default-layout__page-wrapper">
        <router-view class="page" v-slot='{ Component, route }'>
          <transition :name="route.meta.transition" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import Navigation from "../components/Navigation.vue";
import Sidebar from "../components/Sidebar.vue";
</script>
<style lang="scss">
.page-transition {

  &-with-partners {
    &-enter-from, &-leave-to {
      opacity: 0;

      .page__tabs {
        background-color: red !important;
        transform: translateY(-50px);
      }

      .page__content {
        background-color: red !important;
        transform: translateY(50px);
      }
    }

    &-enter-active, &-leave-active {
      transition:0.3s;

      .page__tabs, .page__content {
        transition: transform 0.3s !important;
      }
    }

  }


  &-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }

  &-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  &-enter-active, &-leave-active {
    transition: 0.3s;
  }
}

.default-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  &__sidebar {
    position: sticky;
  }

  &__content {
    width: 100%;
  }

  &__page-wrapper {
    width: 100%;
    padding: 40px;
  }


}


</style>
