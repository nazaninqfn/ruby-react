import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../bodypanel.css";
import "./edit.css";
import { Button, Button2, Button4 } from "../../../as/rigester/buttons";
import { useFormik } from "formik";


const loginSchema = Yup.object().shape({
name: Yup.string().max(100, "محتوا طولانی است").required("فیلد اجباری"),
lname: Yup.string().max(100, "محتوا طولانی است").required("فیلد اجباری"),
job: Yup.string().max(100, "محتوا طولانی است").required("فیلد اجباری"),
city: Yup.string().max(100, "محتوا طولانی است").required("فیلد اجباری"),
address: Yup.string().max(100, "محتوا طولانی است").required("فیلد اجباری"),
birthdate: Yup.string().required("فیلد اجباری"),
email: Yup.string().email("ایمیل نا‌معتبر").required("فیلد اجباری"),
});

class Editprofile extends React.Component {
handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    }, 400);
};

render() {
    return (
    <>
        <Formik
        initialValues={{
            fullName:"",
            email: "",
            phoneNumber: "",
            nationalId: "",
            birthDate: "",
        }}
        validationSchema={loginSchema}
        onSubmit={this.handleSubmit}
        >
        {({ isSubmitting }) => {
            return (
            <Form className="container">
                <div className="row d-flex justify-content-center my-4 ">
                <div className="col-xl-12  py-4  ">
                    <h3 className="d-flex justify-content-center my-3">
                    ثبت نام کاربر
                    </h3>

                    <div className="row d-flex justify-content-center">
                    <div className=" col-xl-4  col-lg-5  col-md-5 col-sm-5 col-5 position-relative  ">
                        <img
                        className=""
                        src="./image/undraw_female_avatar_w3jk-fococlipping-standard.png"
                        alt="profile"
                        style={{ width: "100%" }}
                        />

                        <label for="myfile" className="profileinput">
                        <img
                            className=""
                            src="./image/add-image.png"
                            alt="profile"
                            style={{ width: "100%" }}
                        />
                        <input
                            type="file"
                            id="myfile"
                            name="myfile"
                            className="inputfile"
                        ></input>
                        </label>
                        {/* <Button5 className="">
                                        <img className="" src="./image/add-image.png" alt="profile" style={{width:"100%"}}/>    
                                    </Button5> */}
                    </div>
                    </div>

                    <label className="col-xl-6 col-lg-6 col-md-6 col-sm-12 py-3 ps-4 pe-2 col-12">
                    <h6>نام</h6>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="col-xl-12 col-md-12 col-sm-12 col-11"
                    />
                    <ErrorMessage name="fullName" component="div" />
                    </label>

                    <label className="col-xl-6 col-lg-6 col-md-6 col-sm-12 py-3 ps-4 pe-2 col-12">
                    <h6>شماره تماس</h6>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="col-xl-12 col-md-12 col-sm-12 col-11"
                    />
                    <ErrorMessage name="phoneNumber" component="div" />
                    </label>

                    <label className="col-xl-6 col-lg-6 col-md-6 col-sm-12 py-3 ps-4 pe-2 col-12 ">
                    <h6> تاریخ تولد </h6>

                    <input
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        className="col-xl-12 col-md-12 col-sm-12 col-11"
                    />
                    <ErrorMessage name="birthdate" component="div" />
                    </label>

                    
                    <label className="col-xl-6 col-lg-6 col-md-6 py-3 col-sm-12 ps-4 pe-2 col-12">
                    <h6>شماره ملی </h6>
                    <input
                        type="text"
                        name="nationalId"
                        id="nationalId"
                        className="col-xl-12 col-md-12 col-sm-12 col-11"
                    />
                    <ErrorMessage name="nationalId" component="div" />
                    </label>

                    <label className="col-md-6  py-3 col-sm-12 ps-4 pe-2 col-12  ">
                    <h6> ایمیل</h6>

                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="col-xl-12 col-md-12 col-sm-12 col-11"
                        placeholder="example@gmail.com"
                    />
                    <ErrorMessage name="email" component="div" />
                    </label>

                    <label className=" col-md-6  py-3 col-sm-12 ps-4 pe-2 col-12" htmlFor="password">
                    <h6> تغییر رمز عبور</h6>

                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="col-xl-12 col-md-12 col-sm-12 col-11"
                        placeholder="رمز ورود"
                        
                    />
                    <div>
                        <div className="text-danger position-absolute"></div>
                    </div>

                    </label>
                    <Button2
                    type="buttun"
                    disabled={isSubmitting}
                    className=" mt-5 mx-4 float-start"
                    >
                    باز گردانی
                    </Button2>
                    <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-5 mx-2 float-start"
                    >
                    ثبت
                    </Button>

                    
                </div>
                </div>
            </Form>
            );
        }}
        </Formik>
    </>
    );
}
}

export default Editprofile;
