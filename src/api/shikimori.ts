import axios from 'axios';

axios.defaults.baseURL = 'https://shikimori.one/api';

export interface User {
  readonly nickname: string;
  readonly avatar: string;
}

interface Image {
  readonly original: string;
  readonly preview: string;
}

export const imageURL = (image: Image): string => 'https://shikimori.one' + image.original;

export interface Anime {
  readonly id: number;
  readonly name: string;
  readonly russian: string;
  readonly image: Image;
  readonly kind: string;
  readonly score: string;
  readonly status: string;
  readonly episodes: number;
  readonly aired_on: string;
  readonly released_on: string;
}

interface Genre {
  readonly id: number;
  readonly name: string;
}

interface Studio {
  readonly id: number;
  readonly name: string;
}

export interface AnimeEx extends Anime {
  readonly rating: string;
  readonly duration: number;
  readonly description: string;
  readonly genres: Genre[];
  readonly studios: Studio[];
}

export interface AnimeRate {
  readonly id: number;
  readonly status: string;
  readonly anime: Anime;
}

export async function getUser(id: number | string): Promise<User> {
  const response = await axios.get(`/users/${id}`);
  return response.data;
}

export async function getUserAnimeRates(
  id: number | string
): Promise<AnimeRate[]> {
  const response = await axios.get(`/users/${id}/anime_rates?limit=${5000}`);
  return response.data;
}

export async function getAnime(id: number | string): Promise<AnimeEx> {
  const response = await axios.get(`/animes/${id}`);
  return response.data;
}