import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { getUser, getUserAnimeRates, User, AnimeRate } from '../api/shikimori';

export const useUserStore = defineStore('users', () => {
  const users = reactive<{ user: User, animeRates: AnimeRate[] }[]>([]);

  const addUser = async (id: number | string) => {
    const user = await getUser(id);
    const userAnimeRates = await getUserAnimeRates(id);

    users.push({ user, animeRates: userAnimeRates });

    console.log(users);
  };

  return {
    addUser
  };
});