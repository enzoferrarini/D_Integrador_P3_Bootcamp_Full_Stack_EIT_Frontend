import React, { useEffect, useState } from "react";
import FormLayout from "../layout/FormLayout";
import { postComments } from "../util/api";
import Comments from "../components/Comments";
import { getComments } from "../util/api.js";
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
  const [commentsList, setCommentsList] = useState([]);

  const fetchComments = () => {
    getComments()
      .then((data) => setCommentsList(data.comments))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchComments();
  }, []);

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
          callBack={fetchComments}
          labelSubmit="Enviar Comentarios"
          msgOK="Mensaje enviado correctamente..."
          initialState={INITIAL_STATE}
        />
      </div>
      <div className="form__container">
        <Comments commentsList={commentsList} />
      </div>
    </section>
  );
}

export default Contact;
