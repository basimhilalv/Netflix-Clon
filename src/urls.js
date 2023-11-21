import { API_KEY } from "./Constants/Constants";

export const ORIGINALS = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const ACTION = `/discover/movie?with_genres=28&api_key=${API_KEY}`
export const COMEDY = `/discover/movie?with_genres=35&api_key=${API_KEY}`