import React, { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import { getProducts } from "../util/api.js";

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [searchingProducts, setSearchingProducts] = useState(false);

  const fetchData = async (searchValue = "") => {
    try {
      const data = await getProducts(searchValue);
      setProducts(data.products);
      setLoadingProducts(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchProducts = (searchValue) => {
    setSearchingProducts(true);
    fetchData(searchValue);
    setTimeout(() => {
      setSearchingProducts(false);
    }, 1000);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        loadingProducts,
        searchingProducts,
        searchProducts,
        setProducts
      }}
    >
      {" "}
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
