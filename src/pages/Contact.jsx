import React from "react";
import FormLayout from "../layout/FormLayout";
import { postComments } from "../util/api";

import {
  validateName,
  validateMail,
  validateComentarios,
} from "../util/sendComments";

const INITIAL_STATE = {
  name: "",
  mail: "",
  comment: "",
};

function Contact() {
  const inputProps = {
    name: {
      inputLabel: "Nombre (*)",
      placeholder: "Ingrese nombre y apellido",
      validation: validateName,
    },
    mail: {
      inputLabel: "E-mail (*)",
      placeholder: "Ingrese su email",
      validation: validateMail,
    },
    comment: {
      inputLabel: "Comentarios (*)",
      placeholder: "Ingrese comentarios",
      inputType: "textarea",
      validation: validateComentarios,
    },
  };

  return (
    <section>
      <div className="form__container">
        <FormLayout
          title="Contacto"
          inputProps={inputProps}
          onSubmit={postComments}
          labelSubmit="Enviar Comentarios"
          msgOK="Mensaje enviado correctamente..."
          initialState={INITIAL_STATE}
        />
      </div>
    </section>
  );
}

export default Contact;
