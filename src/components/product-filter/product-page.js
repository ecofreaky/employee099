import React, { useState, useEffect } from "react";
import { ProductApi } from "../../utils/axios";
import GridCard from "./GridCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [colorsFilter, setColorsFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState("all");

  const addOrRemoveColor = (color) => {
    let arr = [...colorsFilter];

    let checkIfContain = arr.includes(color.toLowerCase());
    // console.log(checkIfContain);
    if (!checkIfContain) {
      arr.push(color.toLowerCase());
      setColorsFilter(arr);
    } else {
      arr = arr.filter((c) => c !== color.toLowerCase());
      setColorsFilter(arr);
    }
  };
  console.log(colorsFilter);

  const filterProducts = () => {
    let finalProducts = [...products];

    if (categoryFilter !== "all") {
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

    if (sizeFilter !== "all") {
      finalProducts = finalProducts.filter((product) => {
        if (product.sizes.length > 0) {
          return product.sizes[0].name.toLowerCase().includes(sizeFilter);
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
      setProducts(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  //   for( let key of products ){
  //     for ( let color of key.colors ){
  //         console.log(color.name);
  //     }
  //   }
  //   console.log(products[0]);
  return (
    <>
      <div className="flex justify-end items-center w-full px-8 py-6">
        <select
          id="countries"
          className="bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg"
          value={categoryFilter}
          onChange={(event) => {
            setCategoryFilter(event.target.value);
          }}
        >
          <option value="all">Category</option>
          <option value="homewellness">Homewellness</option>
          <option value="personalcare">Personalcare</option>
          <option value="fashion">Fashion</option>
          <option value="accessories">Accessories</option>
        </select>

        <select
          id="countries"
          className="bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg"
          value={colorsFilter}
          onChange={(event) => {
            // setColorsFilter(event.target.value)
            addOrRemoveColor(event.target.value);
          }}
        >
          <option value="all">Colors</option>
          <option value="Emperor">Emperor</option>
          <option value="Anakiwa">Anakiwa</option>
          <option value="Black">Black</option>
          <option value="Aquamarine">Aquamarine</option>
          <option value="Red">Red</option>
        </select>

        <select
          id="countries"
          className="bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg"
          value={sizeFilter}
          onChange={(event) => {
            setSizeFilter(event.target.value);
            // addOrRemoveColor(event.target.value);
          }}
        >
          <option value="all">Sizes</option>
          <option value="5 inch">5 inch</option>
          <option value="default">Default</option>
          <option value="5 Litres">5 Litres</option>
        </select>
      </div>

      {/* <div>
        Selected Colors:
        <span>
          {colorsFilter.map((c) => (
            <b>{c}</b>
          ))}
        </span>
      </div> */}
      <section className="w-fit mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-y-4 gap-x-4">
          {filterProducts().map((item, key) => (
            <GridCard productData={item} key={key}></GridCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
