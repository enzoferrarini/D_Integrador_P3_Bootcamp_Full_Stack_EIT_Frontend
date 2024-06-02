import React from "react";
import Counter from "./Counter";
import { transformNumberToFE } from "../util/validations.js";

const CartProduct = ({ p }) => {
  return (
    <tr>
      <td className="b__bottom--grey">
        <div className="w__100 d__flex ai__c">
          <img src={p.product.imgUrl} alt={`Imagen ${p.product.name}`} />
          <div>{p.product.name}</div>
        </div>
      </td>
      <td className="b__bottom--grey text__align--right">
        ${transformNumberToFE(p.product.price)}
      </td>
      <td className="b__bottom--grey text__align--right">
        <strong>
          ${transformNumberToFE(p.countProduct * p.product.price)}
        </strong>
      </td>
      <td className="b__bottom--grey w__130">
        <Counter p={p.product} initialValue={p.countProduct} />
      </td>
    </tr>
  );
};

export default CartProduct;

// const CartProduct = ({ p }) => {
//   return (
//     <tr>
//       <td className="b__bottom--grey">
//         <div className="w__100 d__flex ai__c">
//           <img src={p.product.imgUrl} alt={`Imagen ${p.product.name}`} />
//           <div>{p.product.name}</div>
//         </div>
//       </td>
//       <td className="b__bottom--grey">${transformNumberToFE(p.product.price)}</td>
//       <td className="b__bottom--grey">
//         <strong>${transformNumberToFE(p.countProduct * p.product.price)}</strong>
//       </td>
//       <td className="b__bottom--grey w__130">
//         <Counter p={p.product} initialValue={p.countProduct} />
//       </td>
//     </tr>
//   );
// };
