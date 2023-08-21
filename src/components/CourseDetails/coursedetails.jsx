import React, { useState, useEffect } from "react";
import Footer from "../footer/footer";
import Commentinput from "./comentinput";
import Comments from "./comments";
import "./coursedeital.css";
import Loading from "../../components/loading/loading";
import Navbar4 from "../header/navbar4";
import { Card } from "../coursepage/coursegrids/coursesection.style";
import { Arrowdown } from "../as/rigester/buttons";
import Slider from "./slider";
import { Navigate, useParams } from "react-router-dom";
import getbyid from "../../core/services/api/courspage/getcoursbyid.api";
import posttcoment from "../../core/services/api/comment/postcoment";
import "./coursedetail.css";
import "./slid.css";
import styled from "styled-components";
import gettcoment from "../../core/services/api/comment/getcoment";
import { getItem } from "../../core/services/storage/storage";
import AddCourse from "../../core/services/api/addtoterm/addtoterm";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetById } from "../../core/services/api/courseapi/getById.api";

export const Div = styled.a`
  background: #f25f5c;
  margin-right: 5px;
  color: white;
  border-radius: 5px;
  font-size: 10px;
  padding: 5px;
  text-decoration: none;
`;
export const Button = styled.button`
  border-radius: 5px;
  font-size: 12px;
  width: 120px;
  height: 35px;
  color: white;
  border: none;
  background: #f25f5c;
  margin-top: 30px;

  &:hover {
    color: #f25f5c;
    background: none;
    border: 1px solid #707070;
  }
`;

