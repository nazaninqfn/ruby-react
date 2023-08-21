import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import "../../../as/rigester/rigesterresponsive.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import http from "../../../../core/services/interceptor/interceptor";

import { Button, Button2, Button5 } from "../../../as/rigester/buttons";
import { Container } from "../../../as/form/formBack";
import LoginUser from "../../../../core/services/api/loginapi/login.Api.js";
import EditProfile from "../../../../core/services/api/editprofileapi/editprofile.api";
import { getItem, setItem } from "../../../../core/services/storage/storage";
import { useState } from "react";
import Input from "./input";
import "./edit.css";
import { UserContext } from "./../../../dashboardcontent/UserContext";
import { UploadImg } from "../../../../core/services/api/UploadImage/Upload";

const Url = process.env.REACT_APP_PUBLIC_API_URL;

const Editprofile = () => {
  const { user, setUser } = useContext(UserContext);
  // const user = JSON.parse(getItem("user"));
  const [email, setEmail] = useState(user.email);
  const [fullName, setFullname] = useState(user.fullName);
  const [phoneNumber, setphoneNumber] = useState(user.phoneNumber);
  const [birthDate, setbirthDate] = useState(user.birthDate);
  const [nationalId, setnationalId] = useState(user.nationalId);
  const [profile, setprofile] = useState(user.profile);

  const handlesubmit = async (e) => {
    e.preventDefault();

    let imageProfil = "";
    if (typeof profile !== "string") {
      imageProfil = await UploadImg(profile);
    }
    let obj = {
      email: email,
      fullName: fullName,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
      nationalId: nationalId,
      profile: imageProfil ? imageProfil : profile,
    };

    try {
      if (user.role === "student") {
        await http.put(`${Url}student/${user._id}`, obj);
        toast.success("تغییرات با موفقیت ثبت شد");
      }
    } catch (error) {
      toast.error("تغییرات اعمال نشد");
      console.log(error);

      return false;
    }

    const newObj = { ...user };

    newObj.fullName = fullName;
    newObj.email = email;
    newObj.phoneNumber = phoneNumber;
    newObj.birthDate = birthDate;
    newObj.nationalId = nationalId;
    newObj.profile = profile;

    setUser(newObj);
    setItem("user", JSON.stringify(newObj));
  };

  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const changeHandler = async (e) => {
    const profile = e.target.files[0];
    if (!profile.type.match(imageMimeType)) {
      return;
    }
    setprofile(profile);
  };

  return (
    <>
      <ToastContainer />
      <Container>
        <form className="container px-5" onSubmit={handlesubmit}>
          <div className="row d-flex justify-content-center my-4">
            <div className="col-xl-12  py-4 ">
              <h3 className="d-flex justify-content-center my-3">
                ویرایش پروفایل
              </h3>
              {/* profile */}

              <div className="row d-flex justify-content-center">
                <div className=" col-xl-4  col-lg-5  col-md-5 col-sm-5 col-5 position-relative  ">
                  {profile ? (
                    <div className="">
                      {
                        <img
                          src={profile}
                          alt="preview"
                          className="ImgEditPro"
                          style={{ width: "100%" }}
                        />
                      }
                    </div>
                  ) : (
                    <img
                      className=""
                      src="./image/undraw_female_avatar_w3jk-fococlipping-standard.png"
                      alt="profile"
                      style={{ width: "100%" }}
                    />
                  )}
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
                      accept=".png, .jpg, .jpeg"
                      onChange={changeHandler}
                      multiple
                      className="inputfile"
                    ></input>
                  </label>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                {/* name */}
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 py-3 ps-4 pe-2  d-inline-block size1">
                  <h6>نام</h6>

                  <Input
                    type="text"
                    label="نام"
                    _id="2"
                    onInputChange={(e) => setFullname(e.currentTarget.value)}
                    value={fullName}
                    placeHolder="نام"
                    autoComplete="off"
                  />
                </div>

                {/* tel */}
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 py-3 ps-4 pe-2 col-12 d-inline-block size1">
                  <h6>شماره تماس</h6>

                  <Input
                    type="text"
                    label="شماره تماس"
                    _id="3"
                    className="col-md-12 col-12 mb-1"
                    placeHolder="09111234567"
                    onInputChange={(e) => setphoneNumber(e.currentTarget.value)}
                    value={phoneNumber}
                    autoComplete="off"
                  />
                </div>

                {/* email */}
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 py-3 ps-4 pe-2 col-12  size1">
                  <h6 className="d-block"> ایمیل</h6>

                  <Input
                    type="email"
                    name="email"
                    className="col-md-12 col-12 mb-1"
                    placeHolder="ایمیل"
                    _id="6"
                    label="ایمیل"
                    onInputChange={(e) => setEmail(e.currentTarget.value)}
                    value={email}
                    autoComplete="off"
                  />
                </div>

                {/* id */}
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 py-3 ps-4 pe-2 col-12 size1 ">
                  <h6>شماره ملی </h6>

                  <Input
                    type="tel"
                    name="nationalId"
                    _id="5"
                    label="شماره ملی "
                    className="col-md-12 col-12 mb-1"
                    placeHolder="شماره ملی "
                    onInputChange={(e) => setnationalId(e.currentTarget.value)}
                    value={nationalId}
                    autoComplete="off"
                  />
                </div>

                {/* birthday */}
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 py-3 ps-4 pe-2 col-12 d-inline-block birthDate ">
                  <h6> تاریخ تولد </h6>

                  <Input
                    type="date"
                    name="birthDate"
                    _id="4"
                    label="تاریخ تولد "
                    placeHolder="تاریخ تولد "
                    className="col-md-12 col-12 mb-1"
                    onInputChange={(e) => setbirthDate(e.currentTarget.value)}
                    value={birthDate}
                    autoComplete="off"
                  />
                </div>
                <div className="row d-flex justify-content-center">
                  {/* submit */}
                  <Button
                    type="submit"
                    className="mx-4 mt-5 float-start"
                    disabled={
                      (user.fullName === fullName) &
                      (user.email === email) &
                      (user.phoneNumber === phoneNumber) &
                      (user.birthDate === birthDate) &
                      (user.nationalId === nationalId) &
                      (user.profile === profile)
                    }
                  >
                    ثبت
                  </Button>

                  <Button2 type="submit" className="mx-4 mt-5 float-start">
                    باز گردانی
                  </Button2>
                </div>
              </div>

              {/* <Recaptchas/> */}
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Editprofile;

// import React, { useContext } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import "../../../as/rigester/rigesterresponsive.css";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useFormik } from "formik";
// import http from "../../../../core/services/interceptor/interceptor";

// import { Button, Button2, Button5 } from "../../../as/rigester/buttons";
// import { Container } from "../../../as/form/formBack";
// import LoginUser from "../../../../core/services/api/loginapi/login.Api.js";
// import EditProfile from "../../../../core/services/api/editprofileapi/editprofile.api";
// import { getItem, setItem } from "../../../../core/services/storage/storage";
// import { useState } from "react";
// import Input from "./input";
// import "./edit.css";
// import { UserContext } from "./../../../dashboardcontent/UserContext";

// const Url = process.env.REACT_APP_PUBLIC_API_URL;

// const Editprofile = () => {
//   const { user, setUser } = useContext(UserContext);
//   // const user = JSON.parse(getItem("user"));
//   const [email, setEmail] = useState(user.email);
//   const [fullName, setFullname] = useState(user.fullName);
//   const [phoneNumber, setphoneNumber] = useState(user.phoneNumber);
//   const [birthDate, setbirthDate] = useState(user.birthDate);
//   const [nationalId, setnationalId] = useState(user.nationalId);
//   const [profile, setprofile] = useState(user.profile);

//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     let obj = {
//       email: email,
//       fullName: fullName,
//       phoneNumber: phoneNumber,
//       birthDate: birthDate,
//       nationalId: nationalId,
//       profile: profile,
//     };
//     try {
//       if (user.role === "student") {
//         await http.put(`${Url}student/${user._id}`, obj);
//         toast.success("تغییرات با موفقیت ثبت شد");
//       }
//     } catch (error) {
//       toast.error("تغییرات اعمال نشد");
//       console.log(error);

//       return false;
//     }

//     const newObj = { ...user };

//     newObj.fullName = fullName;
//     newObj.email = email;
//     newObj.phoneNumber = phoneNumber;
//     newObj.birthDate = birthDate;
//     newObj.nationalId = nationalId;

//     setUser(newObj);
//     setItem("user", JSON.stringify(newObj));
//   };

//   return (
//     <>
//       <ToastContainer />
//       <Container>
//         <form className="container px-5" onSubmit={handlesubmit}>
//           <div className="row d-flex justify-content-center my-4">
//             <div className="col-xl-12  py-4 ">
//               <h3 className="d-flex justify-content-center my-3">
//                 ویرایش پروفایل
//               </h3>
//               {/* profile */}
//               <div className="row d-flex justify-content-center">
//                 <div className=" col-xl-4  col-lg-5  col-md-5 col-sm-5 col-5 position-relative  ">
//                   <img
//                     className=""
//                     // src="./image/undraw_female_avatar_w3jk-fococlipping-standard.png"
//                     src={profile}
//                     alt="profile"
//                     style={{ width: "100%" }}
//                   />

//                   <label for="myfile" className="profileinput">
//                     <img
//                       className=""
//                       src="./image/add-image.png"
//                       alt="profile"
//                       style={{ width: "100%" }}
//                     />
//                     <input
//                       type="file"
//                       id="myfile"
//                       name="myfile"
//                       className="inputfile"
//                     ></input>
//                   </label>
//                 </div>
//               </div>

//               <div className="row d-flex justify-content-center">
//                 {/* name */}
//                 <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-12 py-3 ps-4 pe-2  d-inline-block size1">
//                   <h6>نام</h6>

//                   <Input
//                     type="text"
//                     label="نام"
//                     _id="2"
//                     onInputChange={(e) => setFullname(e.currentTarget.value)}
//                     value={fullName}
//                     placeHolder="نام"
//                     autoComplete="off"
//                   />
//                 </div>

//                 {/* tel */}
//                 <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 py-3 ps-4 pe-2 col-12 d-inline-block size1">
//                   <h6>شماره تماس</h6>

//                   <Input
//                     type="text"
//                     label="شماره تماس"
//                     _id="3"
//                     className="col-md-12 col-12 mb-1"
//                     placeHolder="09111234567"
//                     onInputChange={(e) => setphoneNumber(e.currentTarget.value)}
//                     value={phoneNumber}
//                     autoComplete="off"
//                   />
//                 </div>

//                 {/* email */}
//                 <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 py-3 ps-4 pe-2 col-12  size1">
//                   <h6 className="d-block"> ایمیل</h6>

//                   <Input
//                     type="email"
//                     name="email"
//                     className="col-md-12 col-12 mb-1"
//                     placeHolder="ایمیل"
//                     _id="6"
//                     label="ایمیل"
//                     onInputChange={(e) => setEmail(e.currentTarget.value)}
//                     value={email}
//                     autoComplete="off"
//                   />
//                 </div>

//                 {/* id */}
//                 <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 py-3 ps-4 pe-2 col-12 size1 ">
//                   <h6>شماره ملی </h6>

//                   <Input
//                     type="tel"
//                     name="nationalId"
//                     _id="5"
//                     label="شماره ملی "
//                     className="col-md-12 col-12 mb-1"
//                     placeHolder="شماره ملی "
//                     onInputChange={(e) => setnationalId(e.currentTarget.value)}
//                     value={nationalId}
//                     autoComplete="off"
//                   />
//                 </div>

//                 {/* birthday */}
//                 <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 py-3 ps-4 pe-2 col-12 d-inline-block birthDate ">
//                   <h6> تاریخ تولد </h6>

//                   <Input
//                     type="date"
//                     name="birthDate"
//                     _id="4"
//                     label="تاریخ تولد "
//                     placeHolder="تاریخ تولد "
//                     className="col-md-12 col-12 mb-1"
//                     onInputChange={(e) => setbirthDate(e.currentTarget.value)}
//                     value={birthDate}
//                     autoComplete="off"
//                   />
//                 </div>
//                 <div className="row d-flex justify-content-center">
//                   {/* submit */}
//                   <Button
//                     type="submit"
//                     className="mx-4 mt-5 float-start"
//                     disabled={
//                       // user.profile===profile&
//                       (user.fullName === fullName) &
//                       (user.email === email) &
//                       (user.phoneNumber === phoneNumber) &
//                       (user.birthDate === birthDate) &
//                       (user.nationalId === nationalId)
//                     }
//                   >
//                     ثبت
//                   </Button>

//                   <Button2 type="submit" className="mx-4 mt-5 float-start">
//                     باز گردانی
//                   </Button2>
//                 </div>
//               </div>

//               {/* <Recaptchas/> */}
//             </div>
//           </div>
//         </form>
//       </Container>
//     </>
//   );
// };

// export default Editprofile;
