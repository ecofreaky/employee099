import img1 from "../../assets/slider/img-1.jpg";
import img2 from "../../assets/slider/img-2.jpg";
import img3 from "../../assets/slider/img-3.jpg";
import img4 from "../../assets/slider/img-4.jpg";

import "./slide.css";

const Slide = () => {
  return (
    <>
      <div class="slide">
        <img src={img1} alt="Pic 1" />
      </div>
      <div class="slide">
        <img src={img2} alt="Pic 1" />
      </div>
      <div class="slide">
        <img src={img3} alt="Pic 1" />
      </div>
      <div class="slide">
        <img src={img4} alt="Pic 1" />
      </div>
    </>
  );
};

export default Slide;
