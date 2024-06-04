import React, { useState } from "react";
import Counter from "./Counter";
import { transformNumberToFE } from "../util/validations.js";

const ProductCard = ({ p }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // setLoading(false);
  };

  return (
    <>
      <div className="card">
        <div className="header__card">
          {loading && (
            <img
              src="/img/loading.gif"
              alt="Cargando..."
              className="loading-gif"
            />
          )}
          <img
            src={p.imgUrl}
            alt={`Imagen ${p.imgUrl}`}
            onLoad={handleImageLoad}
            style={{ display: loading ? "none" : "block" }}
          />
        </div>
        <div className="body__card">
          <p className="titulo__card">{p.name}</p>
          <p className="desc__card">
            {p.shortDesc} <div className="badge__stock">stock: {p.stock}</div>
            {p.delivery ? <div className="delivery">envío gratis</div> : null}
          </p>
          <p className="card__price">${transformNumberToFE(p.price)}</p>
        </div>
        <div className="footer__card">
          <Counter p={p} />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
