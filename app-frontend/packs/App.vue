<template>
  <p>Zipify Banners ({{ counter }})</p>

  <button type="button" @click="increment">
    Click Me!
  </button>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(1);
const increment = () => counter.value++;
</script>
