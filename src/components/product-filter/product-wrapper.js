export const ProductWrapper = ({ categories, filters, sort, search }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log(categories);
        const response = await publicRequest.get(
          !categories ? `products` : `products?cat=${categories}`
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [categories]);

  useEffect(() => {
    const getSearchProducts = async () => {
      if (search) {
        try {
          console.log(search);
          const response = await publicRequest.get(
            `products/search?keyword=${search}`
          );
          setProducts(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        return;
      }
    };
    getSearchProducts();
  }, [search]);

  useEffect(() => {
    categories &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, categories, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.pprice - b.pprice)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.pprice - a.pprice)
      );
    }
  }, [sort]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : categories ? (
        filteredProducts.map((item) => (
          <Product products={item} key={item._id}></Product>
        ))
      ) : (
        products.map((item) => (
          <Product products={item} key={item._id}></Product>
        ))
      )}
    </Container>
  );
};
