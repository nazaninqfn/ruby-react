import React from "react";
import { Button, Button2 } from "./buttons";
import { Design1 } from "../../LandingComponents/herosection/herosection.style";
import { Container, Content, GlobalStyle } from "../form/formBack";
import { Link, useNavigate } from "react-router-dom";
import "./rigesterresponsive.css";
import FormNavbar from "../../header/formnavbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import { useFormik } from "formik";
import RegisterUser from "../../../core/services/api/userService.api";
import LoginUser from "../../../core/services/api/loginapi/login.Api.js";

const validate = (values) => {
  let errors = {};
  if (!values.password) {
    errors.password = "رمزعبور را وارد کنید";
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

  if (!values.fullName) {
    errors.fullName = "نام را وارد کنید";
  } else if (values.fullName.length > 30) {
    errors.fullName = "ورودی شما از حداکثر طول بیشتر است";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "شماره را وارد کنید";
  } else if (values.phoneNumber.length < 11) {
    errors.phoneNumber = "تعداد ارقام کافی نیست";
  } else if (values.phoneNumber.length > 11) {
    errors.phoneNumber = "ورودی شما از حداکثر طول بیشتر است";
  }
  if (!values.nationalId) {
    errors.nationalId = "کدملی را وارد کنید";
  } else if (values.nationalId.length < 10) {
    errors.nationalId = "تعداد ارقام کافی نیست";
  } else if (values.nationalId.length > 10) {
    errors.nationalId = "ورودی شما از حداکثر طول بیشتر است";
  }
  if (!values.birthDate) {
    errors.birthDate = "تاریخ تولد را وارد کنید";
  }

  return errors;
};

const RigesterForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const result = await RegisterUser(values);
    if (result) {
      toast("عملیات با موفقیت ثبت شد");
      navigate("/");
      console.log(result);
      const user = {
        email: values.email,
        password: values.password,
      };
      const login = await LoginUser(user);
      if (login) {
        navigate("/");
      }
    }
    console.log(values);
  };

  const initialValues = {
    fullName: "",
    password: "",
    email: "",
    phoneNumber: "",
    nationalId: "",
    birthDate: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <ToastContainer />
      <Container>
        <GlobalStyle whiteColor />
        <FormNavbar />

        <Content>
          <form className="container" onSubmit={formik.handleSubmit}>
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-6 py-4 cardformp ">
                <h3 className="d-flex justify-content-center my-3">
                  ثبت نام کاربر
                </h3>
                <label className="col-md-6 col-12 p-2 mb-4" htmlFor="text">
                  <h6>نام</h6>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="col-md-11 col-12 mb-1"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    onBlur={formik.handleBlur}
                    autoComplete="off"
                  />
                  <div>
                    {formik.touched.fullName && formik.errors.fullName ? (
                      <div className="text-danger position-absolute">
                        {formik.errors.fullName}
                      </div>
                    ) : null}
                  </div>
                </label>

                <label className="col-md-6 col-12 p-2  mb-4" htmlFor="text">
                  <h6>شماره تماس</h6>

                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="col-md-11 col-12 mb-1"
                    placeholder="09111234567"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    onBlur={formik.handleBlur}
                    autoComplete="off"
                  />
                  <div>
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      <div className="text-danger position-absolute">
                        {formik.errors.phoneNumber}
                      </div>
                    ) : null}
                  </div>
                </label>
                <label className="col-md-6 p-2 col-12  mb-4" htmlFor="text">
                  <h6>شماره ملی </h6>

                  <input
                    type="tel"
                    name="nationalId"
                    id="nationalId"
                    className="col-md-11 col-12 mb-1"
                    placeholder="234467777"
                    onChange={formik.handleChange}
                    value={formik.values.nationalId}
                    onBlur={formik.handleBlur}
                    autoComplete="off"
                  />
                  <div>
                    {formik.touched.nationalId && formik.errors.nationalId ? (
                      <div className="text-danger position-absolute">
                        {formik.errors.nationalId}
                      </div>
                    ) : null}
                  </div>
                </label>

                <label className="col-md-6 p-2 col-12  mb-4" htmlFor="date">
                  <h6> تاریخ تولد </h6>

                  <input
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    className="col-md-11 col-12 mb-1"
                    onChange={formik.handleChange}
                    value={formik.values.birthDate}
                    onBlur={formik.handleBlur}
                    autoComplete="off"
                  />
                  <div>
                    {formik.touched.birthDate && formik.errors.birthDate ? (
                      <div className="text-danger position-absolute">
                        {formik.errors.birthDate}
                      </div>
                    ) : null}
                  </div>
                </label>

                <label className="d-block  col-12 pes  mb-4" htmlFor="email">
                  <h6> ایمیل</h6>

                  <input
                    type="email"
                    name="email"
                    className="col-md-12 col-12 mb-1"
                    placeholder="ایمیل"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    autoComplete="off"
                  />
                  <div>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger position-absolute">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                </label>

                <label className="d-block  col-12 pes  mb-4" htmlFor="password">
                  <h6> رمز عبور</h6>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="col-md-12 col-12 mb-1"
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

                <div className="d-flex justify-content-center">
                  <Button type="submit" className="m-2 ">
                    ثبت نام
                  </Button>

                  <Link to="/login" className="link-light">
                    <Button2 type="submit" className="m-2 ">
                      ورود
                    </Button2>
                  </Link>
                </div>

                {/* <Recaptchas/> */}
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-center rigesterimgn">
                {/* <Design1
                          src={"../image/rigester.jpg"}
                          className="rigesterimgn"
                        ></Design1> */}
                <Design1
                  src={"../image/animation_640_l8by0dvo.gif"}
                  className="rigesterimgn"
                ></Design1>
              </div>
            </div>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default RigesterForm;
