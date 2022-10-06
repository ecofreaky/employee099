import Slide from "./slide";

import "./hero-slider.css";

import Slider from "./script";
import { useEffect } from "react";

const HeroSlider = () => {
  useEffect(() => {
    Slider();
  }, []);

  return (
    <section
      class="section w-fit mx-auto justify-items-center justify-center mt-10 mb-5"
      id="section--3"
    >
      <div class="section__title section__title--testimonials">
        <h2 class="section__description text-center">Hero Slider</h2>
      </div>

      <div class="slider">
        <Slide></Slide>
        <button class="slider__btn slider__btn--left">&larr;</button>
        <button class="slider__btn slider__btn--right">&rarr;</button>
        <div class="dots"></div>
      </div>
    </section>
  );
};

export default HeroSlider;
