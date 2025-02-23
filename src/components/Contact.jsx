import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen text-white ">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 ">Contact Me</h1>
        <p className="text-lg">You can reach me on:</p>
      </div>
      <div className="flex justify-center space-x-4  m-3">
        <a
          href="https://www.instagram.com/nzarr_arfan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} className="m-auto" />
          <p>nzrr_arfan</p>
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} className="m-auto" />
          <p>nizar_arfan</p>
        </a>
        <a
          href="https://wa.me/085713296658"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} className="m-auto" />
          <p>085713296658</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
