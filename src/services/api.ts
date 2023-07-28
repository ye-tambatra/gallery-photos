import { SearchResult } from "../types";

const API_URL = import.meta.env.VITE_API_URL;
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export function searchPhotos(query: string): Promise<SearchResult> {
  return fetch(
    `${API_URL}/search/photos?query=${query}&per_page=12&h=400&w=200`,
    {
      headers: {
        Authorization: "Client-ID " + ACCESS_KEY,
      },
    }
  ).then((res) => res.json());
}
