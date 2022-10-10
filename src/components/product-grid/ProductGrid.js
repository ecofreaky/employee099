import { useEffect, useState } from "react";
import ListCard from "./ListCard";

import { ProductApi } from "../../utils/axios";

function ProductGrid() {
  const [flexType, setFlexType] = useState("flex-col");
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const productData = await ProductApi.fetchProduct();
      setProductArray(productData?.data);
      console.log(productData);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="flex justify-end items-center w-full px-8 py-6">
        <button
          onClick={() => {
            setFlexType("flex-row");
          }}
          class="hover:text-gray-500 text-gray-600 bg-gray-100 py-3.5 px-3 mx-5 rounded-sm flex flex-row justify-center items-center space-x-3"
        >
          <svg
            class="fill-stroke"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 14.6452V9.33875"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6.30645V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14.6452V7.82263"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4.79032V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 14.6452V10.8549"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 7.82258V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 9.33875H7"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 4.79028H15"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 10.8549H23"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p class="hidden md:block text-sm leading-none">List</p>
        </button>

        <button
          onClick={() => {
            setFlexType("flex-col");
          }}
          class="hover:text-gray-500 text-gray-600 bg-gray-100 py-3.5 px-3 rounded-sm flex flex-row justify-center items-center space-x-3"
        >
          <svg
            class="fill-stroke"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 14.6452V9.33875"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6.30645V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14.6452V7.82263"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 4.79032V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 14.6452V10.8549"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 7.82258V1"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 9.33875H7"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 4.79028H15"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 10.8549H23"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p class="hidden md:block text-sm leading-none">Grid</p>
        </button>
      </div>
      <section className="w-fit mx-auto">
        <div
          className={
            flexType === "flex-col"
              ? `grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-y-4 gap-x-4`
              : `grid grid-cols-1 gap-y-4 gap-x-4`
          }
        >
          {productArray.map((product) => (
            <ListCard
              flexType={flexType}
              productData={product}
              key={product._id}
            ></ListCard>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductGrid;
