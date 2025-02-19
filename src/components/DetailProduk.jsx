import React from "react";
import { useParams } from "react-router-dom";

const DetailProduk = () => {
  const params = useParams();

  return(
    <div>
      <h1>Detail Produk</h1>
      {/* ambil slug dari url path di route*/}
      <p>{params.produkSlug}</p>
    </div>
  )
};

export default DetailProduk;
