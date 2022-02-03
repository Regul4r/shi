<script setup lang="ts">

import { useUserStore } from '../store/users';
import DynamicTags from './base/DynamicTags.vue';

const userStore = useUserStore();

</script>

<template>
  <DynamicTags @add="(id) => userStore.addUser(id)"/>
</template>

<style scoped>
</style>