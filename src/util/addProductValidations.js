import {
  verificarNoVacio,
  verificarCaracteresAlfabeticos,
  validarLongitudCadena,
  validarNumeroDecimal,
  validarNumeroEnteroPositivo,
} from "./validations";

export const validateName = (string) => {
  let msg = "";
  let valid = true;
  if (verificarNoVacio(string)) {
    if (verificarCaracteresAlfabeticosNumericos(string)) {
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

export const validatePrice = (string) => {
  let msg = "";
  let valid = true;

  if (verificarNoVacio(string)) {
    if (validarNumeroDecimal(string)) {
      msg = "";
      valid = true;
    } else {
      msg = "Solo se permiten Valores Númericos (123; 123.123,00)";
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

export const validateStock = (string) => {
  let msg = "";
  let valid = true;

  if (verificarNoVacio(string)) {
    if (validarNumeroEnteroPositivo(string)) {
      msg = "";
      valid = true;
    } else {
      msg = "Solo se permiten Valores Enteros Positivos mayores que 0";
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

export const validateMarca = (string) => {
  let msg = "";
  let valid = true;

  if (verificarNoVacio(string)) {
    if (verificarCaracteresAlfabeticos(string)) {
      if (validarLongitudCadena(string, 2, 20)) {
        msg = "";
        valid = true;
      } else {
        msg = "Mínimo 2 caracteres y Máximo 20";
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

export const validateDescCorta = (string) => {
  let msg = "";
  let valid = true;
  if (verificarNoVacio(string)) {
    if (validarLongitudCadena(string, 2, 35)) {
      msg = "";
      valid = true;
    } else {
      msg = "Mínimo 2 caracteres y Máximo 35";
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

export const validateCategoria = (string) => {
  let msg = "";
  let valid = true;
  if (verificarNoVacio(string)) {
    if (verificarCaracteresAlfabeticos(string)) {
      if (validarLongitudCadena(string, 2, 20)) {
        msg = "";
        valid = true;
      } else {
        msg = "Mínimo 2 caracteres y Máximo 20";
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

export const validateEdadDesde = (string) => {
  let msg = "";
  let valid = true;

  if (verificarNoVacio(string)) {
    if (validarNumeroEnteroPositivo(string)) {
      msg = "";
      valid = true;
    } else {
      msg = "Solo se permiten Valores Enteros Positivos mayores que 0";
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

export const validateEdadHasta = (string) => {
  let msg = "";
  let valid = true;

  if (verificarNoVacio(string)) {
    if (validarNumeroEnteroPositivo(string)) {
      msg = "";
      valid = true;
    } else {
      msg = "Solo se permiten Valores Enteros Positivos mayores que 0";
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

export const validateFileSelection = (obj) => {
  let msg = "";
  let valid = true;
  if (obj) {
    msg = "";
    valid = true;
  } else {
    msg = "Debe seleccionar un archivo";
    valid = false;
  }

  return {
    msg,
    valid,
  };
};
