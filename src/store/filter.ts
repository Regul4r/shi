import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export interface Option {
  readonly value: string,
  readonly text: string
};

interface Category {
  readonly value: string,
  readonly text: string,
  readonly options: Option[]
};

export const categories: Category[] = [
  {
    value: 'status',
    text: 'Status',
    options: [
      { value: "anons", text: "Announced" },
      { value: "ongoing", text: "Airing" },
      { value: "released", text: "Finished" }
    ]
  },
  {
    value: 'type',
    text: 'Type',
    options: [
      { value: 'tv', text: 'TV Series' },
      { value: 'movie', text: 'Movie' },
      { value: 'ova', text: 'OVA' },
      { value: 'ona', text: 'ONA' },
      { value: 'special', text: 'Special' },
      { value: 'music', text: 'Music' }
    ]
  },
  {
    value: 'duration',
    text: 'Duration',
    options: [
      { value: "less_10", text: "Less than 10 minutes" },
      { value: "less_30", text: "Less than 30 minutes" },
      { value: "more_30", text: "More than 30 minutes" }
    ]
  },
  {
    value: 'rating',
    text: 'Rating',
    options: [
      { value: "g", text: "G" },
      { value: "pg", text: "PG" },
      { value: "pg_13", text: "PG-13" },
      { value: "r", text: "R-17" },
      { value: "r_plus", text: "R+" },
      { value: "rx", text: "Rx" }
    ]
  },
];

export const useFilterStore = defineStore('filter', () => {
  const type = reactive<string[]>(['tv', 'movie']);
  const duration = reactive<string[]>([]);
  const status = reactive<string[]>(['released']);
  const rating = reactive<string[]>([]);

  const score = ref<number>(0);

  return {
    type,
    duration,
    status,
    rating,
    score,
  };
});