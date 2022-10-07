import { Link } from "react-router-dom";

// const filterCat = (e) => {
//   e.preventDefault();

//   const { value } = e.target;

//   // const data = productArray.map((element) => {
//   //   return element.pcategory.filter((e) => e.includes(value));
//   // });
//   const data = productArray.filter((e) => e.pcategory.includes(value));
//   setProductArray(data);
//   console.log("data in filter", data);
// };
const FilterTab = () => {
  return (
    <div class="w-60 h-full shadow-md bg-white px-1 absolute">
      <ul class="relative">
        <li class="relative">
          <Link
            to="/homewellness"
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Sidenav link 1
          </Link>
        </li>
        <li class="relative">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Sidenav link 2
          </a>
        </li>
        <li class="relative">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Sidenav link 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FilterTab;
