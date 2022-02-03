<script setup lang="ts">

import { AnimeRate, getUserAnimeRates } from '../api/shikimori';
import Card from './Card.vue';
import { ref } from 'vue';

const animeRates = ref(Array<AnimeRate>());
getUserAnimeRates('1').then(x => { animeRates.value = x.filter(x => x.status == 'planned'); //console.log(animeRates.value)
});

</script>

<template>
  <div class="grid-container">
    <Card class="item" v-for="rate in animeRates" :rate="rate"/>
  </div>
</template>

<style scoped>

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 24rem;
  grid-auto-flow: row;
  grid-gap: 1rem;

  padding: 1rem;
}

.item {
  border-radius: .5rem;
  overflow: hidden;
}

</style>