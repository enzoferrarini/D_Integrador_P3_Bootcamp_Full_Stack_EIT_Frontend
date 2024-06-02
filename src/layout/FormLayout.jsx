import React, { useContext, useState } from "react";
import Form from "../components/Form";
import InputGroup from "../components/InputGroup";
import useForm from "../hooks/useForm";
import { StickyContext } from "../context/StickyContext";

function FormLayout({
  title,
  inputProps,
  initialState,
  onSubmit,
  labelSubmit,
  msgOK,
}) {
  const { values, handleInputChange, validateForm, resetForm, errors } =
    useForm(initialState);
  const [loadingForm, setLoadingForm] = useState(false);
  const { openSticky } = useContext(StickyContext);
  const validateLocalForm = () => {
    return validateForm(inputProps);
  };

  return (
    <div className="form-layout__container">
      <Form
        onSubmit={() => {
          setLoadingForm(true);
          if (validateLocalForm()) {
            setLoadingForm(true);
            onSubmit(values)
              .then((data) => console.log(data))
              .catch((err) => console.error(err))
              .finally(() => {
                openSticky(msgOK);
                setLoadingForm(false);
                resetForm();
              });
          } else {
            setLoadingForm(false);
            console.log("Form validation failed", errors);
            console.log(
              "Form validation failed",
              JSON.stringify(errors).length
            );
          }
        }}
        labelButton={labelSubmit}
        loading={loadingForm}
      >
        <span className="form__title">{title}</span>
        {Object.entries(inputProps).map(([key, props]) => (
          <InputGroup
            key={key}
            id={key}
            onChange={handleInputChange}
            validateLocalForm={validateLocalForm}
            values={values}
            errors={errors}
            {...props}
          />
        ))}
      </Form>
    </div>
  );
}

export default FormLayout;
