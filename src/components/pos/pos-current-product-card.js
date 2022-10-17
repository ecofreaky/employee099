const PosCurrentProductCard = (props) => {
  const { item, idx, addOrderHandler, removeOrderHandler } = props;
  return (
    <div key={idx} className="flex flex-row justify-between items-center mb-4">
      <div className="flex flex-row items-center w-2/5">
        <img
          src={item.image[0].url}
          className="w-12 h-12 object-cover rounded-md"
          alt=""
        ></img>
        <span className="ml-4 font-semibold text-sm">{item.pname}</span>
      </div>
      <div className="w-32 flex justify-between">
        <span
          className="px-3 py-1 rounded-md bg-gray-300 cursor-pointer"
          data-item={item._id}
          onClick={(event) => {
            removeOrderHandler(event.currentTarget.getAttribute("data-item"));
          }}
        >
          -
        </span>
        <span className="font-semibold mx-4">{item.quantity}</span>
        <span
          className="px-3 py-1 rounded-md bg-gray-300 cursor-pointer"
          data-item={item._id}
          onClick={(event) => {
            addOrderHandler(event.currentTarget.getAttribute("data-item"));
          }}
        >
          +
        </span>
      </div>
      <div className="font-semibold text-lg w-16 text-center">
        {`₹ ${item.pprice * item.quantity}`}
      </div>
    </div>
  );
};

export default PosCurrentProductCard;
