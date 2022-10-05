import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import axios from "axios";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Mycard from "./productCard.js";

import "./productCarousel.css";
import { API } from "../utils/axios.js";

const Imagecarousel = () => {
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const result = await API.fetchProduct();
      console.log(result?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isMdScreen = useMediaQuery({ query: "(min-width: 768px)" });

  let totalSlide = () => {
    if (isBigScreen) return 6;
    else if (isDesktopOrLaptop) return 4;
    else if (isMdScreen) return 3;
    else return 1;
  };

  const value = totalSlide();
  // console.log(value);

  return (
    <CarouselProvider
      visibleSlides={`${value}`}
      totalSlides={10}
      step={1}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
    >
      <Slider className="slider">
        <Slide index={0}>
          <Mycard cardno="1" />
        </Slide>
        <Slide index={1}>
          <Mycard cardno="2" />
        </Slide>
        <Slide index={2}>
          <Mycard cardno="3" />
        </Slide>
        <Slide index={3}>
          <Mycard cardno="4" />
        </Slide>
        <Slide index={4}>
          <Mycard cardno="5" />
        </Slide>
        <Slide index={5}>
          <Mycard cardno="6" />
        </Slide>
        <Slide index={6}>
          <Mycard cardno="7" />
        </Slide>
        <Slide index={7}>
          <Mycard cardno="8" />
        </Slide>
      </Slider>
      <ButtonBack className="buttonBack w-11 h-11 ml-2 shrink-0 grow-0 rounded-full bg-blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </ButtonBack>
      <ButtonNext className="buttonNext w-11 h-11 shrink-0 grow-0 mr-2 rounded-full bg-blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </ButtonNext>
    </CarouselProvider>
  );
};

export default Imagecarousel;
