import React from "react";

import pic from "../assets/product.webp";

import "./productCard.css";

const Mycard = (props) => {
  return (
    <>
      {/* <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="productCard border flex items-center flex-col p-3">
        <div className="product-item-image">
          <a href="#">
            <img src={pic}></img>
          </a>
        </div>

        <div className="product-info">
          <div className="product-info-name-brand">
            <a href="#" className="brand-name text-sm">
              SIROHI
            </a>
            <br></br>
            <a href="#" className="product-name text-lg">
              Ayesha | Gift box
            </a>
          </div>
          <div className="product-info-price mt-5 mb-3">
            <span className="price">
              <span className="Money text-xl">₹1,990</span>
            </span>
          </div>

          <button class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Mycard;
