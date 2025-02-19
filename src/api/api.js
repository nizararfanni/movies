import axios from "axios";

// vite bukaan pake process anjeng buat import di file env.
const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

export const movieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};


export const seacrhMovieList = async (q) => {
  const movie = await axios.get(
    `${baseUrl}/search/movie?api_key=${apiKey}&query=${q}`
  );
  return movie.data.results;
};
