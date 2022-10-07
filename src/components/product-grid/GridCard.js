import image from "../assets/product.webp";

const GridCard = () => {
  return (
    <div className="card bg-white text-gray-700 w-72 border overflow-hidden">
      <img className="px-5 pt-3 pb-2" src={image} alt=""></img>

      <div className="px-5 pb-4 flex flex-col gap-3">
        <span>Brand Name</span>
        <h2 className="product-title font-semibold text-xl overflow-ellipsis overflow-hidden whitespace-nowrap">
          <p>Product Name</p>
        </h2>

        <div>
          <span className="text-xl font-bold">₹ 4000</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">₹ 2000</span>
            <span className="discount-percent bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              save 20%
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button className="button-primary w-full px-6 py-2 rounded-md text-white font-medium tracking-wider transition bg-yellow-500/80">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
