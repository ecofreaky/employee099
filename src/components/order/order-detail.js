import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const OrderDetails = () => {
  const location = useLocation();

  const [orderDetail, setOrderDetail] = useState(...location.state);
  const { _id, products, address } = orderDetail;
  let subTotal = 0;
  let total = subTotal;

  console.log(orderDetail);
  return (
    <div className="py-10 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ml-3 lg:ml-7">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          Order {_id}
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          21st March 2021 at 10:34 PM
        </p>
      </div>
      <div className="mt-5 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              Order’s Items
            </p>
            {/* Product Card */}
            {products.map((item, idx) => {
              subTotal = subTotal + item.pprice * item.quantity;
              total = subTotal;
              return (
                <div
                  key={idx}
                  className="border-b mt-4 md:mt-5 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
                >
                  <div className="pb-4 md:pb-6 w-full md:w-40">
                    <img
                      className="w-full hidden md:block"
                      src={item.image[0]}
                      alt="dress"
                    />
                    <img
                      className="w-full md:hidden object-contain h-60"
                      src={item.image[0]}
                      alt="dress"
                    />
                  </div>
                  <div className="border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                        {item.pname}
                      </h3>
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-300">Size: </span>
                          {item.selectedSize.name}
                        </p>
                        <p className="text-sm leading-none text-gray-800">
                          <span className="text-gray-300">Color: </span>{" "}
                          {item.selectedColor[0].name}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base xl:text-lg leading-6">
                        ₹ {item.pprice}
                      </p>
                      <p className="text-base xl:text-lg leading-6 text-gray-800">
                        X {item.quantity}
                      </p>
                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                        ₹ {item.pprice * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Product Card */}
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-3 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">
                    ₹ {subTotal}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">
                    Discount{" "}
                    <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                      STUDENT
                    </span>
                  </p>
                  <p className="text-base leading-4 text-gray-600">0%</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">Free</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  ₹{total}
                </p>
              </div>
            </div>
            <div className="flex flex-col px-4 py-3 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Delivery Address
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200   pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base font-medium leading-4 text-gray-800">
                    {address.name}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">
                    {address.address}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">
                    {address.city}, &nbsp; {address.state} - {address.pincode}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">
                    <span className="font-medium">Phone number: &nbsp;</span>{" "}
                    {address.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
