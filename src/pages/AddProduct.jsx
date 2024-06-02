import React from "react";
import FormLayout from "../layout/FormLayout";
import { postProducts } from "../util/api";
import {
  validateName,
  validatePrice,
  validateStock,
  validateMarca,
  validateDescCorta,
  validateCategoria,
  validateEdadDesde,
  validateEdadHasta,
  validateFileSelection,
} from "../util/addProductValidations";

const INITIAL_STATE = {
  name: "",
  price: 0,
  stock: 0,
  ageFrom: 0,
  ageTo: 0,
  brand: "",
  delivery:false,
  category: "",
  shortDesc: "",
  longDesc: "",
  imgUrl:"",
};

function AddProduct() {
  const inputProps = {
    name: {
      inputLabel: "Nombre (*)",
      placeholder: "Ingrese nombre del producto",
      validation: validateName,
    },
    price: {
      inputLabel: "Precio (*)",
      inputType: "text",
      validation: validatePrice,
    },
    stock: {
      inputLabel: "Stock (*)",
      inputType: "number",
      validation: validateStock,
    },
    brand: {
      inputLabel: "Marca (*)",
      placeholder: "Ingrese marca",
      validation: validateMarca,
    },
    category: {
      inputLabel: "Categoria (*)",
      placeholder: "Ingrese categoría",
      validation: validateCategoria,
    },
    shortDesc: {
      inputLabel: "Descripción Corta (*)",
      placeholder: "Ingrese descripción corta",
      validation: validateDescCorta,
    },
    longDesc: {
      inputLabel: "Descripción Larga",
      inputType: "textarea",
      placeholder: "Ingrese descripción completa",
    },
    ageFrom: {
      inputLabel: "Edad Desde (*)",
      inputType: "number",
      validation: validateEdadDesde,
    },
    ageTo: {
      inputLabel: "Edad Hasta (*)",
      inputType: "number",
      validation: validateEdadHasta,
    },
    delivery: {
      inputLabel: "Envio Gratis",
      inputType: "checkbox",
    },
    image: {
      inputLabel: "Foto del producto",
      inputType: "file",
      accept: "image/*",
      validation: validateFileSelection,
    },
  };

  return (
    <section>
      <div className="form__container">
        <FormLayout
          title="Nuevo Producto"
          inputProps={inputProps}
          onSubmit={postProducts}
          labelSubmit="Agregar Producto"
          initialState={INITIAL_STATE}
          msgOK="Producto agregado correctamente..."
        />
      </div>
    </section>
  );
}

export default AddProduct;
