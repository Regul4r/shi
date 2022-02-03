<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue';

let tags = reactive<string[]>([]);
let newTag = ref('');
let mod = ref(false);

const input = ref<{ focus(): any } | null>(null);

const emit = defineEmits(['add']);

watchEffect(() => {
  if (input.value)
    input.value.focus();
}, 
{
  flush: 'post'
});

function add() {
  emit('add', newTag.value);
  tags.push(newTag.value);
  newTag.value = '';
  mod.value = false;
}

</script>

<template>
  <div class="tags-container">
    <div class="tag" v-for="tag in tags">{{ tag }}</div>
    <div class="tag">
      <button v-if="!mod" @click="mod = true">+</button>
      <input ref="input" v-if="mod" v-model="newTag"
        @keypress.enter="add"
        @focusout="mod = false"
        @keypress.esc="mod = false">
    </div>
  </div>
</template>

<style scoped>
.tags-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.tag {
  outline: 1px solid red;
  padding: .05rem;
  border-radius: .05rem;
}
</style>