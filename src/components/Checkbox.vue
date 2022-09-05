<template>
  <label class="flex justify-center items-center label cursor-pointer unselectable">
    <input v-model="val" type="checkbox" id="killer-checkbox" class="hidden">
    <transition name="checkbox-transition">
      <font-awesome-icon class="label__icon" icon="fa-solid fa-check" v-if="val"/>
    </transition>
  </label>
</template>
<script setup>
import {ref} from "vue";

const val = ref(false);
</script>
<style lang="scss">
.checkbox-transition {
  @keyframes jump {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    60% {
      opacity: 1;
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }

  &-leave-active {
    animation: jump 0.3s reverse;
    transition: $transition;
  }

  &-enter-active {
    animation: jump 0.3s forwards;
    transition: $transition;
  }
}

.label {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, .3);
  width: 24px;
  height: 24px;

  &__icon {
    margin: 0 auto;
    font-size: 15px;
    color: $main;
  }
}
</style>