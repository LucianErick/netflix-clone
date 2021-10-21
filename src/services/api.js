import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  limit: 50,
});

const API_KEY = "2edee3efc74ce0f559038510ea696fcd";
const LANGUAGE = "language=pt-BR";

const basicRequest = async (endpoint) => {
  const response = await api.get(`${endpoint}`);
  return response.data;
};

export const getMovieInfo = async (movieId, type) => {
  let info = {};
  if (movieId) {
    switch (type) {
      case 'movie':
        info = await basicRequest(`/movie/${movieId}?${LANGUAGE}&&api_key=${API_KEY}`);
        break;
      case 'tv':
        info = await basicRequest(`/tv/${movieId}?${LANGUAGE}&&api_key=${API_KEY}`);
        break;
      default:
        info = null;
        break;
    }
  }
  return info;
}

export const getHomeList = async () => {
  return [
    {
      slug: "originals",
      title: "Originais da Netflix",
      items: await basicRequest(
        `/discover/tv?with_network=213&${LANGUAGE}&api_key=${API_KEY}`
      ),
    },
    {
      slug: "trending",
      title: "Recomendados para você",
      items: await basicRequest(
        `/trending/all/week?${LANGUAGE}&api_key=${API_KEY}`
      ),
    },
    {
      slug: "toprated",
      title: "Em Alta",
      items: await basicRequest(
        `/movie/top_rated?${LANGUAGE}&api_key=${API_KEY}&page=3`
      ),
    },
    {
      slug: "action",
      title: "Ação",
      items: await basicRequest(
        `/discover/movie?with_genres=28&${LANGUAGE}&api_key=${API_KEY}`
      ),
    },
    {
      slug: "comedy",
      title: "Comédia",
      items: await basicRequest(
        `/discover/movie?with_genres=35&${LANGUAGE}&api_key=${API_KEY}`
      ),
    },
    {
      slug: "horror",
      title: "Terror",
      items: await basicRequest(
        `/discover/movie?with_genres=27&${LANGUAGE}&api_key=${API_KEY}`
      ),
    },
    {
      slug: "romance",
      title: "Romance",
      items: await basicRequest(
        `/discover/movie?with_genres=10749&${LANGUAGE}&api_key=${API_KEY}`
      ),
    },
    {
      slug: "documentary",
      title: "Documentário",
      items: await basicRequest(
        `/discover/movie?with_genres=99&${LANGUAGE}&api_key=${API_KEY}`
      ),
    },
  ];
};
