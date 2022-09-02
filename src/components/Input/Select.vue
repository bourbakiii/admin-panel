<template>
  <div ref="$root" class="select" @keydown.enter.prevent="selectValue" @keydown.down.prevent="down"
       @keydown.up.prevent="up"
       @focusin="show"
       @focusout="hide">
    {{ active_index }}
    {{ current_value }}
    <InputBase readonly class="select__input" v-bind="input" :value="current_value.value"/>
    <transition name="opacity-transition">
      <div v-if="show_dropdown" class="select__dropdown dropdown">
        <button :class="{select__dropdown__item_active: active_index===index}" class="select__dropdown__item"
                v-for="(item, index) in values" @click.prevent="selectValue({index})">
          {{ item.value }}
        </button>
      </div>
    </transition>
  </div>
</template>
<script setup>
import InputBase from "@/components/Input/Base.vue";
import {reactive, ref, watch} from "vue";

const $props = defineProps({
  input: {
    required: false,
    type: Object,
  },
  values: {
    required: true,
    type: Array
  }
});

const show_dropdown = ref(false);
const active_index = ref(-1);
const $root = ref(null);

let current_value = reactive({});

const up = () => active_index.value--;
const down = () => active_index.value++;
const selectValue = ({index = active_index.value}) => {
  current_value = Object.assign(current_value, $props.values[index]);
  show_dropdown.value = false;
}

const show = () => {
  // active_index =
  show_dropdown.value = true;
}

const hide = () => {
  show_dropdown.value = false;
  active_index.value = -1;
}

watch(active_index, index => {
  if (!show_dropdown.value) return;
  if (index <= -1) return active_index.value = $props.values.length - 1;
  else if (index >= $props.values.length) return active_index.value = 0;
  //////////////////////////////////////////////////////////////
  $root.value.querySelector('.select__dropdown').children[index].scrollIntoView({block: "nearest"});
})

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

.select {
  position: relative;
  outline: none;

  &__input {
    transition: $transition;

    &:focus {
      border-radius: 5px;
      background-color: red;
      box-shadow: 0 0 10px 1px rgba(122, 122, 122, .15);
    }
  }

  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    display: flex;
    border-radius: 5px;
    margin-top: 10px;
    background-color: white;
    overflow-y: auto;
    overflow-y: overlay;
    max-height: 100px !important;

    &__item {
      width: 100%;
      padding: 10px 5px;
      text-align: left;
      border: none;
      background-color: rgba(0, 0, 0, .1);
      transition: background-color $transition;

      &_active {
        background-color: rgba(0, 0, 0, .2);
      }

      &:hover {
        background-color: rgba(0, 0, 0, .2);
      }
    }
  }
}
</style>