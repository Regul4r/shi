<script setup lang="ts">

import { computed } from 'vue';
import { Option } from '../../store/filter';
import CheckBox from './CheckBox.vue';

const props = defineProps<{ options: Option[], modelValue: string[] }>();
const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
</script>

<template>
  <div class="group">
    <CheckBox v-for="option in options" :="option" v-model="model"/>
  </div>
</template>

<style scoped>
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .1rem;
}
</style>