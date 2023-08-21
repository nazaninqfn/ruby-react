import React from "react";
import Carousel from "react-material-ui-carousel";
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

export default function Slider(props) {
  const items = [
    {
      pic: "../image/undraw_learning_sketching_nd4f.png",
      name: " دوره ریکت ترم بهار ",
      description: " 2 روز پیش",
    },
    {
      pic: "../image/undraw_male_avatar_323b.png",
      name:"دوره انگولار",
      description:" 2 روز پیش" ,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} autoPlay />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div className="d-flex justify-content-around ">
      <div className="col-md-4 col-sm-4">
        <Card className="card">
          <div class="card-body">
            <Ima class="card-img-top" src={props.item.pic}></Ima>
            <Para class="card-title">{props.item.name}</Para>
            <Para class="card-title text-muted">{props.item.description}</Para>
          </div>
        </Card>
      </div>
      <div className="col-md-4 col-sm-4 mx-2">
        <Card className="card">
          <div class="card-body">
            <Ima class="card-img-top" src={props.item.pic}></Ima>
            <Para class="card-title">{props.item.name}</Para>
            <Para class="card-title text-muted">{props.item.description}</Para>
          </div>
        </Card>
      </div>
      <div className="col-md-4 col-sm-4">
        <Card className="card">
          <div class="card-body">
            <Ima class="card-img-top" src={props.item.pic}></Ima>
            <Para class="card-title">{props.item.name}</Para>
            <Para class="card-title text-muted">{props.item.description}</Para>
          </div>
        </Card>
      </div>
    </div>
  );
}
