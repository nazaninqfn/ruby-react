import React from "react";
import styled from "styled-components";
import ViewButton from "../../button/vie-button";

import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

import {
  Card,
  Courseimage,
  Dimage,
  Title,
  Teacher,
  Capacity,
  Price,
  //Image,
  Meter,
  // Capa,
  Span,
  // Ddate,
  Button,
  Div,
} from "./coursegrid.style";

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

export default function CourseList({
  title,
  teacher,
  image,
  cost,
  capacity,
  like,
  _id,
}) {
  return (
    <Container className="container">
      <div className="row">
        <H>دوره های آموزشی</H>
        <div className="d-flex justify-content-center">
          <div className="container  d-flex mt-4">
            <div className="row g-0 container d-flex justify-content-center ">
              <div className="col-xxl-5 col-xl-5 col-lg-6  mx-4 my-4">
                <Card className="card d-flex flex-row p-2 my-3">
                  <Dimage className="col-md-5">
                    {" "}
                    <Courseimage
                      className="mt-3"
                      src={image}
                      alt="news"
                    ></Courseimage>
                  </Dimage>
                  <Div className="col-md-8">
                    <Title className="card-title">{title}</Title>
                    <Teacher>{teacher}</Teacher>
                    <Price>{cost}</Price>
                    {/* <Ddate>{item.date}</Ddate> */}
                    <Capacity className="gridst">
                      <Span>{capacity}</Span>
                      <Meter>
                        {/* <Capa></Capa> */}
                        <div>
                          <ProgressBar
                            variant="danger"
                            now={75}
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
                    <Div>{like}</Div>

                    <br />
                    <Link to={"/coursedetail" + _id}>
                      {" "}
                      <Button>ثبت دوره</Button>
                    </Link>
                  </Div>
                </Card>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-6  mx-4 my-4 mb-5">
                {" "}
                <Card className="card d-flex flex-row p-2 my-3">
                  <Dimage className="col-md-5">
                    {" "}
                    <Courseimage
                      className="mt-3 igrid"
                      src={image}
                      alt="news"
                    ></Courseimage>
                  </Dimage>
                  <Div className="col-md-8">
                    <Title className="card-title">{title}</Title>
                    <Teacher>{teacher}</Teacher>
                    <Price>{cost}</Price>
                    {/* <Ddate>{item.date}</Ddate> */}
                    <Capacity className="gridst">
                      <Span>{capacity}</Span>
                      <Meter>
                        {/* <Capa></Capa> */}
                        <div>
                          <ProgressBar
                            variant="danger"
                            now={75}
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
                    <br />
                    <Link to={"/coursedetail" + _id}>
                      <Button>ثبت دوره</Button>
                    </Link>
                  </Div>
                </Card>
              </div>
            </div>
          </div>
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