export default function CourseDetailsTab() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  const [isLoading, setLoading] = useState(true);

  const [course, setcours] = useState([]);
  const { _id } = useParams();
  const getCourseApibyid = async () => {
    const courses = await getbyid(_id);
    setcours(courses);
    console.log(courses);
  };
  // getcomments
  // const [getcomment, setgetcomment] = useState([]);
  // const getcomments = async () => {
  //   const result = await gettcoment();
  //   const comment1 = result.filter((x) => x.postId === _id.toString());
  //   setgetcomment(comment1);
  //   console.log(comment1);
  // };
  // getcomments2
  const [comment, setComment] = useState([]);
  const params = useParams();
  const GetCourById = async () => {
    const get = await gettcoment(params.id);
    setComment(get);
  };
  const FilterComment = comment?.filter(
    (val) => val.postId == params.id && val.verified
  );

  // postcomments
  const user = JSON.parse(getItem("user"));
  const submitcomments = (values) => {
    const loggedIn = getItem("token");
    const studentModel = JSON.parse(getItem("user"));
    const username = studentModel.fullName;
    const email = studentModel.email;
    const info = {
      postId: _id.toString(),
      email: email,
      username: username,
      comment: values.comment,
    };
    console.log(info);
    if (!loggedIn) {
      toast.error("ثبت نام کنید", { position: toast.POSITION.TOP_RIGHT });
    } else {
      posttcoment(info);
      toast.success("نظر شما ثبت شد بعد از تایید نشان داده خواهد شد", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  /////buycourse
  const handelbuy = async () => {
    // let courses = await AddCourse(_id);

    // console.log(courses);
    const user = localStorage.getItem("user");
    if (!user) return toast.error("ابتدا ثبت نام کنید");
    const userObject = user ? JSON.parse(user) : null;
    //  = userObject.courses;
    const usercourses = await GetById(userObject._id);

    if (usercourses.courses.some((item) => item._id === _id))
      return toast.error("این دوره خریداری شده است");

    const basketjson = localStorage.getItem("basket");
    const basketList = basketjson ? JSON.parse(basketjson) : [];
    if (basketList.some((item) => item._id === _id))
      return toast.error(" دوره قبلا به سبدخرید اضافه شده است");
    else toast.success("دوره به سبدخرید اضافه شد");
    basketList.push(course);
    localStorage.setItem("basket", JSON.stringify(basketList));
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    getCourseApibyid();
    GetCourById();
  }, []);

  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar4 />
          <div className="container my-5 pt-5">
            <Card className="card my-5 p-5">
              <div className="container">
                <div className="row">
                  <h2 style={{ textAlign: "center" }}>جزئیات دوره</h2>

                  <div className="d-flex justify-content-center">
                    <>
                      <div className="container">
                        <div className="d-flex justify-content-center">
                          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <h3 className="fw-lighter">{course.title}</h3>
                              </div>
                            </div>
                            <div className="col-xl-8 col-md-12 my-3 Divtitle">
                              <p className="fw-lighter">
                                {course.lesson?.description}
                              </p>
                            </div>
                            <div className="my-5 Ddiscription">
                              <p className="fw-bold"> اطلاعات بیشتر:</p>
                              <div className="my-3">
                                <img
                                  src="../image/download.png"
                                  style={{ width: "20px" }}
                                  alt="b"
                                />
                                <p className="fw-bold d-inline"> مدرس دوره:</p>
                                <p className="fw-lighter d-inline">
                                  {course.teacher?.fullName}
                                </p>
                              </div>
                              <div className="my-3">
                                <img
                                  src="../image/download.png"
                                  style={{ width: "20px" }}
                                  alt="b"
                                />
                                <p className="fw-bold d-inline"> شهریه دوره:</p>
                                <p className="fw-lighter d-inline">
                                  {course.cost}تومان
                                </p>
                                <Div>
                                  {" "}
                                  <p className=" d-inline">%20</p>
                                </Div>
                              </div>
                              <div className="my-3">
                                <img
                                  src="../image/download.png"
                                  style={{ width: "20px", marginLeft: "5px" }}
                                  alt="b"
                                />
                                <p className="fw-bold d-inline">
                                  ترم ارائه شده دوره:
                                </p>
                                <p className="fw-lighter d-inline">تابستان</p>
                              </div>
                              <div className="my-3">
                                <img
                                  src="/./image/download.png"
                                  style={{ width: "20px", marginLeft: "5px" }}
                                  alt="b"
                                />
                                <p className="fw-bold d-inline">
                                  تاریخ شروع دوره:
                                </p>
                                <p className="fw-lighter d-inline">
                                  {course.startDate.slice(0, 10)}
                                </p>
                              </div>
                              <div className="my-3">
                                <img
                                  src="/./image/download.png"
                                  style={{ width: "20px", marginLeft: "5px" }}
                                  alt="b"
                                />
                                <p className="fw-bold d-inline">
                                  تاریخ پایان دوره:
                                </p>
                                <p className="fw-lighter d-inline">
                                  {course.endDate.slice(0, 10)}
                                </p>
                              </div>
                              <div className="my-3">
                                <img
                                  src="../image/download.png"
                                  style={{ width: "20px", marginLeft: "5px" }}
                                  alt="b"
                                />
                                <p className="fw-bold d-inline">ظرفیت دوره:</p>
                                <p className="fw-lighter d-inline">
                                  {course.capacity}
                                </p>
                              </div>
                              <div className="my-3">
                                <img
                                  src="../image/download.png"
                                  style={{ width: "20px", marginLeft: "5px" }}
                                  alt="b"
                                />
                                <p className="fw-bold d-inline">
                                  تعداد دانشجویان دوره:
                                </p>
                                <p className="fw-lighter d-inline">40نفر</p>
                              </div>
                              <Button onClick={handelbuy} type="submit">
                                خرید دوره
                              </Button>
                            </div>
                          </div>
                          <div className="col-xl-4 col-lg-4 nazinewspic">
                            <img
                              src={course.lesson?.image}
                              style={{ width: "100%" }}
                              alt=","
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </Card>
            <div className="row my-5">
              <div
                className="row position-relative my-4"
                style={{ borderBottom: "1px solid black" }}
              >
                <div
                  className="position-absolute top-100 start-50 translate-middle "
                  style={{
                    width: "80px",
                    zIndex: "100",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <p className="relatednews me-1 mt-2 "> نظرات</p>
                </div>
              </div>
              {FilterComment?.length > 0 ? (
                FilterComment.map((coment) => (
                  <Comments
                    key={coment._id}
                    date={coment.createDate.replace(/-/g, "/")}
                    username={coment.username}
                    comment={coment.comment}
                    answer={coment.answer}
                  />
                ))
              ) : (
                <h5>نظری ثبت نشده است .</h5>
              )}
              {/* <Comments comments={getcomment} /> */}

              <div className="row ">
                <Arrowdown className="position-absolute top-80 start-50 translate-middle "></Arrowdown>
              </div>
            </div>

            <div className="row">
              <div
                className="row position-relative mt-5"
                style={{ borderBottom: "1px solid black" }}
              >
                <div
                  className="position-absolute top-100 start-50 translate-middle "
                  style={{
                    width: "90px",
                    zIndex: "100",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <p className="relatednews me-1 mt-2 "> درج نظر</p>
                </div>
              </div>
              <Commentinput onComment={submitcomments} />
              <ToastContainer />
            </div>
            <div className="row">
              <div
                className="row position-relative my-4"
                style={{ borderBottom: "1px solid black" }}
              >
                <div
                  className="position-absolute top-100 start-50 translate-middle "
                  style={{
                    width: "150px",
                    zIndex: "100",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <p className="relatednews me-1 mt-2 "> دوره های مرتبط</p>
                </div>
              </div>
              <Slider />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import Footer from "../footer/footer";
// import Commentinput from "./comentinput";
// import Comments from "./comments";
// import "./coursedeital.css";
// import Loading from "../../components/loading/loading";
// import Navbar4 from "../header/navbar4";
// import { Card } from "../coursepage/coursegrids/coursesection.style";
// import { Arrowdown } from "../as/rigester/buttons";
// import Slider from "./slider";
// import { Navigate, useParams } from "react-router-dom";
// import getbyid from "../../core/services/api/courspage/getcoursbyid.api";
// import posttcoment from "../../core/services/api/comment/postcoment";
// import "./coursedetail.css";
// import "./slid.css";
// import styled from "styled-components";
// import gettcoment from "../../core/services/api/comment/getcoment";
// import { getItem } from "../../core/services/storage/storage";

// import { ToastContainer, toast, cssTransition } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { GetById } from "../../core/services/api/courseapi/getById.api";

// export const Div = styled.a`
//   background: #f25f5c;
//   margin-right: 5px;
//   color: white;
//   border-radius: 5px;
//   font-size: 10px;
//   padding: 5px;
//   text-decoration: none;
// `;
// export const Button = styled.button`
//   border-radius: 5px;
//   font-size: 12px;
//   width: 120px;
//   height: 35px;
//   color: white;
//   border: none;
//   background: #f25f5c;
//   margin-top: 30px;

//   &:hover {
//     color: #f25f5c;
//     background: none;
//     border: 1px solid #707070;
//   }
// `;

// export default function CourseDetailsTab() {
//   const [basicActive, setBasicActive] = useState("tab1");

//   const handleBasicClick = (value) => {
//     if (value === basicActive) {
//       return;
//     }

//     setBasicActive(value);
//   };
//   const [isLoading, setLoading] = useState(true);

//   const [course, setcours] = useState([]);
//   const { _id } = useParams();
//   const getCourseApibyid = async () => {
//     const courses = await getbyid(_id);
//     setcours(courses);
//     console.log(courses);
//   };
//   // getcomments
//   const [getcomment, setgetcomment] = useState([]);
//   const getcomments = async () => {
//     const result = await gettcoment();
//     const comment1 = result.filter((x) => x.postId === _id.toString());
//     setgetcomment(comment1);
//     console.log(comment1);
//   };

//   // postcomments
//   const user = JSON.parse(getItem("user"));
//   const submitcomments = (values) => {
//     const loggedIn = getItem("token");
//     const studentModel = JSON.parse(getItem("user"));
//     const username = studentModel.fullName;
//     const email = studentModel.email;
//     const info = {
//       postId: _id.toString(),
//       email: email,
//       username: username,
//       comment: values.comment,
//     };
//     console.log(info);
//     if (!loggedIn) {
//       toast.error("ثبت نام کنید", { position: toast.POSITION.TOP_RIGHT });
//     } else {
//       posttcoment(info);
//       toast.success("نظر شما ثبت شد", { position: toast.POSITION.TOP_RIGHT });
//     }
//   };

//   /////buycourse
//   const handelbuy = async () => {
//     // let courses = await AddCourse(_id);

//     // console.log(courses);
//     const user = localStorage.getItem("user");
//     if (!user) return toast.error("ابتدا ثبت نام کنید");
//     const userObject = user ? JSON.parse(user) : null;
//     //  = userObject.courses;
//     const usercourses = await GetById(userObject._id);

//     if (usercourses.courses.some((item) => item._id === _id))
//       return toast.error("این دوره خریداری شده است");

//     const basketjson = localStorage.getItem("basket");
//     const basketList = basketjson ? JSON.parse(basketjson) : [];
//     if (basketList.some((item) => item._id === _id))
//       return toast.error(" دوره قبلا به سبدخرید اضافه شده است");
//     else toast.success("دوره به سبدخرید اضافه شد");
//     basketList.push(course);
//     localStorage.setItem("basket", JSON.stringify(basketList));
//   };

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 2000);
//     getCourseApibyid();
//     getcomments();
//   }, []);

//   return (
//     <>
//       {" "}
//       {isLoading ? (
//         <Loading />
//       ) : (
//         <>
//           <Navbar4 />
//           <div className="container my-5 pt-5">
//             <Card className="card my-5 p-5">
//               <div className="container">
//                 <div className="row">
//                   <h2 style={{ textAlign: "center" }}>جزئیات دوره</h2>

//                   <div className="d-flex justify-content-center">
//                     <>
//                       <div className="container">
//                         <div className="d-flex justify-content-center">
//                           <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
//                             <div className="row">
//                               <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
//                                 <h3 className="fw-lighter">{course.title}</h3>
//                               </div>
//                             </div>
//                             <div className="col-xl-8 col-md-12 my-3 Divtitle">
//                               <p className="fw-lighter">
//                                 {course.lesson?.description}
//                               </p>
//                             </div>
//                             <div className="my-5 Ddiscription">
//                               <p className="fw-bold"> اطلاعات بیشتر:</p>
//                               <div className="my-3">
//                                 <img
//                                   src="../image/download.png"
//                                   style={{ width: "20px" }}
//                                   alt="b"
//                                 />
//                                 <p className="fw-bold d-inline"> مدرس دوره:</p>
//                                 <p className="fw-lighter d-inline">
//                                   {course.teacher?.fullName}
//                                 </p>
//                               </div>
//                               <div className="my-3">
//                                 <img
//                                   src="../image/download.png"
//                                   style={{ width: "20px" }}
//                                   alt="b"
//                                 />
//                                 <p className="fw-bold d-inline"> شهریه دوره:</p>
//                                 <p className="fw-lighter d-inline">
//                                   {course.cost}تومان
//                                 </p>
//                                 <Div>
//                                   {" "}
//                                   <p className=" d-inline">%20</p>
//                                 </Div>
//                               </div>
//                               <div className="my-3">
//                                 <img
//                                   src="../image/download.png"
//                                   style={{ width: "20px", marginLeft: "5px" }}
//                                   alt="b"
//                                 />
//                                 <p className="fw-bold d-inline">
//                                   ترم ارائه شده دوره:
//                                 </p>
//                                 <p className="fw-lighter d-inline">تابستان</p>
//                               </div>
//                               <div className="my-3">
//                                 <img
//                                   src="/./image/download.png"
//                                   style={{ width: "20px", marginLeft: "5px" }}
//                                   alt="b"
//                                 />
//                                 <p className="fw-bold d-inline">
//                                   تاریخ شروع دوره:
//                                 </p>
//                                 <p className="fw-lighter d-inline">
//                                   {course.startDate.slice(0, 10)}
//                                 </p>
//                               </div>
//                               <div className="my-3">
//                                 <img
//                                   src="/./image/download.png"
//                                   style={{ width: "20px", marginLeft: "5px" }}
//                                   alt="b"
//                                 />
//                                 <p className="fw-bold d-inline">
//                                   تاریخ پایان دوره:
//                                 </p>
//                                 <p className="fw-lighter d-inline">
//                                   {course.endDate.slice(0, 10)}
//                                 </p>
//                               </div>
//                               <div className="my-3">
//                                 <img
//                                   src="../image/download.png"
//                                   style={{ width: "20px", marginLeft: "5px" }}
//                                   alt="b"
//                                 />
//                                 <p className="fw-bold d-inline">ظرفیت دوره:</p>
//                                 <p className="fw-lighter d-inline">
//                                   {course.capacity}
//                                 </p>
//                               </div>
//                               <div className="my-3">
//                                 <img
//                                   src="../image/download.png"
//                                   style={{ width: "20px", marginLeft: "5px" }}
//                                   alt="b"
//                                 />
//                                 <p className="fw-bold d-inline">
//                                   تعداد دانشجویان دوره:
//                                 </p>
//                                 <p className="fw-lighter d-inline">40نفر</p>
//                               </div>
//                               <Button onClick={handelbuy} type="submit">
//                                 خرید دوره
//                               </Button>
//                             </div>
//                           </div>
//                           <div className="col-xl-4 col-lg-4 nazinewspic">
//                             <img
//                               src={course.lesson?.image}
//                               style={{ width: "100%" }}
//                               alt=","
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//             <div className="row my-5">
//               <div
//                 className="row position-relative my-4"
//                 style={{ borderBottom: "1px solid black" }}
//               >
//                 <div
//                   className="position-absolute top-100 start-50 translate-middle "
//                   style={{
//                     width: "80px",
//                     zIndex: "100",
//                     backgroundColor: "#ffffff",
//                   }}
//                 >
//                   <p className="relatednews me-1 mt-2 "> نظرات</p>
//                 </div>
//               </div>
//               <Comments comments={getcomment} />

//               <div className="row ">
//                 <Arrowdown className="position-absolute top-80 start-50 translate-middle "></Arrowdown>
//               </div>
//             </div>

//             <div className="row">
//               <div
//                 className="row position-relative mt-5"
//                 style={{ borderBottom: "1px solid black" }}
//               >
//                 <div
//                   className="position-absolute top-100 start-50 translate-middle "
//                   style={{
//                     width: "90px",
//                     zIndex: "100",
//                     backgroundColor: "#ffffff",
//                   }}
//                 >
//                   <p className="relatednews me-1 mt-2 "> درج نظر</p>
//                 </div>
//               </div>
//               <Commentinput onComment={submitcomments} />
//               <ToastContainer />
//             </div>
//             <div className="row">
//               <div
//                 className="row position-relative my-4"
//                 style={{ borderBottom: "1px solid black" }}
//               >
//                 <div
//                   className="position-absolute top-100 start-50 translate-middle "
//                   style={{
//                     width: "150px",
//                     zIndex: "100",
//                     backgroundColor: "#ffffff",
//                   }}
//                 >
//                   <p className="relatednews me-1 mt-2 "> دوره های مرتبط</p>
//                 </div>
//               </div>
//               <Slider />
//             </div>
//           </div>
//           <Footer />
//         </>
//       )}
//     </>
//   );
// }
