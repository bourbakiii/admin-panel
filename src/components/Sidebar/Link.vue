<template>
  <router-link :to="$props.to||''" v-bind="$props">
    <slot name="icon" class="text-2xl">Ссылка</slot>
    <slot name="content">Ссылка</slot>
  </router-link>
</template>