<template>
  <div class="product">
    <div class="product__image"/>
    <p class="product__name">Some product name right there</p>
  </div>
</template>
<style lang="scss">
.product{
  width:200px;
  height:100px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  &__image{
    width:50px;
    height:50px;
    border-radius: 5px;
    background-color: grey;
    flex-shrink: 0;
  }
  &__name{
    margin-left:10px;
  }
}
</style>