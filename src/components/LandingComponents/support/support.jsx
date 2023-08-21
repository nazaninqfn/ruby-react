import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Container, Div, Lable, Image, H, D } from "./support.style";
import "./support.css";

import * as Yup from "yup";
import { Button4 } from "../../as/rigester/buttons";
import { getItem } from "../../../core/services/storage/storage";
import { useParams } from "react-router-dom";
import Commenttext from "./commenttext";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import posttcoment from "../../../core/services/api/comment/support.api";

const Support = (props) => {
  const onSubmit = async (values) => {
    const resulst = await posttcoment(values);
    toast.success("با موفقیت ثبت شد");
  };
  const initialValues = {
    email: "",
    comment: "",
  };
  const loginSchema = Yup.object().shape({
    comment: Yup.string().required("!نظر خود را وارد کنید"),
    email: Yup.string().email("!ایمل اشتباه وارد شد").required("فیلد اجباری"),
  });

  // postcomments
  const { _id } = useParams();
  const submitcomments = (values) => {
    const islogin = getItem("token");
    const isstudent = JSON.parse(getItem("user"));
    const username = isstudent.fullName;
    const info = {
      postId: _id.toString(),
      email: values.email,
      username: username,
      comment: values.comment,
    };
    console.log(info);
    console.log("-------------------------");

    if (!islogin) {
      alert("its a toast");
    } else {
      //posttcoment(info);
    }
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Container className="container my-5 py-5 ">
              <H>پیشنهادات و انتقادات</H>
              <Div className="d-flex justify-content-center">
                <Form className="fsupport" data-aos="fade-up-left">
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

                  <label className="d-block my-2 me-2 col-12">
                    <h6> ایمیل</h6>
                    <Commenttext
                      control="input"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      className="form-control col-md-12 col-12"
                      autoFocus={false}
                    />
                  </label>

                  <label className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-2 ms-3 me-2 ">
                    <Lable>متن پیام شما</Lable>

                    <Commenttext
                      name="comment"
                      control="textarea"
                      type="textarea"
                      className="form-control"
                      rows="7"
                      cols="50"
                      placeholder="متن نظر ..."
                    />
                  </label>

                  <Button4 type="submit" disabled={!formik.isValid}>
                    ثبت نظر
                  </Button4>
                </Form>
                <D className="supportimg" data-aos="fade-up-right">
                  <Image src="../image/animation_640_l8bz1eic.gif"></Image>
                </D>
              </Div>
            </Container>
          );
        }}
      </Formik>
    </>
  );
};

export default Support;
