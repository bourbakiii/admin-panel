<template>
  <div ref="root" @keydown.down.prevent="loggyDown" @keydown.up.prevent="loggyUp" @focusin="openDropdown"
       class="select">
    {{ current_value }}
    <InputBase readonly class="select__input" v-bind="input" :value="current_value.value"/>
    <div v-if="show_dropdown" class="select__dropdown dropdown">
      <button :class="{'select__dropdown__item_active':active_index === index}" class="select__dropdown__item"
              v-for="(item, index) in values" @click.prevent="setCurrentValue(item)">
        {{ item.value }}
      </button>
    </div>
  </div>
</template>
<script setup>
import InputBase from "@/components/Input/Base.vue";
import {reactive, ref, defineProps, onMounted} from "vue";

const props = defineProps({

  input: {
    required: false,
    type: Object,
  },
  values: {
    required: true,
    type: Array
  }
})


const root = ref(null);
let show_dropdown = ref(false);
let active_index = ref(-1);
let current_value = reactive({});

let setCurrentValue = item => {
  current_value = Object.assign(current_value, item);
}
const openDropdown = () => {
  show_dropdown.value = true;
  active_index.value = props.values;
}
const closeDropdown = () => {
  show_dropdown.value = false;
  active_index.value = -1;
}
const loggyUp = () => active_index.value = (active_index.value > 0 ? active_index.value - 1 : (props.values.length - 1));

const loggyDown = () => active_index.value = (active_index.value < (props.values.length - 1)) ? (active_index.value + 1) : 0;


</script>
<style lang="scss">
.select {
  position: relative;
  outline: none;

  &__input {
    transition: $transition;

    &:focus {
      border-radius: 5px;
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