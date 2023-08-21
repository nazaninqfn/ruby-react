import React from "react";
// import List from "../../../home/list";
// import styled, { css } from "styled-components";
import SubmitButton from "../button/sub-button";
import {
  Card,
  Title,
  Teacher,
  Capacity,
  Price,
  Image,
  Div,
  Img,
  Meter,
  // Capa,
  Span,
} from "../LandingComponents/course/course.style";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

export default function CourseTest({
  title,
  cost,
  capacity,
  teacher,
  image,
  like,
  _id,
}) {
  return (
    <>
      <Card className="card mt-5">
        <Div>
          <Img src={image} className="card-img-top" />
        </Div>
        <div className="card-body">
          <Title>{title}</Title>
          <Teacher>مدرس:{teacher}</Teacher>
          <Price>قیمت دوره:{cost}تومان</Price>
          <Capacity className="d-flex">
            <Span>ظرفیت:{capacity}%</Span>
            <Meter>
              <div>
                <ProgressBar
                  variant="danger"
                  now={capacity}
                  style={{
                    height: "12px",
                    borderRadius: "5px",
                    direction: "ltr",
                    width: "80px",
                    background: "#fa9f9d",
                    marginRight: "3px",
                  }}
                />
              </div>
            </Meter>
          </Capacity>
          <Teacher>لایک:{like}</Teacher>
          <Link to={"/coursedetailes/" + _id}>
            <br />
            <SubmitButton />
          </Link>
        </div>
      </Card>
    </>
  );
}
