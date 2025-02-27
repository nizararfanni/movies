import React, { useState } from "react";
import Create from "../CRUD/Create";
import { uid } from "uid";

const AddNewMovie = () => {
  const [formError, setFormError] = useState("");
  // Inisialisasi state dengan film contoh
  const [addNewMovies, setAddNewMovies] = useState([
    {
      id: 1, // ID harus unik
      name: "batman",
      deksripsi: "ini deksripsi batman",
      rate: 5,
      release_date: "2022-01-01",
      poster_path: "batman.jpg",
      popularity: 1000.1,
      overview:
        "ini overview batman lorem20 ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod. lorem ",
    },
  ]);

  // State untuk data form
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    deksripsi: "",
    sutradara: "",
  });

  // State untuk pembaruan data
  const [update, setUpdate] = useState({ id: null, status: false });

  // Menangani perubahan input form
  const handleChange = (event) => {
    // Membuat salinan dari formData
    let data = { ...formData };
    // Mengupdate data sesuai dengan input yang diisi
    data[event.target.id] = event.target.value;
    // Menyimpan perubahan ke state formData
    setFormData(data);
  };

  // Menangani submit form
  const handleSubmit = (event) => {
    // Mencegah halaman reload
    event.preventDefault();
    // Membuat salinan dari addNewMovies
    let data = [...addNewMovies];
    // Mencegah submit jika form kosong
    if (!formData.name || !formData.deksripsi || !formData.sutradara)
      return setFormError("Form tidak boleh kosong");

    if (update.status) {
      // Mengupdate data film jika dalam mode pembaruan
      data = data.map((movie) => {
        if (movie.id === update.id) {
          return {
            ...movie,
            name: formData.name,
            deksripsi: formData.deksripsi,
            sutradara: formData.sutradara,
          };
        }
        return movie;
      });
      setUpdate({ id: null, status: false });
    } else {
      // Menambah data film baru jika tidak dalam mode pembaruan
      data.push({
        id: uid(), // Menghasilkan ID unik
        name: formData.name,
        deksripsi: formData.deksripsi,
        sutradara: formData.sutradara,
      });
    }
    // Menyimpan perubahan ke state addNewMovies
    setAddNewMovies(data);
    // Mengosongkan formData
    setFormData({
      name: "",
      id: "",
      deksripsi: "",
      sutradara: "",
    });
    // Mengosongkan pesan error
    setFormError("");
  };

  // Menangani edit data film
  const handleEdit = (id) => {
    // Mencari film yang akan diedit berdasarkan ID
    let found = addNewMovies.find((movie) => movie.id === id);
    if (found) {
      // Mengisi form dengan data film yang akan diedit
      setFormData({
        name: found.name,
        id: found.id,
        deksripsi: found.deksripsi,
        sutradara: found.sutradara,
      });
      // Mengatur status update menjadi true
      setUpdate({ id: id, status: true });
    }
  };

  // Menangani hapus data film
  const handleDelete = (id) => {
    // Membuat salinan dari addNewMovies
    let data = [...addNewMovies];
    // Menghapus data film berdasarkan ID
    data = data.filter((movie) => movie.id !== id);
    // Menyimpan perubahan ke state addNewMovies
    setAddNewMovies(data);
  };

  return (
    <div className="min-h-screen w-full mx-auto pt-10">
      <form
        className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">add new movie</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name movie
            <p className="text-red-600 text-center">{formError}</p>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your movie name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="sutradara"
          >
            Sutradara
            <p className="text-red-600 text-center">{formError}</p>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sutradara"
            type="text"
            placeholder="Maukan nama sutradara"
            value={formData.sutradara}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="deksripsi"
          >
            Deksripsi movie
            <p className="text-red-600 text-center">{formError}</p>
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="deksripsi"
            rows="5"
            placeholder="Enter deksripsi"
            value={formData.deksripsi}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-md p-4 "
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-5 flex justify-center items-center">
        <Create handleEdit={handleEdit} handleDelete={handleDelete} data={addNewMovies}></Create>
      </div>
    </div>
  );
};

export default AddNewMovie;
