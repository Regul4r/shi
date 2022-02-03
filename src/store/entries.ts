import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';
import { Anime, User } from '../api/shikimori';

interface Entry {
  anime: Anime,
  users: User[]
};

export const useEntryStore = defineStore('entries', () => {
  const entries = reactive(new Map<string, Entry>());
  let loading = ref(false);

  const filteredEntries = computed(() => {
    return [...entries.values()].filter((entry) => true);
  });

  return {
    entries,
    loading
  };
});