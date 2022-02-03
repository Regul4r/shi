<script setup lang="ts">

import { computed } from 'vue';

interface RangeProps { text: string, min?: number, max: number, step: number, modelValue: number };

const props = withDefaults(defineProps<RangeProps>(), { min: 0 });
const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

</script>

<template>
  <div>
    <label :for="text">{{ text }}</label>
    <input type="range" :min="min" :max="max" :step="step" :id="text" v-model="model">
    <label :for="text">{{ model }}</label>
  </div>
</template>

<style scoped>
</style>