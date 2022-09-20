<template>
  <header class="navigation">
    Some text right there
  </header>
</template>
<style lang="scss">
// !!! padding-left должен быть больше padding-right на расстояние указанное в translateX(-XX)
.navigation {
  height: 50px;
  width: calc(100% + 10px);
  transform: translateX(-10px);
  background-color: lightcoral;
  padding: 0 20px 0 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
}
</style>