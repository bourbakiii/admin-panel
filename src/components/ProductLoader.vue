<template>
  <div class="product-loader skeleton">
    <SkeletBlock width="50px" height="50px"/>
  </div>

</template>
<script setup>
import SkeletBlock from '@/components/SkeletBlock.vue'
</script>
<style lang="scss">
.product-loader {
  width: 200px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  background-color: lavenderblush;

  &__image {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: lightgrey;
    flex-shrink: 0;
  }

  &__name {
    width: 100%;
    height: 16px;
    margin-left: 10px;
    background-color: lavender;
  }
}
</style>