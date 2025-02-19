import React, { useState } from "react";
import { seacrhMovieList } from "../api/api";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]); // Menyimpan hasil pencarian
  const navigate = useNavigate();

  // Search movie by title
  const search = async (query) => {
    if (!query) {
      setMovies([]); // Jika input kosong, hapus hasil pencarian
      return;
    }

    const results = await seacrhMovieList(query);
    setMovies(results);
    console.log({ query: results });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    search(searchMovie);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <h2 className="text-black dark:text-white font-bold text-2xl">
              Kheneddy
            </h2>
          </button>
          <div className="hidden lg:flex lg:items-center gap-x-2">
            <div className="hidden lg:block">
              <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <a href="#">Home</a>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <a href="#">Our services</a>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <a href="#">About</a>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center gap-x-2">
            <input
              type="text"
              placeholder="Search movies..."
              className="bg-gray-500 text-black rounded-sm p-2"
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
            />
            <button
              className="rounded-md bg-blue-600 hover:bg-blue-800 text-white px-6 py-2.5 font-semibold transition duration-200"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className=" rounded-md bg-blue-600 hover:bg-blue-800 text-white px-6 py-2.5 font-semibold transition duration-200"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white"
          ></button>
        </div>

         {/* hamburger menu */}
         {!isOpen && (
          <div className="lg:hidden mt-2">
            <ul className="space-y-2 text-base font-bold text-black/60 dark:text-white">
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="#">Home</a>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="#">Our services</a>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="#">About</a>
              </li>
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <a href="#">Contact</a>
              </li>
              <li>
                <label htmlFor="search" className="text-white">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="bg-gray-500 text-black rounded-sm p-2 mb-2"
                  />
                </label>
                <button className="flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-800 text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                  Search Movie
                </button>
              </li>
              <li>
                <button className="w-full flex items-center justify-center rounded-md bg-[#4A3BFF] text-white py-2 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Hasil Pencarian */}
        {movies.length > 0 && (
          <div className="absolute bg-white dark:bg-gray-800 shadow-md mt-2 rounded-lg p-3 w-72">
            {movies.map((movie) => (
              <article
                key={movie.id}
                className="flex flex-col max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 h-full"
              >
                <div className="w-full h-64 overflow-hidden">
                  <img
                    className="object-cover object-top w-full h-full"
                    src={`${import.meta.env.VITE_IMAGE_URL}/${
                      movie.poster_path
                    }`}
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
        )}
      </nav>
    </div>
  );
};

export default Navbar;
