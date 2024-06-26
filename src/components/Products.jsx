import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import { ProductsContext } from "../context/ProductsContext.jsx";
import { getProducts } from "../util/api.js";

const Productos = () => {
  const { products, loadingProducts, setProducts } =
    useContext(ProductsContext);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, [setProducts]);

  return (
    <>
      <div className="destacados">
        {loadingProducts ? (
          <div>
            <h1 className="text__animation">Cargando Productos</h1>
            <h1 className="text__animation">Esta operación puede tardar algunos segundos...</h1>
          </div>
        ) : (
          <>
            {products.map((product) => (
              <ProductCard key={product._id} p={product} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Productos;
