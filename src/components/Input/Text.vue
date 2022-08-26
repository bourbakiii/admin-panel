<template>
  <label :for="id" class="input-block input-block_text">
    <span class="input-block__title">{{ title }}</span>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" name="null" :id="id"
           v-bind="$props"/>
  </label>
</template>
<script setup>
import {defineProps, defineEmits} from "vue";

defineEmits(['update:modelValue']);
defineProps({
  id: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  placeholder: {
    required: false,
    type: String
  },
  name: {
    required: false,
    type: String,
    default: null
  },
  modelValue: {
    required: false,
    type: String,
    default: null
  }
})

</script>
<style lang="scss">
.input-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  grid-gap: 8px;
  @media screen and (max-width: $tablet) {
    grid-gap: 5px;
  }
}
</style>