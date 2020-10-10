import { useState, useRef } from "react";

const useForm = (loginValidate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    comfirmPasseword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(loginValidate(values));
  };

  const valuesInput = useRef();

  const onReset = (e) => {
    e.preventDefault();
    setValues({
      email: "",
      password: "",
      comfirmPasseword: "",
    });
    valuesInput.current.focus();
  };

  return { handleChange, handleSubmit, values, errors, onReset, valuesInput };
};

export default useForm;
