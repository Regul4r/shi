<script setup lang="ts">

import UserList from './UserList.vue';
import Filter from './Filter.vue';

</script>

<template>
  <div class="control-container">
    <div>
      <h3>Users</h3>
      <UserList/>
    </div>

    <div>
      <h3>Filter</h3>
      <Filter/>
    </div>
  </div>
</template>

<style scoped>
.control-container {
  /* border-left: 1px solid hsl(0, 0%, 100%); */
  /* padding: 1rem; */
  height: 100%;

  display: flex;
  flex-direction: column;
}
</style>