<template>
  <main class="second-page page">
    <div class="second-page__tabs page__tabs non-scrollbar">
      <button @click="setPartner(partner)" v-for="partner in root.partners" :key="partner.id"
              class="second-page__tabs__item">
        {{ partner.name }}
      </button>
    </div>
    <transition name="opacity-transition" mode="out-in">
      <div class="second-page__content page__content" v-if="root.show_partner">
        {{ root.current_partner.name }}
      </div>
    </transition>
  </main>
</template>


<script setup>
import {reactive, nextTick, onBeforeMount} from 'vue';

const root = reactive({
  partners: [
    {id: 1, name: 'Заведение 1'},
    {id: 2, name: 'Заведение 2'},
    {id: 3, name: 'Заведение 3'},
    {id: 4, name: 'Заведение 4'},
    {id: 5, name: 'Заведение 5'}],
  current_partner: null,
  show_partner: true,
  change_partner_animation_timer: null

})
onBeforeMount(() => root.current_partner = root.partners[0])
const setPartner = partner => {
  root.show_partner = false;
  root.current_partner = partner;
  nextTick(() => root.show_partner = true);
}
</script>
<style lang="scss">
.opacity-transition {
  &-enter-from {
    opacity: 0;
  }

  &-leave-to {
    opacity: 0;
  }

  &-enter-active, &-leave-active {
    transition: 0.25s;
  }
}

.slide-transition {
  &-enter-from {
    opacity: 0;
    transform: translateX(-50px);
  }

  &-leave-to {
    opacity: 0;
    transform: translateX(50px);
  }

  &-enter-active, &-leave-active {
    transition: 1s;
  }
}

.second-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .second-page__tabs {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;
    margin-bottom: 50px;

    &__item {
      display: block;
    }
  }


}
</style>