<template>
  <router-link class="sidebar-link py-2 gap-4 flex flex-row justify-start items-center" :to="$props.to||''" v-bind="$props">
    <slot name="icon"/>
    <slot name="content"/>
  </router-link>
</template>

