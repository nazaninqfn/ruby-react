import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import styled from "styled-components";
import getAllteachersApi from "../../core/services/api/topteacherapi/topteacher.api";
import TeacherSlider from "./teacherslider";

export const Card = styled.div`
  box-shadow: 2px 1px 10px #dedede;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
export const Ima = styled.img`
  width: 100px;
  margin: 0px auto;
  display: block;
`;
export const Para = styled.p`
  text-align: center;
`;

export default function Slider() {
  const [allteacher, setallteacher] = useState([]);

  const getteacherApi = async () => {
    const allteacher = await getAllteachersApi();
    const teacher = allteacher.slice(0, 4);
    setallteacher(teacher);
    console.log(teacher);
  };
  useEffect(() => {
    getteacherApi();
  }, []);

  return (
    <Carousel>
      {allteacher.map((teacher) => (
        <Item
          fullName={teacher.fullName}
          image={teacher.profile}
          teachercourses={teacher.lesson?.lessonName}
          autoPlay
        />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div className="d-flex justify-content-around ">
      <div className="col-md-4 col-sm-4">
        <TeacherSlider
          fullName={props.fullName}
          image={props.image}
          teachercourses={props.lesson?.lessonName}
        />
      </div>
      <div className="col-md-4 col-sm-4 mx-2">
        <TeacherSlider
          fullName={props.fullName}
          image={props.image}
          courses={props.courses}
        />
      </div>
      <div className="col-md-4 col-sm-4">
        <TeacherSlider
          fullName={props.fullName}
          image={props.image}
          courses={props.courses}
        />
      </div>
    </div>
  );
}
