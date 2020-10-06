import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    confirmEmail: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmmiting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const { username, email } = values;
    e.preventDefault();

    fetch("apiapiapiapiapiapaiipapi", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        name: username,
      }),
    });

    setErrors(validate(values));
    setIsSubmmiting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
