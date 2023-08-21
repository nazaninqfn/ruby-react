import React from "react";
import SubmitButton from "../../button/sub-button";
import {
  Container,
  Card,
  Title,
  Teacher,
  Capacity,
  Price,
  // Image,
  Div,
  Img,
  Meter,
  // Capa,
  Span,
} from "./coursesection.style";

import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";

export function CourseSection({
  title,
  teacher,
  image,
  cost,
  capacity,
  like,
  _id,
}) {
  return (
    <Container>
      <Card className="card mt-4">
        <Div>
          <Img src={image} className="card-img-top" />
        </Div>
        <div className="card-body">
          <Title>{title}</Title>
          <Teacher>{teacher}</Teacher>
          <Capacity>
            <Span>{capacity}</Span>
            <Meter>
              {/* <Capa></Capa> */}
              <div>
                <ProgressBar
                  variant="danger"
                  now={8}
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
          <Price>{cost}</Price>

          <br />

          <Link to={"/coursedetailes/" + _id}>
            <SubmitButton />
          </Link>
        </div>
      </Card>
    </Container>
  );
}
