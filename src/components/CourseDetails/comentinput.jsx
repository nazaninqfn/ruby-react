import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button4 } from "../as/rigester/buttons";
import { Lable } from "../LandingComponents/support/support.style";
import Commentformtext from "./commentfomtext";

const Commentinput = (props) => {
  const initialValues = {
    comment: "",
  };
  const validationSchema = Yup.object({
    comment: Yup.string().required("نظر خود را وارد کنید!"),
  });
  const onSubmit = (values) => {
    props.onComment(values);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <div className="container">
              <div className="row">
                <div className="col-xl-12  ">
                  <label className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-2 ms-3 me-2 ">
                    {" "}
                  </label>

                  <Lable>متن پیام شما</Lable>
                  <Form>
                    <>
                      <label htmlFor="username"></label>
                      <div>
                        {formik.touched.username && formik.errors.username ? (
                          <div className="text-danger">
                            {formik.errors.username}
                          </div>
                        ) : null}
                      </div>
                    </>

                    <Commentformtext
                      control="textarea"
                      type="textarea"
                      rows="8"
                      cols="100"
                      className="form-control"
                      name="comment"
                      placeholder="نظر خود را وارد کنید ..."
                    />
                    <Button4
                      className="mt-2"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      ثبت نظر
                    </Button4>
                  </Form>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default Commentinput;
