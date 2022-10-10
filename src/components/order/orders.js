import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrdersArray = [
  {
    _id: "631f34f95306efa02f96f3df",
    products: [
      {
        pcategory: [],
        image: [
          "https://ik.imagekit.io/de3sec/Pjgeyes/Green_Bamboo_Toothbrush_iqtznBW7y",
        ],
        selectedColor: [
          {
            _id: "631f27015306ef190d96f39d",
            name: "Aquamarine",
            color: "#69f8ae",
            selectedClass: "#f5f5f5",
            inStock: true,
          },
        ],
        pstatus: "pending",
        _id: "631f27015306eff6b696f397",
        vendor: "631ee2c45306ef480296f272",
        pname: "Green Bamboo Toothbrush",
        pprice: 70,
        quantity: 1,
        selectedSize: {
          _id: "631f27015306ef2dde96f39c",
          name: "5 inch",
          inStock: true,
        },
      },
      {
        pcategory: [],
        image: [
          "https://ik.imagekit.io/de3sec/Pjgeyes/Green_Bamboo_Toothbrush_iqtznBW7y",
        ],
        selectedColor: [
          {
            _id: "631f27015306ef190d96f39d",
            name: "Aquamarine",
            color: "#69f8ae",
            selectedClass: "#f5f5f5",
            inStock: true,
          },
        ],
        pstatus: "pending",
        _id: "631f27015306eff6b696f397",
        vendor: "631ee2c45306ef480296f272",
        pname: "Green Bamboo Toothbrush",
        pprice: 70,
        quantity: 2,
        selectedSize: {
          _id: "631f27015306ef2dde96f39c",
          name: "5 inch",
          inStock: true,
        },
      },
    ],
    address: {
      name: "aamna",
      email: "aamnasadiq29@gmail.com",
      city: "New Delhi",
      phone: "8707092808",
      pincode: "110030",
      state: "Delhi",
      address: "C224, Paryavarn Complex, near garden of 5 senses, Saket",
    },
    status: "Pending",
  },
  {
    _id: "63399839c8dcb102a0dea66f",
    products: [
      {
        pcategory: [],
        image: [
          "https://ik.imagekit.io/de3sec/Pzvv8ty/Charcoal_Bamboo_Toothbrush_BABr2mxw2",
        ],
        selectedColor: [
          {
            _id: "631f25ae5306ef9ef496f388",
            name: "Black",
            color: "#000000",
            selectedClass: "#f5f5f5",
            inStock: true,
          },
        ],
        pstatus: "pending",
        _id: "631f25ae5306ef024f96f382",
        vendor: "631ee2c45306ef480296f272",
        pname: "Charcoal Bamboo Toothbrush",
        pprice: 70,
        quantity: 1,
        selectedSize: {
          _id: "631f25ae5306ef1c4596f387",
          name: "5 inch",
          inStock: true,
        },
      },
    ],
    address: {
      name: "Aman Rajpal",
      email: "rajpalaman9@gmail.com",
      city: "Dumka",
      phone: "8569898702",
      pincode: "814101",
      state: "Jharkhand",
      address: "Chuha bagan, Sindh Hotel, Dumka",
    },
    status: "Pending",
  },
];

const Orders = () => {
  const [orderDetail, setOrderDetail] = useState([]);
  const [value, setvalue] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    navigate(`${value}`, { state: orderDetail });
  }, [orderDetail]);

  const onClickHandler = (event) => {
    const idx = event.target.value;
    setvalue(event.target.value);
    setOrderDetail(OrdersArray.filter((item) => item._id.includes(idx)));
  };

  return (
    <div>
      <h1 className="text-center my-8">Orders Page</h1>

      <ul className="text-center my-8">
        {OrdersArray.map((order, idx) => (
          <li key={idx} className="my-8">
            <button value={order._id} onClick={onClickHandler}>
              {order.products[0].pname}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
