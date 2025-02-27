import React from "react";

const Create = ({data, handleEdit,handleDelete}) => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-gray-200 dark:bg-gray-800 pt-19">
      {data.map((movie) => (
          <article className="flex flex-col max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700 h-full  "
          key={movie.id}>
          <div className="w-full h-64 overflow-hidden">
            <img className="object-cover object-top w-full h-full" />
          </div>
  
          <div className="flex flex-col gap-1 mt-4 px-4 flex-grow">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                {movie.name}
            </h2>
            <span className="font-normal text-gray-600 dark:text-gray-300 line-clamp-4">
                {movie.overview}
            </span>
            <span className="font-semibold text-gray-800 dark:text-gray-50 mt-2">
              RATE:{movie.rate}
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
  
          <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-500 flex justify-between">
            <button className="flex justify-center items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50 bg-blue-600 p-3 rounded-md hover:bg-blue-800 transition duration-300">
              <span className="text-base">Watch now</span>
            </button>
            <button className="flex justify-center items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50 bg-blue-600 p-3 rounded-md hover:bg-blue-800 transition duration-300" onClick={() => handleEdit(movie.id)}>
              <span className="text-base">Edit Movie</span>
            </button>
            <button className="flex justify-center items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50 bg-blue-600 p-3 rounded-md hover:bg-blue-800 transition duration-300" onClick={() => handleDelete(movie.id)}>
              <span className="text-base">delete Movie</span>
            </button>

          </div>
        </article>
      ))}
    </div>
  );
};

export default Create;
