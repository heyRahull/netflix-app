export const checkValidateData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  let isNameValid = true;
  if (name != null) {
    isNameValid = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name.value);
  }
  if (!isNameValid) return "Name is not Valid";
  if (!isEmailValid) return "Email ID is not Valid.";
  if (!isPasswordValid) return "Password is not valid.";

  return null;
};
