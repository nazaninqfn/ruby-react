import React from "react";
// import { Formik, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { Button, Button2 } from "../rigester/buttons";
import { Link } from "react-router-dom";
import { Container, Content, GlobalStyle } from "../form/formBack";
import { Design1 } from "../../LandingComponents/herosection/herosection.style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";

import "./forgetresponsive.css";
import FormNavbar from "../../header/formnavbar";
import Forgetanimation from "./animation/forgetanimation";
// import Forgetanimation from "./animation/forgetanimation";

const notify = () => toast("ایمیل با موفقیت ثبت شد");

const validate = (values) => {
  let errors = {};
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

const onSubmit = (value) => {
  console.log(value);
};

const LoginForm = () => {
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
      <ToastContainer />
      <Container>
        <GlobalStyle whiteColor />
        <FormNavbar />
        <Content>
          <form className="container" onSubmit={formik.handleSubmit}>
            <div className="row d-flex justify-content-center my-4">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 py-4 forgetcard">
                <h3 className="d-flex justify-content-center my-3">
                  {" "}
                  فراموشی رمز عبور{" "}
                </h3>

                <label className="d-block  mt-5 col-12 mb-5 ">
                  <h6> ایمیل</h6>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="col-md-11 col-12 mb-1"
                    placeholder="example@gmail.com"
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

                <div className="d-flex justify-content-center" >
                <Button
                  type="submit"
                  // disabled={isSubmitting}
                  className="m-2 "
                  onClick={notify}
                >
                  ثبت ایمیل
                </Button>

                <Link to="/login" className="link-light">
                  <Button2
                    type="buttun"
                    // disabled={isSubmitting}
                    className="m-2 "
                  >
                    ورود کاربر
                  </Button2>
                </Link>
                </div>
                
              </div>
              <div className="HIl col-xl-6 col-lg-6 col-md-6 d-flex justify-content-center forgetimgn">
                {/* <Design1
                  className="forgetimgn"
                  src={"../image/forget.jpg"}
                ></Design1> */} <Forgetanimation/>
              </div>
            </div>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default LoginForm;

// import React from "react";
// import { Formik, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Button, Button2 } from "../rigester/buttons";

// const loginSchema = Yup.object().shape({

// email: Yup.string().email("ایمیل نا‌معتبر").required("فیلد اجباری")
// });

// class ForgetForm extends React.Component {
// handleSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     setSubmitting(false);
//     }, 400);
// };

// render() {
//     return (
//     <>
//         {/* <h2>فراموشی رمز عبور </h2> */}
//         <Formik
//         initialValues={{email: "",password: "" }}
//         validationSchema={loginSchema}
//         onSubmit={this.handleSubmit}
//         >
//         {({ isSubmitting }) => {
//             return (
//             <Form className="container">
//                 <div className="row  my-4">
//                     <div className="col-md-6">

//                     <div className="row"><h2>فراموشی رمز عبور </h2></div>

//                         <div className="row ">

//                             <label className="col-md-12 my-2">
//                                 <h6>  ایمیل</h6>
//                                 <input type="email" name="email" id="email"/>
//                                 <ErrorMessage name="email" component="div" />
//                             </label>

//                             <Button type="submit" disabled={isSubmitting} className="my-2">
//                             ثبت ایمیل
//                             </Button>

//                             <Button2 type="buttun" disabled={isSubmitting} className="m-2 ">
//                             ورود
//                             </Button2>
//                         </div>
//                     </div>
//                 </div>
//             </Form>
//             );
//         }}
//         </Formik>
//     </>
//     );
// }
// }

// export default ForgetForm;

// import React from "react";
// import { Formik, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Button, Button2 } from "../rigester/buttons";
// import { Link } from "react-router-dom";
// import { Container, Content, GlobalStyle } from "../form/formBack";
// import { Design1 } from "../../LandingComponents/herosection/herosection.style";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import "./forgetresponsive.css";
// import FormNavbar from "../../header/formnavbar";
// const loginSchema = Yup.object().shape({
//   password: Yup.string()
//     .min(6, "رمز کوتاه است")
//     .max(20, "رمز طولانی است")
//     .required("فیلد اجباری"),
//   email: Yup.string().email("ایمیل نا‌معتبر").required("فیلد اجباری"),
// });
// const notify = () => toast("ایمیل با موفقیت ثبت شد");

// class LoginForm extends React.Component {
//   handleSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//   };

//   render() {
//     return (
//       <>
//         <ToastContainer />
//         <Container>
//           <GlobalStyle whiteColor />
//           <FormNavbar />
//           <Content>
//             <Formik
//               initialValues={{
//                 name: "",
//                 tel: "",
//                 id: "",
//                 birthdate: "",
//                 email: "",
//                 password: "",
//               }}
//               validationSchema={loginSchema}
//               onSubmit={this.handleSubmit}
//             >
//               {({ isSubmitting }) => {
//                 return (
//                   <Form className="container">
//                     <div className="row d-flex justify-content-center my-4">
//                       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 py-4 forgetcard">
//                         <h3 className="d-flex justify-content-center my-3">
//                           {" "}
//                           فراموشی رمز عبور{" "}
//                         </h3>

//                         <label className="d-block  mt-5 col-12 ">
//                           <h6> ایمیل</h6>

//                           <input
//                             type="email"
//                             name="email"
//                             id="email"
//                             className="col-md-11 col-12"
//                             placeholder="example@gmail.com"
//                           />
//                           <ErrorMessage name="email" component="div" />
//                         </label>

//                         <Button
//                           type="submit"
//                           disabled={isSubmitting}
//                           className="my-5 "
//                           onClick={notify}
//                         >
//                           ثبت ایمیل
//                         </Button>

//                         <Link to="/login" className="link-light">
//                           <Button2
//                             type="buttun"
//                             disabled={isSubmitting}
//                             className="m-2 "
//                           >
//                             ورود کاربر
//                           </Button2>
//                         </Link>
//                       </div>
//                       <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-center forgetimgn">
//                         <Design1
//                           className="forgetimgn"
//                           src={"../image/forget.jpg"}
//                         ></Design1>
//                       </div>
//                     </div>
//                   </Form>
//                 );
//               }}
//             </Formik>
//           </Content>
//         </Container>
//       </>
//     );
//   }
// }

// export default LoginForm;
