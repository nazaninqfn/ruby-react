import React from "react";
import { Course } from "./course";
import styled from "styled-components";
import ViewButton from "../../button/vie-button";
import { useState } from "react";

// import getAllCourseApi, {
//   getLikeCount,
// } from "../../../core/services/api/courseapi/course.api.js";

import { useEffect } from "react";
import getAllCourseApi from "../../../core/services/api/courseapi/course1.api";
//import getAlllikeApi from "../../../core/services/api/like/like.api";
export const View = styled.div`
  margin-top: 50px;
`;
export const H = styled.h3`
  text-align: center;
`;
export const Container = styled.div`
  margin: 0 auto;
  width: 270px;
`;

export default function CourseList() {
  const [course, setCourse] = useState([]);
  // const [like, setlike] = useState([]);

  const getCourseApi = async () => {
    const course = await getAllCourseApi();
    course.forEach(async (element) => {
      // const likeCuont = await getLikeCount(element._id);
      // element.like = likeCuont.like;
      // console.log(element.like);
    });
    const course1 = course.slice(0, 4);
    setCourse(course1);
  };

  useEffect(() => {
    getCourseApi();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <H>دوره های آموزشی</H>
        {course.map((item) => (
          <div className="col-xl-3 col-lg-6 col-md-6 ">
            <Course
              title={item.title}
              teacher={item.teacher.fullName}
              image={item.lesson.image}
              cost={item.cost}
              capacity={item.capacity}
              like={item.like}
              _id={item._id}
            />
          </div>
        ))}
      </div>
      <View>
        <ViewButton />
      </View>
    </div>
    // {course.map((item) => (
    //   <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={item}>
    //     <Course title={item.title} />
    //   </div>
    // ))}
  );
}
