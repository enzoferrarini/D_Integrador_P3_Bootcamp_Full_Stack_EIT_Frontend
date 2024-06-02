import React, { useEffect } from "react";

function InputGroup({
  id,
  inputLabel,
  validateLocalForm,
  placeholder = null,
  inputType = "text",
  onChange = () => {},
  values,
  errors,
}) {
  useEffect(() => {
    validateLocalForm();
  }, [values]);

  return (
    <>
      <label htmlFor={id}>{inputLabel}</label>
      {inputType === "textarea" ? (
        <textarea
          id={id}
          name={id}
          type={inputType}
          onChange={(e) => onChange(e)}
          autoComplete="off"
          placeholder={
            inputType !== "checkbox" && placeholder ? placeholder : ""
          }
          className="m__height"
          value={values[id]}
        ></textarea>
      ) : (
        <input
          id={id}
          name={id}
          type={inputType}
          onChange={(e) => onChange(e)}
          autoComplete="off"
          placeholder={
            inputType !== "checkbox" && placeholder ? placeholder : ""
          }
          value={inputType !== "file" ? values[id] : ""}
        />
      )}

      {errors && errors[id] ? (
        <p className="erroMessage animation d__block" id={`idErrorMsg${id}`}>
          {errors[id]}
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default InputGroup;
