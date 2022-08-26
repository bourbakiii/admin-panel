<template>
  <main class="page__content third-page">
    <InputText v-model="testVariable"
               v-bind="{title: 'Some input title', placeholder: 'Some placeholder right there'}"/>
    <input   type="text" v-model="testVariable">
    {{testVariable}}
  </main>
</template>

<script setup>
import {ref} from "vue";
import InputText from '@/components/Input/Text.vue';

const testVariable = ref(null);
</script>