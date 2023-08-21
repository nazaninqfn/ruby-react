import React, { useState, useEffect } from "react";

import Footer from "../footer/footer";
import Commentinput from "../CourseDetails/comentinput";
import Comments from "../CourseDetails/comments";
import "../CourseDetails/coursedeital.css";
import Loading from "../../components/loading/loading";
import Navbar4 from "../header/navbar4";
import Slider, { Card } from "../CourseDetails/slider";
import { Arrowdown } from "../as/rigester/buttons";
import { useParams } from "react-router-dom";
import getbyid from "../../core/services/api/newsapi/getnewsbyid.api";
import { Listdote } from "../as/rigester/buttons";
import "./newsdetail.css";
import gettcoment from "../../core/services/api/comment/getcoment";
import { getItem } from "../../core/services/storage/storage";
import posttcoment from "../../core/services/api/comment/postcoment";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewsDetailsTab() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const [news, setNews] = useState([]);
  const { _id } = useParams();
  const getNewsApibyid = async () => {
    const newse1 = await getbyid(_id);
    setNews(newse1);
    console.log(newse1);
  };

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

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    getNewsApibyid();
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
                <div className="d-flex justify-content-center">
                  <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                        <h4 className="fw-lighter">{news.title}</h4>
                      </div>
                    </div>
                    <div className="col-xl-8 col-md-12 my-5">
                      <p className="fw-lighter">{news.text}</p>
                    </div>
                    <div className="my-5">
                      <p className="fw-bold"> اطلاعات بیشتر:</p>
                      <div className="my-3">
                        <Listdote />
                        <p className="fw-bold d-inline"> تاریخ انتشار خبر:</p>
                        <p className="fw-lighter d-inline">1401/6/19</p>
                      </div>
                      <div className="my-3">
                        <Listdote />
                        <p className="fw-bold d-inline"> دسته بندی:</p>
                        <p className="fw-lighter d-inline">مقاله</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 nazinewspic">
                    <img src={news.image} style={{ width: "100%" }} alt="," />
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
                  <p className="relatednews me-1 mt-2 "> اخبار مرتبط</p>
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
