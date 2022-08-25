<template>
  <div class="sidebar">
    <router-link class="sidebar__link" to="/product">Продукт</router-link>
    <router-link class="sidebar__link" to="/product/edit">Категория</router-link>
    <router-link class="sidebar__link" to="/compilation">Подборка</router-link>
  </div>
</template>
<style lang="scss">
  .sidebar{
    border: 1px solid black;
  }
</style>