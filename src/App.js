import "./App.css";
import { Routes, Route } from "react-router-dom";

import ProductGrid from "./components/ProductGrid";
import Team from "./components/team/team";
import Email from "./components/email/email";
import HeroSlider from "./components/hero-slider/hero-slider";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductGrid />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/email" element={<Email />}></Route>
      <Route path="/hero-slider" element={<HeroSlider />}></Route>
    </Routes>
  );
}

export default App;
