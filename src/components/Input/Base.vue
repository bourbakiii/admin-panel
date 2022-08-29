<template>
  <input class="base-input">
</template>
<style lang="scss">
.base-input {
  border: none;
  outline: none;
  padding: 8px;
  background-color: rgba(black, 0.1);
  border-radius: 5px;
  transition: background-color $transition;
  width:100%;
  &[readonly]{
    cursor: pointer;
  }
  &:not([readonly]):focus {
    background-color: rgba(black, 0.2);
  }
}
</style>