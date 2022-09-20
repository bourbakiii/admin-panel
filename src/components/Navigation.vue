<template>
  <header @click="$INDEX_STORE.increment()" class="navigation">
    Some text right there
    {{$INDEX_STORE}}
  </header>
</template>
<script setup>
import {useIndexStore} from '@/stores/index'
const $INDEX_STORE = useIndexStore()
$INDEX_STORE.count++
// with autocompletion ✨
$INDEX_STORE.$patch({count: $INDEX_STORE.count + 1})
// or using an action instead
$INDEX_STORE.increment()
</script>
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