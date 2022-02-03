<script setup lang="ts">

import { computed } from 'vue';
import { Option } from '../../store/filter';

interface CheckBoxProps extends Option { text: string, value: string, modelValue: string[] };

const props = defineProps<CheckBoxProps>();
const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

</script>

<template>
  <div>
    <input :id="text" type="checkbox" :value="value" v-model="model">
    <label :for="text">{{ text }}</label>
  </div>
</template>

<style scoped>
</style>