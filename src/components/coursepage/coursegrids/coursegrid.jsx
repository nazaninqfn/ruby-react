import React from "react";
import {
  Card,
  Courseimage,
  Dimage,
  Title,
  Teacher,
  Capacity,
  Price,
  Meter,
  // Capa,
  Span,
  Button,
  Div,
} from "./coursegrid.style";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

const CourseGrid = ({ title, teacher, image, cost, capacity, like, _id }) => {
  return (
    <div className="container  d-flex mt-4">
      <div className="row g-0 container d-flex justify-content-center ">
        <Card className="card d-flex flex-row">
          <Dimage className="col-md-5">
            {" "}
            <Courseimage className="mt-3" src={image} alt="news"></Courseimage>
          </Dimage>
          <Div className="col-md-8 mt-2">
            <Title className="card-title">{title}</Title>
            <Teacher>مدرس:{teacher}</Teacher>
            <Price>قیمت دوره:{cost}تومان</Price>
            <Capacity className="gridst">
              <Span>ظرفیت:%{capacity}</Span>
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
              {" "}
              <Button>جزئیات دوره</Button>
            </Link>
          </Div>
        </Card>
      </div>
      {/* <div className="col-xxl-5 col-xl-5 col-lg-5  mx-4 my-4">
          {" "}
          <Card className="card d-flex flex-row ">
            <Dimage className="col-md-5">
              {" "}
              <Courseimage
                className="mt-3 igrid"
                src={image}
                alt="news"
              ></Courseimage>
            </Dimage>
            <Div className="col-md-8 mt-2">
              <Title className="card-title">{title}</Title>
              <Teacher>مدرس:{teacher}</Teacher>
              <Price>قیمت دوره:{cost}تومان</Price>
              <Capacity className="gridst">
                <Span>ظرفیت:%{capacity}</Span>
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
                <Button>جزئیات دوره </Button>
              </Link>
            </Div>
          </Card>
        </div> */}
    </div>
  );
};
export default CourseGrid;
