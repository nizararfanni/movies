import React, { useEffect, useRef } from 'react'

const About = () => {
    const textRef = useRef(null);

    useEffect(() => {
      const interval = setInterval(() => {
        textRef.current.style.visibility =
        // mengubah visibility jika v
          textRef.current.style.visibility === "hidden" ? "visible" : "hidden";
      }, 500); // Kedip setiap 500 milidetik
  
      // Membersihkan interval saat komponen dilepas
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <p  className="text-center text-white font-bold text-2xl">
          <span ref={textRef} className='text-blue-800'>Kheneddy</span> adalah sebuah platform streaming film yang menawarkan berbagai
          macam film dari berbagai genre dan negara. Dengan antarmuka yang ramah
          pengguna dan navigasi yang mudah, Kheneddy memberikan pengalaman
          menonton yang menyenangkan bagi para penggunanya. Platform ini
          menyediakan koleksi film terbaru dan klasik, sehingga pengguna dapat
          menikmati film favorit mereka kapan saja dan di mana saja.
        </p>
      </div>)
}

export default About