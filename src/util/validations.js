//Función que verifica si cadena es vacia
export const verificarNoVacio = (cadena) => {
  //   if (cadena.trim() !== "") {
  if (String(cadena).trim() !== "") {
    return true;
  } else {
    return false;
  }
};

//Función que verifica que una cadena solo contanga
//caracteres alfabéticos y espacios
export const verificarCaracteresAlfabeticos = (cadena) => {
  const regex = new RegExp("^[a-zA-ZñÑ ]+$");
  return regex.test(cadena);
};

export const verificarCaracteresAlfabeticosNumericos = (cadena) => {
  const regex = new RegExp("^[0-9a-zA-ZñÑ ]+$");
  return regex.test(cadena);
};

//Función que verifica un valor entero (positivo negativo o cero)
export const validarNumeroEntero = (cadena) => {
  const regex = new RegExp("^-?d+$");
  return regex.test(cadena);
};

//Función que verifica un valor entero (positivo o cero)
export const validarNumeroEnteroPositivo = (cadena) => {
  const regex = new RegExp("^[1-9]([0-9])*$");
  return regex.test(cadena);
};

//Función que valida longitud minima y maxima de cadena
export const validarLongitudCadena = (cadena, minimo, maximo) => {
  const longitud = cadena.length;
  return longitud >= minimo && longitud <= maximo;
};

//Función que valida numeros decimales
export const validarNumeroDecimal = (numero) => {
  const regex = new RegExp(
    "^(([1-9]{1,3}(.[0-9]{3})*)|([0-9]+))(,[0-9]{1,2})?$"
  );
  // const regex = new RegExp("^[1-9]{1,3}(\.[1-9]{3})*(,[1-9]{1,2})?$");
  return regex.test(numero);
};

//Función que valida File Selected
export const fileSelected = (inputFile) => {
  if (inputFile.files[0]) return true;
  else return false;
};

//Función que valida email
export const validarEmail = (email) => {
  const regexEmail = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
  return regexEmail.test(email);
};

//Funciòn que convierte un numero con separador de miles (.) y separador
//de decimales(,), a un numero sin separador de miles pero con el (.)
//como separador de decimales. Para impactar en la BD mongoose.
export const transformNumberToDB = (input) => {
  const noThousandSeparator = input.replace(/\./g, "");
  const correctDecimalSeparator = noThousandSeparator.replace(/,/g, ".");
  const number = parseFloat(correctDecimalSeparator);
  return number;
};

//Funciòn que convierte un numero de BD para el frontend
//con separador de miles (.) y separador de decimales(,)
export const transformNumberToFE = (number) => {
  const parts = number.toFixed(2).toString().split(".");
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const decimalPart = parts[1] ? "," + parts[1] : "";
  return integerPart + decimalPart;
};
