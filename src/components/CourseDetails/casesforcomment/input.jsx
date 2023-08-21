import { ErrorMessage, Field } from "formik";
import react from "react";
import Errorvalidate from "./errorvalidate";

const Input = (props) => {
  const { name, placeholder, autoFocus, ...rest } = props;

  return (
    <>
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...rest}
      />
      <ErrorMessage name={name} component={Errorvalidate} />
    </>
  );
};
export default Input;
