import axios from "axios";
const client = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "dae00b55c2f84ea3e6b7a5269e204c45",
  },
});

export const getMovieList = (category, page) => {
  return client
    .get(`/movie/${category}`, { params: { page } })
    .then((resp) => resp.data);
};

export const getMovieDetail = (movieId) => {
  return client.get();
};

export const getPersonalMovies = (accountId, listType, sessionId) => {
  return client;
};

export const rateMovie = (movieId, rate, sessionId) => {
  return client;
};

export const toggleFavoriteMovie = (
  movieId,
  isFavorite,
  accountId,
  sessionId
) => {
  return client;
};

export const loginService = async (username, password) => {};
