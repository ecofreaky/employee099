import { useEffect, useState } from "react";
import { ProductApi } from "../../utils/axios";
import PosCurrentProductCard from "./pos-current-product-card";
import PosProductCard from "./pos-product-card";
import PosSearchBox from "./pos-search-box";

const Pos = () => {
  const [products, setProducts] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchField, setSearchField] = useState("");
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    const newFilterProducts = products.filter((product) =>
      product.pname.toLowerCase().includes(searchField)
    );
    setFilterProduct(newFilterProducts);
  }, [searchField, products]);

  useEffect(() => {
    let finalArray = [...products];

    if (categoryFilter !== "all") {
      console.log(categoryFilter);
      finalArray = finalArray.filter((product) =>
        product.pcategory.includes(categoryFilter)
      );
      console.log(finalArray);
    }
    setFilterProduct(finalArray);
  }, [categoryFilter]);

  const addCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const getProduct = async () => {
    try {
      const { data } = await ProductApi.fetchProduct();
      setProducts(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const addOrderHandler = (productToAdd) => {
    let currentItem = [...currentOrder];

    let checkIfContain = currentItem.find((item) => item._id === productToAdd);

    const findObj = products.find((item) => item._id === productToAdd);

    if (checkIfContain) {
      console.log("increment quantity");
      currentItem = currentItem.map((item) =>
        item._id === productToAdd
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCurrentOrder(currentItem);
    } else {
      findObj["quantity"] = 1;
      currentItem.push(findObj);
      setCurrentOrder(currentItem);
    }
  };

  const removeOrderHandler = (productToRemove) => {
    // find item in currentOrder
    let newArray = [...currentOrder];

    const existingItem = currentOrder.find(
      (item) => item._id === productToRemove
    );

    if (existingItem.quantity === 1) {
      console.log("remove item");
      newArray = newArray.filter((item) => item._id !== productToRemove);
      setCurrentOrder(newArray);
    } else {
      newArray = newArray.map((item) =>
        item._id === productToRemove
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCurrentOrder(newArray);
    }
  };

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  let subTotal = 0;
  let total = 0;

  return (
    <div className="container mx-auto px-5 bg-white">
      <div className="flex lg:flex-row flex-col-reverse shadow-lg">
        {/* <!-- left section --> */}
        <div className="w-full lg:w-3/5 min-h-screen shadow-lg">
          {/* <!-- header --> */}
          <div className="flex flex-row justify-between items-center px-5 mt-5 gap-4">
            <div className="mb-2 xl:w-96">
              <div className="input-group relative flex items-stretch w-full mb-4">
                <PosSearchBox onSearchHandler={onSearchChange} />
              </div>
            </div>

            <div className="mb-6 w-60">
              <select
                className="form-select appearance-none
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                value={categoryFilter}
                onChange={(event) => {
                  addCategoryFilter(event.target.value);
                }}
              >
                <option value="all">All Categories</option>
                <option value="homewellness">Homewellness</option>
                <option value="personalcare">Personalcare</option>
                <option value="fashion">Fashion</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
          </div>
          {/* <!-- end header --> */}
          {/* <!-- categories --> */}
          {/* <div class="mt-5 flex flex-row px-5">
            <span class="px-5 py-1 bg-yellow-500 rounded-2xl text-white text-sm mr-4">
              All items
            </span>
            <span class="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
              Food
            </span>
            <span class="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
              Cold Drinks
            </span>
            <span class="px-5 py-1 rounded-2xl text-sm font-semibold mr-4">
              Hot Drinks
            </span>
          </div> */}
          {/* <!-- end categories --> */}
          {/* <!-- products --> */}
          <div className="grid grid-cols-3 gap-4 px-5 mt-5 overflow-y-auto cursor-pointer">
            {filterProduct.map((item, idx) => (
              <PosProductCard
                item={item}
                idx={idx}
                addOrderHandler={addOrderHandler}
              />
            ))}
          </div>
          {/* <!-- end products --> */}
        </div>
        {/* <!-- end left section --> */}

        {/* <!-- right section --> */}
        <div className="w-full lg:w-2/5">
          {/* <!-- header --> */}
          <div className="flex flex-row items-center justify-between px-5 mt-5">
            <div className="font-bold text-xl">Current Order</div>
            <div className="font-semibold">
              <button
                type="button"
                className="px-4 py-2 
                      rounded-md 
                      bg-red-100 
                      text-red-500
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      shadow-md
                      transition
                      duration-150
                      ease-in-out"
                data-bs-toggle="modal"
                data-bs-target="#shippingModal"
              >
                Shipping Address
              </button>
            </div>
          </div>
          {/* <!-- end header --> */}
          {/* <!-- order list --> */}
          <div className="px-5 py-4 mt-5 overflow-y-auto h-2/4">
            {currentOrder.map((item, idx) => {
              subTotal = subTotal + item.pprice * item.quantity;
              total = subTotal;
              return (
                <PosCurrentProductCard
                  item={item}
                  idx={idx}
                  addOrderHandler={addOrderHandler}
                  removeOrderHandler={removeOrderHandler}
                />
              );
            })}
          </div>
          {/* <!-- end order list --> */}
          {/* <!-- totalItems --> */}
          <div className="px-5 mt-5">
            <div className="py-4 rounded-md shadow-lg">
              <div className=" px-4 flex justify-between ">
                <span className="font-semibold text-sm">Subtotal</span>
                <span className="font-bold">{`₹${subTotal}`}</span>
              </div>
              <div className=" px-4 flex justify-between ">
                <span className="font-semibold text-sm">Discount</span>
                <span className="font-bold">- ₹0.00</span>
              </div>
              <div className=" px-4 flex justify-between ">
                <span className="font-semibold text-sm">Sales Tax</span>
                <span className="font-bold">₹2.25</span>
              </div>
              <div className="border-t-2 mt-3 py-2 px-4 flex items-center justify-between">
                <span className="font-semibold text-2xl">Total</span>
                <span className="font-bold text-2xl">₹{total}</span>
              </div>
            </div>
          </div>
          {/* <!-- end total --> */}
          {/* <!-- cash --> */}
          {/* <div className="px-5 mt-5">
            <div className="rounded-md shadow-lg px-4 py-4">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="uppercase text-xs font-semibold">
                    cashless credit
                  </span>
                  <span className="text-xl font-bold text-yellow-500">
                    $32.50
                  </span>
                  <span className=" text-xs text-gray-400 ">Available</span>
                </div>
                <div className="px-4 py-3 bg-gray-300 text-gray-800 rounded-md font-bold">
                  {" "}
                  Cancel
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- end cash --> */}
          {/* <!-- button pay--> */}
          <div className="px-5 mt-5">
            <div className="px-4 py-4 rounded-md shadow-lg text-center bg-yellow-500 text-white font-semibold">
              Place Order
            </div>
          </div>
          {/* <!-- end button pay --> */}
        </div>
        {/* <!-- end right section --> */}
      </div>
    </div>
  );
};

export default Pos;
