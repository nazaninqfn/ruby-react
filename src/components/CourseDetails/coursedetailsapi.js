import React from "react";
import { Course } from "./course";
import styled from "styled-components";
import ViewButton from "../../button/vie-button";
import { useState } from "react";

import getAllCourseApi from "../../../core/services/api/courseapi/course.Api.js";

import { useEffect } from "react";
import Coursedetail from "./coursedetail";
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

  const getCourseApi = async () => {
    const course = await getAllCourseApi();
    
    const course1 = course;
    setCourse(course1);

  };
  

  useEffect(() => {
    getCourseApi();
  }, []);
  return  (
    <Container className="container">
        <div className="row">
          <H>دوره های آموزشی</H>
        <div className="d-flex justify-content-center">
          
          {course.map((item) =>
          (          
          <Coursedetail 
          title={item.title} 
          teacher={item.teacher.fullName}
          image={item.lesson.image}
          cost={item.cost}
          capacity={item.capacity}
          startDate={item.startDate}
          endDate={item.endDate}
          _id={item._id}

          />
          
          ))}
        </div>
          
      </div>
        <View>
          <ViewButton />
        </View>
      </Container>
      // {course.map((item) => (
      //   <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={item}>
      //     <Course title={item.title} />
      //   </div>
      // ))}
    
  );
}
