import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";
import { StickyContext } from "../context/StickyContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { transformNumberToFE } from "../util/validations.js";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const CartProducts = () => {
  const [checkingOut, setCheckingOut] = useState(false);
  const { productCartList, checkOut } = useContext(CartContext);
  const { openSticky } = useContext(StickyContext);

  const completeCheckOut = async () => {
    setCheckingOut(true);

    const total = productCartList.reduce((accumulator, product) => {
      return accumulator + product.countProduct;
    }, 0);

    await sleep(2000);
    checkOut();
    openSticky(
      "Compra finalizada exitosamente...",
      `Cantidad de Productos comprados: ${total}`
    );
    setCheckingOut(false);
  };

  return (
    <div className=" d__flex w__100 f__column">
      <table className="w__100">
        <thead>
          <tr>
            <th>Producto</th>
            <th>P. Unit.</th>
            <th>SubTotal</th>
            <th>Cant</th>
          </tr>
        </thead>
        <tbody>
          {productCartList.map((pro) => (
            <CartProduct key={pro.product._id} p={pro} />
          ))}
          <tr>
            <th colSpan={2} className="text__align--right" >Total</th>
            <th className="text__align--right">
              $
              {transformNumberToFE(
                productCartList.reduce(
                  (acc, pro) => acc + pro.product.price * pro.countProduct,
                  0
                )
              )}
            </th>
          </tr>
        </tbody>
      </table>

      <div>
        <button className="checkOut__Btn" onClick={() => completeCheckOut()}>
          <i className="fas fa-credit-card m__lr"></i>
          {checkingOut ? "Procesando Compra" : "Finalizar Compra"}
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
