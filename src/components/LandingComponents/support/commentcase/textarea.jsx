import { ErrorMessage, Field } from "formik";
import react from "react";
import Errorvalidate2 from "./errorevalidate";

const Textarea = (props) => {
  const { name, placeholder, ...rest } = props;

  return (
    <>
      <Field
        className="textarea"
        as="textarea"
        rows="7"
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage name={name} component={Errorvalidate2} />
    </>
  );
};
export default Textarea;