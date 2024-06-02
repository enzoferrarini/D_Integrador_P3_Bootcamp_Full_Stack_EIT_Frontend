import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { StickyContext } from "../context/StickyContext";

const Counter = ({ p, initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  const { productCartList, addProductToCartList, removeProductToCartList } =
    useContext(CartContext);
  const [updateFlagAdd, setUpdateFlagAdd] = useState(false);
  const [updateFlagRm, setUpdateFlagRm] = useState(false);

  const { openSticky } = useContext(StickyContext);

  useEffect(() => {
    const product = productCartList.find(
      (product) => product.product._id === p._id
    );

    setCount(product?.countProduct || 0);
  }, [productCartList, p._id]);

  const addCount = async () => {
    setUpdateFlagAdd(true);
    setCount(count + 1);
    const flagFinished = await addProductToCartList(p, count + 1);
    setUpdateFlagAdd(!flagFinished);
    openSticky(
      "Producto agregado correctamente:",
      `${p.name} - Cantidad: ${count + 1}`
    );
  };

  const restCount = async () => {
    if (count > 0) {
      setUpdateFlagRm(true);
      setCount(count - 1);
      const flagFinished = await removeProductToCartList(p, count - 1);
      setUpdateFlagRm(!flagFinished);
    }
  };

  return (
    <div className="d__flex f__row ai__c jc__sb">
      <button onClick={() => restCount()} disabled={count === 0 || updateFlagRm}>
        -
      </button>
      <span className="p__lr">{count}</span>
      <button onClick={() => addCount()} disabled={updateFlagAdd}>
        +
      </button>
    </div>
  );
};

export default Counter;
