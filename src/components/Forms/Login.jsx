import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  // navigasi biar ke halaman utama
  const navigate = useNavigate();

  // ambil email dan password dari form sebagai refrence
  const email = useRef(null);
  const password = useRef(null);

  // buat state untuk email dan  password untuk melacak perubahan
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  // buat pesan error
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const handleLogin = () => {
    console.log(email.current?.value);
    console.log(password.current?.value);
    localStorage.setItem("email", email.current?.value);
    localStorage.setItem("password", password.current?.value);

    // validasi email dan password sudah benar
    if (email && password) {
      navigate("/produk");
    } else {
      setErrorPassword("Email or Password is wrong");
      setErrorEmail("Email or Password is wrong");
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Login </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 max-w-full overflow-hidden"
                      placeholder="Email address"
                      ref={email}
                      onChange={(e) => setEmailValue(e.target.value)}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                    {errorEmail && (
                      <p className="text-red-600 text-xs">{errorEmail}</p>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      ref={password}
                      onChange={(e) => setPasswordValue(e.target.value)}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    {errorPassword && (
                      <p className="text-red-600 text-xs">{errorPassword}</p>
                    )}
                  </div>
                  <div className="flex justify-center align-center ">
                    <button
                      className="bg-cyan-500 text-white rounded-md px-2 py-1 hover:bg-cyan-600"
                      onClick={handleLogin}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="flex justify-center items-center mt-8 flex-col ">
                    <p className="text-center text-xs font-semibold">
                      Don't have an account?
                    </p>
                    <div>
                      <Link
                        to="/register"
                        className="text-cyan-500 hover:text-cyan-600 font-semibold text-sm"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
