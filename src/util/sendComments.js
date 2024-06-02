import {
  verificarNoVacio,
  verificarCaracteresAlfabeticos,
  validarLongitudCadena,
  validarEmail,
} from "./validations";

export const validateName = (string) => {
  let msg = "";
  let valid = true;
  if (verificarNoVacio(string)) {
    if (verificarCaracteresAlfabeticos(string)) {
      if (validarLongitudCadena(string, 2, 30)) {
        msg = "";
        valid = true;
      } else {
        msg = "Mínimo 2 caracteres y Máximo 30";
        valid = false;
      }
    } else {
      msg = "Solo se permiten caracteres alfabéticos";
      valid = false;
    }
  } else {
    msg = "Campo Obligatorio";
    valid = false;
  }

  return {
    msg,
    valid,
  };
};

export const validateMail = (string) => {
  let msg = "";
  let valid = true;
  if (verificarNoVacio(string)) {
    if (validarEmail(string)) {
      msg = "";
      valid = true;
    } else {
      msg = "E-mail inválido";
      valid = false;
    }
  } else {
    msg = "Campo Obligatorio";
    valid = false;
  }

  return {
    msg,
    valid,
  };
};

export const validateComentarios = (string) => {
  let msg = "";
  let valid = true;
  if (verificarNoVacio(string)) {
    if (validarLongitudCadena(string, 2, 255)) {
      msg = "";
      valid = true;
    } else {
      msg = "Mínimo 2 caracteres y Máximo 255";
      valid = false;
    }
  } else {
    msg = "Campo Obligatorio";
    valid = false;
  }
  return {
    msg,
    valid,
  };
};
