<script setup lang="ts">

import Control from './Control.vue';
import EntryGrid from './EntryGrid.vue';

</script>

<template>
  <div class="container">
    <main>
      <EntryGrid/>
    </main>
    <aside>
      <Control/>
    </aside>
  </div>
</template>

<style scoped>
.container {
  height: 100%;

  display: flex;
}

main {
  flex: auto;
  overflow-y: auto;
}

aside {
  flex: 0 0 20rem;
  background-color: hsl(0, 0%, 16%);

  overflow-x: hidden;
  overflow-y: auto;
}
</style>