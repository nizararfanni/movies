import { Route, Routes, useLocation } from "react-router-dom";
import DetailProduk from "./components/DetailProduk";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ProdukList from "./components/ProdukList";
import LoginPage from "./components/Forms/Login";
import RegisterPage from "./components/Forms/RegisterPage";
import Navbar from "./pages/Navbar";
import GetMovies from "./components/GetMovies";

function App() {
  // location navbar biar di path login/register dia tak muncul
  const location = useLocation();
  const showNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="bg-gray-700 min-h-screen">
      {!showNavbar && <Navbar />}
      {/* dinamic routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk-list" element={<ProdukList />} />
        <Route path="/produk" element={<GetMovies />} />
        <Route path="/produk/:produkSlug" element={<DetailProduk />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
