// export default function validate(values) {
//   let errors = {};

//   if (!values.email) {
//     errors.email = "Email required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Eamil address is required";
//   }
//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length < 6) {
//     errors.password = "Please write at least 6 letters";
//   }
//   return errors;
// }

export default function validate({ email, password }) {
  const isEmailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  const isPwValid = password.length < 6;

  return {
    email: isEmailFormat
      ? ""
      : !!email
      ? "Email address is required"
      : "Email required",
    password: isPwValid ? "" : !email ? "Please write at least 6 letters" : "",
  };
}
