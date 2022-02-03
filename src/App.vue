<script setup lang="ts">

import Main from './components/Main.vue';

</script>

<template>
  <Main/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100vh;
}
body, html {
  margin: 0;
  color: hsl(0, 0%, 93%);
  background-color: hsl(0, 0%, 13%);
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>