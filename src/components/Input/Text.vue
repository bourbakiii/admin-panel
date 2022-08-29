<template>
  <label :for="id" class="input-block input-block_text">
    <span v-if="title" class="input-block__title">{{ title }}</span>
    <InputBase/>
    <InputBase :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" :id="id"
               v-bind="$props.input"/>
  </label>
</template>
<script setup>
import InputBase from "@/components/Input/Base.vue";
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
  modelValue: {
    required: false,
    type: String,
    default: null
  },
  input: {
    required: false,
    type: Object,
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