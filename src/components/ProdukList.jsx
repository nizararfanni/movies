import React from "react";
import { useSearchParams } from "react-router-dom";

const ProdukList = () => {
  const [params, setParams] = useSearchParams();

  console.log(params.get("sort"));
  console.log(params.get("price"));
  return (
    <>
      <div>Produk list</div>
      <p>{params.get("sort")}</p>
      <p>{params.get("price")}</p>
    </>
  );
};

export default ProdukList;
