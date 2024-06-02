import { useState } from "react";

const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
  
    const handleInputChange = e => {
      if (e.target.type === "file") {
          setValues({
              ...values,
              [e.target.name]: e.target.files[0]
          })
      } else {
          setValues({
              ...values,
              [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
          })
      }
  }
  
    const validateForm = (inputProps) => {
      const newErrors = {};
      let isValid = true;
      Object.keys(inputProps).forEach((key) => {
        const value = values[key];
        const validation = inputProps[key].validation;
        if (validation) {
          const result = validation(value);
          if (!result.valid) {           
            newErrors[key] = result.msg;
            isValid = false;
          }
        }
      });
      setErrors(newErrors);
      return isValid;
    };
  
    const resetForm = () => {
      setValues(initialState);
      setErrors({});
    };
  
    return {
      values,
      handleInputChange,
      validateForm,
      resetForm,
      errors,
    };
  };
  
  export default useForm;