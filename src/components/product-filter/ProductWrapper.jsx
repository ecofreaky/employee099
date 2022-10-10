import React, { useState, useEffect } from "react";

import GridCard from "./GridCard";

import { ProductApi } from "../../utils/axios";

import "./productWrapper.css";

const ProductWrapper = () => {
  const [products, setProducts] = useState([]);
  const [colorsFilter, setColorsFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");

  const addOrRemoveColor = (color) => {
    let arr = [...colorsFilter];

    let checkIfContain = arr.includes(color.toLowerCase());

    console.log(checkIfContain);
    if (!checkIfContain) {
      arr.push(color.toLowerCase());
      setColorsFilter(arr);
    } else {
      arr = arr.filter((c) => c !== color.toLowerCase());
      setColorsFilter(arr);
    }
  };
  console.log(colorsFilter);

  const addOrRemoveSize = (size) => {
    let arr = [...sizeFilter];

    let checkIfContain = arr.includes(size);
    console.log(checkIfContain);

    if (!checkIfContain) {
      arr.push(size);
      setSizeFilter(arr);
    } else {
      arr = arr.filter((s) => s !== size);
      setSizeFilter(arr);
    }
  };
  console.log(sizeFilter);

  const filterProducts = () => {
    let finalProducts = [...products];

    if (categoryFilter !== "all") {
      console.log(categoryFilter);
      finalProducts = finalProducts.filter((product) =>
        product.pcategory.includes(categoryFilter)
      );
    }

    if (colorsFilter.length > 0) {
      finalProducts = finalProducts.filter((product) => {
        if (product.colors.length > 0) {
          // console.log(product.colors[0].name.toLowerCase(), colorsFilter.toLowerCase());
          return product.colors[0].name
            .toLowerCase()
            .includes([...colorsFilter]);
        }
      });
    }

    if (sizeFilter.length > 0) {
      finalProducts = finalProducts.filter((product) => {
        if (product.sizes.length > 0) {
          return product.sizes[0].name.includes([...sizeFilter]);
        }
      });
    }

    return finalProducts;
  };

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const { data } = await ProductApi.fetchProduct();
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="relative min-h-screen md:flex" data-dev-hint="container">
      <input type="checkbox" id="menu-open" className="hidden" />

      <header
        className="text-black flex justify-between md:hidden"
        data-dev-hint="mobile menu bar"
      >
        <a
          href="#"
          className="block p-4 text-black font-bold whitespace-nowrap truncate"
        ></a>

        <label
          htmlFor="menu-open"
          id="mobile-menu-button"
          className="m-2 p-2 items-end focus:outline-none hover:text-black hover:bg-gray-700 rounded-md"
        >
          <svg
            id="menu-open-icon"
            className="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            id="menu-close-icon"
            className="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </header>

      <aside
        id="sidebar"
        className="bg-violet-50 text-black-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
        data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
      >
        <div
          className="flex flex-col space-y-6"
          data-dev-hint="optional div for having an extra footer navigation"
        >
          {/* Catgeory */}
          <div>
            <div className=" flex space-x-2 mx-3 my-3">
              <svg
                width="30"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 7H20"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 4V10"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                Categories
              </p>
            </div>

            <ul
              role="list"
              className="space-y-2 px-3 mt-6 border-gray-200  text-sm font-medium text-gray-900"
            >
              <li>
                <button
                  class="block px-3 py-1"
                  value="homewellness"
                  onClick={(event) => {
                    setCategoryFilter(event.target.value);
                  }}
                >
                  Homewellness
                </button>
              </li>

              <li>
                <button
                  class="block px-3 py-1"
                  value="personalcare"
                  onClick={(event) => {
                    setCategoryFilter(event.target.value);
                  }}
                >
                  PersonalCare
                </button>
              </li>

              <li>
                <button
                  class="block px-3 py-1"
                  value="fashion"
                  onClick={(event) => {
                    setCategoryFilter(event.target.value);
                  }}
                >
                  Fashion
                </button>
              </li>

              <li>
                <button
                  class="block px-3 py-1"
                  value="accessories"
                  onClick={(event) => {
                    setCategoryFilter(event.target.value);
                  }}
                >
                  Accessories
                </button>
              </li>
            </ul>
          </div>

          {/* Color Section */}
          <div>
            <div className="flex space-x-2 mx-3 my-3">
              <svg
                width="30"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V17C13 18.0609 13.4214 19.0783 14.1716 19.8284C14.9217 20.5786 15.9391 21 17 21C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9994 7.35022L10.9994 5.35022C10.6243 4.97528 10.1157 4.76465 9.58539 4.76465C9.05506 4.76465 8.54644 4.97528 8.17139 5.35022L5.34339 8.17822C4.96844 8.55328 4.75781 9.06189 4.75781 9.59222C4.75781 10.1225 4.96844 10.6312 5.34339 11.0062L14.3434 20.0062"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.3 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H17"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 17V17.01"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                Colors
              </p>
            </div>
            <div className="grid grid-cols-1 gap-y-3 mx-5">
              <div className="space-x-2 md:justify-center md:items-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="emperor"
                  name="emperor"
                  value="emperor"
                  // checked={leather}
                  onChange={(event) => {
                    // setColorsFilter(event.target.value)
                    addOrRemoveColor(event.target.value);
                  }}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Leather"
                    >
                      Emperor
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-x-2 md:justify-center md:items-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="anakiwa"
                  name="anakiwa"
                  value="anakiwa"
                  // checked={fabric}
                  onChange={(event) => {
                    // setColorsFilter(event.target.value)
                    addOrRemoveColor(event.target.value);
                  }}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Fabric"
                    >
                      Anakiwa
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-x-2 md:justify-center md:items-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="black"
                  name="black"
                  value="black"
                  // checked={crocodile}
                  onChange={(event) => {
                    // setColorsFilter(event.target.value)
                    addOrRemoveColor(event.target.value);
                  }}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Crocodile"
                    >
                      Black
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-x-2 md:justify-center md:items-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="aquamarine"
                  name="aquamarine"
                  value="aquamarine"
                  // checked={crocodile}
                  onChange={(event) => {
                    // setColorsFilter(event.target.value)
                    addOrRemoveColor(event.target.value);
                  }}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Crocodile"
                    >
                      Aquamarine
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-x-2 md:justify-center md:items-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="red"
                  name="red"
                  value="red"
                  // checked={crocodile}
                  onChange={(event) => {
                    // setColorsFilter(event.target.value)
                    addOrRemoveColor(event.target.value);
                  }}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Crocodile"
                    >
                      Red
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Size Section */}
          <div>
            <div className="flex space-x-2 mx-3 my-4">
              <svg
                width="30"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5H14"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7L14 5L12 3"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 3L3 5L5 7"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 10V21"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 19L19 21L21 19"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 12L19 10L17 12"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21H12C13.1046 21 14 20.1046 14 19V12C14 10.8954 13.1046 10 12 10Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                Sizes
              </p>
            </div>
            <div className="grid grid-cols-1 gap-y-3 mx-5">
              <div className="space-x-2 md:justify-center md:items-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="Default"
                  name="Default"
                  value="Default"
                  // checked={leather}
                  onChange={(event) => {
                    // setColorsFilter(event.target.value)
                    addOrRemoveSize(event.target.value);
                  }}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Leather"
                    >
                      Default
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-x-2 md:justify-center md:items-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="5 Litres"
                  name="5 Litres"
                  value="5 Litres"
                  // checked={fabric}
                  onChange={(event) => {
                    // setColorsFilter(event.target.value)
                    addOrRemoveSize(event.target.value);
                  }}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Fabric"
                    >
                      5 Litres
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-x-2 md:justify-center md:items-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="5 inch"
                  name="5 inch"
                  value="5 inch"
                  // checked={crocodile}
                  onChange={(event) => {
                    // setColorsFilter(event.target.value)
                    addOrRemoveSize(event.target.value);
                  }}
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="Crocodile"
                    >
                      5 inch
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main id="content" className="flex-1 p-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Sort */}
          <div className="flex justify-end items-end mb-4">
            <select
              id="countries"
              className="bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg"
              value={categoryFilter}
              onChange={(event) => {
                setCategoryFilter(event.target.value);
              }}
            >
              <option value="all">Sort</option>
              <option value="homewellness">Newest</option>
              <option value="personalcare">Price: Low to High</option>
              <option value="fashion">Price: High to Low</option>
            </select>
          </div>

          <div className="w-fit mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-y-4 gap-x-4">
              {filterProducts().map((item, key) => {
                return <GridCard productData={item} key={key}></GridCard>;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductWrapper;
