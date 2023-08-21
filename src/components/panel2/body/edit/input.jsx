import React from "react";
// import { Link } from "react-router-dom";
import "../../../as/rigester/rigesterresponsive.css";

// import {  ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useFormik } from "formik";


// import { Button, Button2 } from "../../../as/rigester/buttons";
// import { Container} from "../../../as/form/formBack";



// const validate = (values) => {
// let errors = {};
// if (!values.password) {
//     errors.password = "رمزعبور را وارد کنید";
// } else if (values.password.length < 8) {
//     errors.password = "8کاراکتر نیاز است";
// } else if (values.password.length > 14) {
//     errors.password = "ورودی شما از حداکثر طول بیشتر است";
// }

// if (!values.email) {
//     errors.email = "ایمیل را وارد کنید";
// } else if (
//     !/^\w(\w|\d|_|-|\.){0,20}@(\d|\w){1,20}(\.\w{2,4}){1,2}$/i.test(
//     values.email
//     )
// ) {
//     errors.email = "آدرس  نامعتبر است";
// }



// if (!values.fullName) {
//     errors.fullName = "نام را وارد کنید";
// } else if (values.fullName.length > 30) {
//     errors.fullName = "ورودی شما از حداکثر طول بیشتر است";
// }

// if (!values.phoneNumber) {
//     errors.phoneNumber = "شماره را وارد کنید";
// } else if (values.phoneNumber.length < 11) {
//     errors.phoneNumber = "تعداد ارقام کافی نیست";
// } else if (values.phoneNumber.length > 11) {
//     errors.phoneNumber = "ورودی شما از حداکثر طول بیشتر است";
// }
// if (!values.nationalId) {
//     errors.nationalId = "کدملی را وارد کنید";
// } else if (values.nationalId.length < 10) {
//     errors.nationalId = "تعداد ارقام کافی نیست";
// } else if (values.nationalId.length > 10) {
//     errors.nationalId = "ورودی شما از حداکثر طول بیشتر است";
// }
// if (!values.birthDate) {
//     errors.birthDate = "تاریخ تولد را وارد کنید";
// }

// return errors;
// };

const Input = ({type,_id,value,placeHolder,onInputChange}) => {

// const initialValues = {
//     profile: "",
//     fullName:"",
//     password: "",
//     email: "",
//     phoneNumber: "",
//     nationalId: "",
//     birthDate: "",
// };

// const formik = useFormik({
//     initialValues,
//     // validate,
// });

return (
    <>
    {/* <ToastContainer />
    <Container>
    
        
        <form className="container px-5" onSubmit={formik.handleSubmit}>
            <div className="row d-flex justify-content-center my-4"> */}
            

                {/* name */}
                <label
                className=""
                htmlFor={_id}
                >
                
                <input
                    type={type}
                    onChange={onInputChange}
                    value={value}
                    id={_id}
                    placeholder={placeHolder}
                    className="col-md-12 col-12 mb-1"
                    autoComplete="off"
                >
                    
                </input>
                {/* <div>
                    {formik.touched.fullName && formik.errors.fullName ? (
                    <div className="text-danger position-absolute">{formik.errors.fullName}</div>
                    ) : null}
                </div> */}


                </label>

            {/* </div>
        </form>
        
    </Container> */}
    </>
);
};

export default Input;

