<script setup lang="ts">

import { useFilterStore, categories } from '../store/filter';
import CheckBoxGroup from './base/CheckBoxGroup.vue';
import Range from './base/Range.vue';

const filterStore = useFilterStore();

</script>

<template>
  <div class="filter-container">
    <div>
      <Range text="Min. score" :max="10" :step=".1" v-model="filterStore.score"/>

      <div v-for="category in categories">
        <h4>{{ category.text }}</h4>
        <CheckBoxGroup :options="category.options" v-model="filterStore[category.value]"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  display: flex;
  flex-direction: column;
}

h4 {
  background: hsl(0, 0%, 20%);
}
</style>