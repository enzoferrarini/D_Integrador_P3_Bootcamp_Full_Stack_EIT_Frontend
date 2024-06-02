import React from "react";
import { Link } from "react-router-dom";

function Form({ children, onSubmit, labelButton, loading }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="form__content">{children}</div>

      <div className="btn__formContainer">
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : labelButton}
        </button>
        <button className=" btn__danger" disabled={loading}>
          <Link className="link__decoration" to={"/"}>
            Cancelar
          </Link>
        </button>
      </div>
    </form>
  );
}

export default Form;
