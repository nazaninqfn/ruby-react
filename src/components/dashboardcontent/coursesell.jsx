import React from "react";
import {
  Div,
  H,
  Img,
  Card,
  // Im,
  // Di,
  // Para,
  Cardcapacity,
  H5,
  Button,
  H6,
  Images,
  Span,
  Ima,
  H4,
  Image,
} from "./dashboardcontent.style";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

export default function Bought({
  image,
  title,
  cost,
  teacher,
  startDate,
  capacity,
  _id,
}) {
  return (
    <Cardcapacity className="card">
      <div class="card-body d-flex">
        <div className="col-md-5 col-xl-5">
          <div
            style={{
              background: " #f3f3f3",
              height: "100%",
              borderRadius: "5px",
            }}
          >
            {" "}
            <Image src={image}></Image>
          </div>
        </div>
        <div className="col-md-8 mx-2">
          <H4 class="card-title">{title}</H4>
          <H6 className="card-subtitle mb-2 ">مدرس:{teacher}</H6>
          <H6 className="card-text">قیمت دوره:{cost} تومان</H6>{" "}
          <H6 className="card-text">تاریخ شروع:{startDate}</H6>{" "}
          <H6 className="card-text d-flex">
            ظرفیت:{capacity}%
            <div>
              <ProgressBar
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
          </H6>
          <Link to={"/coursedetailes/" + _id}>
            {" "}
            <Button class="btn">مشاهده</Button>
          </Link>
        </div>
      </div>
    </Cardcapacity>
  );
}
