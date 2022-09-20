<template>
  <label class="input-block gap-1.5 flex flex-col justify-start w-full">
    <span v-if="$props.title" class="input-block__label">{{ $props.title }}</span>
    <input :value="$props.modelValue" @input="$emit('update:modelValue', $event.target.value )"
           v-bind="$props"
           class="input-base ">
  </label>
</template>
<script setup>

defineProps({
  modelValue: {
    required: false,
    default: null
  },
  title: {
    required: false,
    default: null
  }
});
</script>