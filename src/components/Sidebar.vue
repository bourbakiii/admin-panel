<template>
  <div class="sidebar">
    <router-link class="sidebar__link" to="/">Первая</router-link>
    <router-link class="sidebar__link" to="/second">Вторая</router-link>
    <router-link class="sidebar__link" to="/third">Третья</router-link>
  </div>
</template>
<style lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
</style>