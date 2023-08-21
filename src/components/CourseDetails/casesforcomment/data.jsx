import { ErrorMessage, Field } from "formik";
import react from "react";
import Errorvalidate from "./errorvalidate";
import DataView from "react-datepicker";

const Data = (props) => {
  const { name, placeholder, ...rest } = props;

  return (
    <>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DataView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              className="formik_input"
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={Errorvalidate} />
    </>
  );
};
export default Data;
