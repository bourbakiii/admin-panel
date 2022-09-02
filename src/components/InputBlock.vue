<template>
  <label class="input-block space-y-1.5 flex flex-col items-start justify-start">
    <span v-if="$props.title" class="input-block__label">{{ $props.title }}</span>
    <input v-bind="$props" class="input-base">
  </label>
</template>
<script setup>

</script>