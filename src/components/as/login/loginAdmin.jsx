import React from "react";
// import { Formik, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { Button, Button2 } from "../rigester/buttons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Container, Content, GlobalStyle } from "../form/formBack";
import { Design1 } from "../../LandingComponents/herosection/herosection.style";
import "../rigester/rigesterresponsive.css";
import "./loginresponsive.css";
import FormNavbar from "../../header/formnavbar";

import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { useFormik } from "formik";
import { Loginadmin } from "../../../core/loginadmin/loginadmin";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
}) ;

const validate = (values) => {
  let errors = {};
  if (!values.password) {
    errors.password = "پسوورد را وارد کنید";
  } else if (values.password.length < 8) {
    errors.password = "8کاراکتر نیاز است";
  } else if (values.password.length > 14) {
    errors.password = "ورودی شما از حداکثر طول بیشتر است";
  }

  if (!values.email) {
    errors.email = "ایمیل را وارد کنید";
  } else if (
    !/^\w(\w|\d|_|-|\.){0,20}@(\d|\w){1,20}(\.\w{2,4}){1,2}$/i.test(
      values.email
    )
  ) {
    errors.email = "آدرس  نامعتبر است";
  }

  return errors;
};



const LoginAdmin = () => {
  const Navigate=useNavigate();
  
  const onSubmit = async(values) => {
    let result = await Loginadmin(values);
    
      if(result){
        toast("عملیات با موفقیت ثبت شد")
        Navigate("/");
        }
        else{
          toast.error("ایمیل و رمز عبور اشتباه است")

        }
    };
  


  const initialValues = {
    password: "",
    email: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <ToastContainer transition={bounce}/>
      
      <Container>
        <GlobalStyle whiteColor />
        <FormNavbar />
        <Content>
          <form className="container" onSubmit={formik.handleSubmit}>
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-6 py-4 cardformp ">
                <h3 className="d-flex justify-content-center my-3">
                  ورود ادمین
                </h3>

                <label className="d-block m-2 col-12 mb-5">
                  <h6> ایمیل</h6>

                  <input
                    type="email"
                    name="email"
                    className="col-md-11 col-11 mb-1"
                    placeholder="ایمیل"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    autoComplete="off"
                  />
                  <div>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger position-absolute">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </label>

                <label className="d-block m-2 col-12 mb-5">
                  <h6> پسوورد </h6>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="col-md-11 col-11 mb-2"
                    placeholder="رمز ورود"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  <div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-danger position-absolute">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                </label>
                <div className="mb-5">
                  <Link to="/forget" className="link-primary">
                    {" "}
                    رمز عبورم را فراموش کردم{" "}
                  </Link>
                </div>
                <div className="d-flex justify-content-center" >
                  <Button type="submit" className="m-2 ">
                    ورود
                  </Button>

                  <Link to="/rigester" className="link-light">
                    <Button2 type="buttun" className="m-2 ">
                      ثبت نام
                    </Button2>
                  </Link>
                </div>
                

                
              </div>
              <div className="col-md-6 d-flex justify-content-center loginimgn">
                {/* <Design1
                          className="loginimgn"
                          src={"../image/login.jpg"}
                        ></Design1> */}
                <Design1
                  className="loginimgn"
                  src={"../image/animation_640_l8byy3gv.gif"}
                ></Design1>
              </div>
            </div>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default LoginAdmin;
