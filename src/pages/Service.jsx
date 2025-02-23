import React from "react";
import OurServices from "../components/OurServices";

const Service = () => {
  return ( 
    <div className="flex justify-center items-center bg-gray-500 cursor-pointer p-5">
      {/* Grid untuk menyusun layanan dalam satu baris */}
      <ul className="grid gap-6 mt-6 md:gap-12 md:grid-cols-3">
        <OurServices
          tittle={"Beginner"}
          price={"$10"}
          description={
            "Paket ini cocok untuk pengguna yang baru memulai dan ingin mengeksplorasi layanan kami. Dengan paket Beginner, Anda akan mendapatkan akses ke fitur dasar dan konten terbatas. Nikmati pengalaman yang menyenangkan tanpa komitmen besar."
          }
          benefit1={"Akses ke 10 film/bulan"}
          benefit2={"Resolusi SD (Standard Definition)"}
          benefit3={"Dukungan pelanggan melalui email"}
          benefit4={"Punya pacar anime"}
          trialDay={"Coba 7 Hari"}
        />
        <OurServices
          tittle={"Intermediate"}
          price={"$20"}
          description={
            "Paket ini ideal untuk pengguna yang sudah terbiasa dengan layanan kami dan ingin menikmati lebih banyak konten serta fitur tambahan. Dengan paket Intermediate, Anda dapat menikmati film dengan kualitas yang lebih baik dan lebih banyak pilihan"
          }
          benefit1={"Akses ke 50 film/bulan"}
          benefit2={"Resolusi HD (High Definition)"}
          benefit3={"Dukungan pelanggan 24/7"}
          benefit4={"Pacar anime level pro"}
          trialDay={"Coba 14 Hari"}
        />
        <OurServices
          tittle={"Premium"}
          price={"$30"}
          description={"Paket ini dirancang untuk pengguna yang ingin merasakan pengalaman terbaik dari layanan kami. Dengan paket Advanced, Anda akan mendapatkan akses tanpa batas ke semua konten dan fitur premium. Nikmati hiburan tanpa batas dengan kualitas terbaik."}
          benefit1={"Akses ke semua film tanpa batas"}
          benefit2={"Resolusi 4K Ultra HD"}
          benefit3={"Dukungan pelanggan prioritas"}
          benefit4={"Pacar anime waifu terbaik"}
          trialDay={"Coba 30 Hari"}
        />
      </ul>
    </div>
  );
};

export default Service;
