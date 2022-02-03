<script setup lang="ts">

import { AnimeRate, imageURL } from '../api/shikimori';

defineProps<{ rate: AnimeRate }>();

</script>

<template>
  <div class="card">
    <div class="img" :style="{ backgroundImage: `url(${imageURL(rate.anime.image)})`}"/>
    <div class="desc">
      <h3>{{ rate.anime.name }}</h3>
    </div>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  background-color: hsl(0, 0%, 20%);
}

.img {
  flex: 0 0 80%;
  background-color: black;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
}

.desc {
  flex: 1;
}
</style>