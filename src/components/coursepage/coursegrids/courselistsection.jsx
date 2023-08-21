import React from "react";
import { CourseSection } from "./coursesection";
import styled from "styled-components";

export const Container = styled.div`
  width: 270px;
`;

export function CourseListSection(props, index) {
  return props.courses.map((item) => (
    <Container key={item.id} className="container">
      <CourseSection title={item.title} teacher={item.teacher.fullName} image={item.lesson.image} 
                      cost={item.cost} capacity={item.capacity} like={item.like}
                      _id={item._id} />
    </Container>
  ));
}
