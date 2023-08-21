import React from "react";
// import List from "../../../home/list";
// import styled, { css } from "styled-components";
import SubmitButton from "../../button/sub-button";
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
} from "./course.style";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../../dashboardcontent/calender.css";
import { Link } from "react-router-dom";

export function Course({ title, cost, capacity, teacher, image, like, _id }) {
  AOS.init({
    duration: 1200,
  });
  return (
    // <div data-aos="fade-down-right">
    <Card className="card mt-5">
      <Div>
        <Img src={image} className="card-img-top" />
      </Div>
      <div className="card-body">
        <Title>{title}</Title>
        <Teacher>مدرس:{teacher}</Teacher> <Price>قیمت دوره:{cost}تومان</Price>
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
    // </div>
  );
}
