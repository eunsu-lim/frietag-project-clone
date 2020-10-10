// export default function loginValidateInfo(values) {
//   let errors = {};

//   if (!values.email) {
//     errors.email = "Email required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Email address is invalid";
//   }
//   if (!values.password.trim()) {
//     errors.password = "Password required";
//   } else if (values.password.length < 6) {
//     errors.password = "Please write at least 6 letters";
//   }
//   if (values.comfirmPasseword !== values.password) {
//     errors.comfirmPasseword = "Password do not match";
//   } else if (!values.comfirmPasseword) {
//     errors.comfirmPasseword = "password required";
//   }

//   return errors;
// }

export default function loginValidateInfo(values) {
  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    values.email
  );
  const isPasswordValid = values.password.length > 4;
  const isComfirmPasswordValid = values.comfirmPasseword === values.password;

  return {
    email: isEmailValid
      ? ""
      : values.email
      ? "Email address is invalid"
      : "Email required",
    password: isPasswordValid
      ? ""
      : values.password
      ? "Please write at least 4 letters"
      : "Password required",
    comfirmPasseword: isComfirmPasswordValid
      ? ""
      : !values.comfirmPasseword
      ? "password required"
      : "Password do not match",
  };
}
