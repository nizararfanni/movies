import { useEffect, useState } from "react";
import { movieList } from "../api/api";

const GetMovies = () => {
  // variiabel penambung listmovie
  const [moviesPopular, setMoviesPopular] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await movieList();
      setMoviesPopular(movies);
    };
    fetchMovies();
    console.log(moviesPopular);
  }, []);

  return (
     <div className="min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-gray-200 dark:bg-gray-800 pt-19">
      {moviesPopular.map((movie) => (
        <article
          key={movie.id}
          className="flex flex-col max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 h-full"
        >
          <div className="w-full h-64 overflow-hidden">
            <img
              className="object-cover object-top w-full h-full"
              src={`${import.meta.env.VITE_IMAGE_URL}/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          <div className="flex flex-col gap-1 mt-4 px-4 flex-grow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
              {movie.title}
            </h2>
            <span className="font-normal text-gray-600 dark:text-gray-300 line-clamp-4">
              {movie.overview}
            </span>
            <span className="font-semibold text-gray-800 dark:text-gray-50 mt-2">
              RATE: {movie.vote_average}
            </span>
          </div>

          <div className="flex justify-between px-4 mt-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
              Release Date:
            </h3>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
              Popularity:
            </h3>
          </div>

          <div className="flex justify-between px-4 mb-4">
            <div className="text-lg font-semibold text-yellow-500">
              {movie.release_date}
            </div>
            <div className="text-lg font-semibold text-yellow-500">
              {movie.popularity}
            </div>
          </div>

          <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-500 flex justify-center">
            <button className="flex justify-center items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50 bg-blue-600 p-3 rounded-md hover:bg-blue-800 transition duration-300">
              <span className="text-base">Watch now</span>
            </button>
          </div>
        </article>
      ))}
    </div> 
  );
};

export default GetMovies;



