const PosSearchBox = (props) => {
  const { onSearchHandler } = props;
  return (
    <>
      <input
        type="search"
        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon3"
        onChange={onSearchHandler}
      ></input>
    </>
  );
};

export default PosSearchBox;
