import React, { useState, useEffect } from "react";
import { Div, H, Img, Card, Images, Span, But } from "./dashboardcontent.style";
import Bought from "./coursesell";
import { Link } from "react-router-dom";
import { Calender } from "./calender";
import "./calender.css";
import Slider from "./slider";
import getAllCourseApi from "../../core/services/api/courseapi/course1.api.js";

export default function DashboardContent() {
  // const [course, setCourse] = useState([]);
  // const getCourseApi = async () => {
  //   const course = await getAllCourseApi();
  //   setCourse(course.data.slice(0, 1));
  //   console.log(course);
  const [course, setCourse] = useState([]);
  const getCourseApi = async () => {
    const course = await getAllCourseApi();
    const course1 = course.slice(13, 14);
    setCourse(course1);
    console.log(course1);
  };

  useEffect(() => {
    getCourseApi();
  }, []);

  return (
    <Div className="container">
      <H className="my-5">داشبورد</H>
      <div className="row mb-4">
        <div class="col-md-6 col-sm-12 mt-2">
          <div className="d-flex justify-content-between">
            {" "}
            <span>دوره پیشنهادی</span>
          </div>
          {course.map((item) => (
            <Bought
              title={item.title}
              teacher={item.teacher.fullName}
              image={item.lesson.image}
              cost={item.cost}
              capacity={item.capacity}
              startDate={item.startDate.slice(0, 10)}
              _id={item._id}
            />
          ))}
        </div>
        <div class="col-md-6 col-sm-12 mt-2">
          <div className="d-flex justify-content-between">
            {" "}
            <span>در حال پرشدن ظرفیت</span>
            {/* <Img src="./image/icons8-left-arrow-50.png"></Img> */}
          </div>
          {course.map((item) => (
            <Bought
              title={item.title}
              teacher={item.teacher.fullName}
              image={item.lesson.image}
              cost={item.cost}
              capacity={item.capacity}
              startDate={item.startDate.slice(0, 10)}
              _id={item._id}
            />
          ))}
        </div>
      </div>

      <div className="row mb-4">
        {" "}
        <span>لیست اساتید دوره ها</span>
        <Slider />
      </div>

      <div className="row mb-4">
        <div class="col-md-6 col-sm-12">
          <div className="d-flex justify-content-between">
            {" "}
            <span>کیف پول شما</span>
          </div>

          <Card className="card">
            <div class="card-body">
              <div className="d-flex justify-content-between mb-3">
                <span>سبد خرید</span>
                <Link to="/check">
                  {" "}
                  <Images src="./image/icons8-left-arrow-50.png"></Images>
                </Link>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>موجودی</span>
                <Span>600000 تومان</Span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>پرداخت</span>
                <Span>0</Span>
              </div>{" "}
              <Link to="/courses">
                {" "}
                <But class="btn">مشاهده دوره ها</But>
              </Link>
            </div>
          </Card>
        </div>
        <div class="col-md-6 col-sm-12">
          <div className="d-flex justify-content-between">
            {" "}
            <span>دوره محبوب</span>
          </div>
          {course.map((item) => (
            <Bought
              title={item.title}
              teacher={item.teacher.fullName}
              image={item.lesson.image}
              cost={item.cost}
              capacity={item.capacity}
              startDate={item.startDate.slice(0, 10)}
              _id={item._id}
            />
          ))}
        </div>
      </div>
      <Calender />
      {/* <Cal /> */}
    </Div>
  );
}
