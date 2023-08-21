import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Container,
  Title,
  Card,
  Catimg,
  Catbody,
  A,
} from "./categorycard.style";
import "./categoryresponsiv.css";

export default function Categorycard() {
  const item = [
    {
      id: 1,
      name: "ریکت",
      image: "../image/atom.png",
    },
    {
      id: 2,
      name: "امنیت",
      image: "../image/shield.png",
    },
    {
      id: 3,
      name: "شبکه",
      image: "../image/signal.png",
    },
    {
      id: 4,
      name: "آی تی",
      image: "../image/programming.png",
    },
    {
      id: 5,
      name: "وب",
      image: "../image/web.png",
    },
  ];
  AOS.init({
    duration: 1200,
  });
  return (
    <Container className="container navcontainer my-5 py-5">
      <Title className="title">دسته بندی </Title>
      {item.map((item, index) => (
        <Card className="card navcard  " key={index} data-aos="fade-down-left">
          <Catimg
            src={item.image}
            className="card-img-top"
            alt="categry items"
          />
          <Catbody className="card-body">
            <A className="card-text" src="#">
              {item.name}
            </A>
            
          </Catbody>
        </Card>
      ))}
    </Container>
  );
}
