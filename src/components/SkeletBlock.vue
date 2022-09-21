<template>
  <div class="skelet-block">

  </div>
</template>
<script setup>
defineProps({
  width: {
    required: true
  },
  height: {
    required: true
  },
  border_radius: {
    required: false,
    default: '5px'
  }
})
</script>
<style lang="scss">
@keyframes skeleton-loading {
  0% {
    background-color:rgba(194, 207, 214, 1)
  }
  100% {
    background-color: rgba(240, 243, 245, 1);
  }
}

.skelet-block {
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(border_radius);
  animation: skeleton-loading 1s linear infinite alternate;
}
</style>