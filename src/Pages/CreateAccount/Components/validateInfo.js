export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username field is required.";
  } else if (values.username.length < 2) {
    errors.username = "Please write at least two letters.";
  }

  if (!values.email) {
    errors.email = " E-mail address field is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is incalid";
  }

  if (values.confirmEmail !== values.email) {
    errors.confirmEmail =
      " Your e-mail address and confirmed e-mail address must match.";
  } else if (!values.confirmEmail.trim()) {
    errors.confirmEmail = " Confirm e-mail address field is required.";
  }

  return errors;
}
