import React from "react";
import styled from "styled-components";

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

export default function TeacherSlider({ fullName, image, lessonName, _id }) {
  return (
    <>
      <Card className="card">
        <div class="card-body">
          <Ima class="card-img-top" src={image}></Ima>
          <Para class="card-title">{fullName}</Para>
          <Para
            class="card-title text-muted"
            teachcourses={lessonName}
            _id={_id}
          ></Para>
        </div>
      </Card>
    </>
  );
}
