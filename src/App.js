import "./App.css";
import { Routes, Route } from "react-router-dom";

import ProductGrid from "./components/product-grid/ProductGrid";
import Team from "./components/team/team";
import Email from "./components/email/email";
import HeroSlider from "./components/hero-slider/hero-slider";
import ProductCarousel from "./components/product-slider/productCarousel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductGrid />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/email" element={<Email />}></Route>
      <Route path="/hero-slider" element={<HeroSlider />}></Route>
      <Route path="/product-carousel" element={<ProductCarousel />}></Route>
    </Routes>
  );
}

export default App;
