const PosProductCard = (props) => {
  const { item, idx, addOrderHandler } = props;
  return (
    <div
      key={idx}
      className="px-3 py-3 flex flex-col border border-gray-200 rounded-md h-42 justify-between"
      data-item={item._id}
      onClick={(event) => {
        addOrderHandler(event.currentTarget.getAttribute("data-item"));
      }}
    >
      <div>
        <div className="font-bold text-gray-800">{item.pname}</div>
        <span className="font-light text-sm text-gray-400">
          {item.sizes[0]?.name}
        </span>
        <br></br>
        <span className="font-light text-sm text-gray-400">
          {item.colors[0]?.name}
        </span>
      </div>
      <div className="flex flex-row justify-between items-center">
        <span className="self-end font-bold text-lg text-yellow-500">
          {`₹ ${item.pprice}`}
        </span>
        <img
          src={item.image[0].url}
          className="h-14 w-14 object-cover rounded-md"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default PosProductCard;
