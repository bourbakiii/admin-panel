<template>
  <main class="page index-page">
    Some Product Component
    <hr/>
    <Product/>
    <ProductLoader/>
  </main>
</template>
<script setup>
import Product from '@/components/Product.vue';
import ProductLoader from '@/components/ProductLoader.vue';
import axios from "axios";

// console.log("Default URL is:")
console.log(axios?.defaults);
</script>