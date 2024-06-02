import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const { searchProducts, searchingProducts } = useContext(ProductsContext);
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    searchProducts(search);
  };

  return (
    <div className="search__header--container">
      {searchingProducts ? (
        <span className="blinking-label badge__stock">searching Products</span>
      ) : (
        <>
          <input
            placeholder="Buscar..."
            value={search}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default SearchComponent;
