import React, { useEffect, useState } from "react";
import { CartContext } from "./CartContext.jsx";
import { editCart, getCart, postCart } from "../util/api.js";

function CartProvider({ children }) {
  const [idCart, setIdCart] = useState(null);
  const [productCartList, setProductCartList] = useState([]);

  useEffect(() => {
    const storedIdCart = localStorage.getItem("idCart-store");
    if (storedIdCart) {
      getCart(storedIdCart).then(({ cart }) => {
        setProductCartList(cart.items);
        setIdCart(storedIdCart);
      });
    }
  }, []);

  const checkOut = async () => {
    if (localStorage.getItem("idCart-store"))
      localStorage.removeItem("idCart-store");

    setProductCartList([]);
    setIdCart(null);
  };

  const addProductToCartList = async (aProduct, countProduct) => {
    const data = {
      countProduct,
      product: aProduct._id,
    };
    const productSearchIndex = productCartList.findIndex(
      (product) => product.product._id === aProduct._id
    );

    if (productSearchIndex !== -1) {
      const newCart = productCartList.map((pro) =>
        pro.product._id === data.product ? data : pro
      );
      await editCart(idCart, newCart).then(({ cart }) => {
        setProductCartList(cart.items);
      });
    } else {
      if (!idCart) {
        await postCart([data]).then(({ cart }) => {
          localStorage.setItem("idCart-store", cart._id);
          setIdCart(cart._id);
          setProductCartList(cart.items);
        });
      } else {
        const newCart = [...productCartList, data];
        await editCart(idCart, newCart).then(({ cart }) => {
          setProductCartList(cart.items);
        });
      }
    }

    return true;
  };

  const removeProductToCartList = async (aProduct, countProduct) => {
    const productFinded = productCartList.find(
      (pro) => pro.product._id === aProduct._id
    );

    if (productFinded?.countProduct > 1) {
      const data = {
        countProduct,
        product: aProduct._id,
      };

      const newCart = productCartList.map((pro) =>
        pro.product._id === aProduct._id ? data : pro
      );

      await editCart(idCart, newCart).then(({ cart }) =>
        setProductCartList(cart.items)
      );
    } else {
      const newCart = productCartList.filter(
        (pro) => pro.product._id !== aProduct._id
      );
      await editCart(idCart, newCart).then(({ cart }) =>
        setProductCartList(cart.items)
      );
    }

    return true;
  };

  return (
    <CartContext.Provider
      value={{
        productCartList,
        addProductToCartList,
        removeProductToCartList,
        checkOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
