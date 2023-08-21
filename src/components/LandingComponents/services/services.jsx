import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Container,
  Card,
  Img,
  Title,
  Span,
  Discription,
  H,
} from "./services.style";
// import "./services.css";

const Services = () => {
  const data = [
    {
      id: "1",
      pic: "../image/undraw_Interview_re_e5jn.png",
      title: "مشاوره",
      disc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
    {
      id: "2",
      pic: "../image/undraw_Detailed_examination_re_ieui.png",
      title: "امتحان",
      disc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
    {
      id: "3",
      pic: "../image/undraw_Job_offers_re_634p.png",
      title: "فرصت های شغلی",
      disc: "تیم ما مشاوره های لازم را به شما می دهد",
    },

    {
      id: "4",
      pic: "../image/undraw_Certificate_re_yadi.png",
      title: "مدرک معتبر",
      disc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
  ];
  AOS.init({
    duration: 1200,
  });

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <H>خدمات ما</H>
        <Container className="dservices">
          <div className="row">
            {data.map((item, index) => (
              <Card
                className="card col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12"
                data-aos="zoom-in-up"
              >
                <div className="card-body ">
                  <div className="d-flex justify-content-center">
                    <Img
                      className="card-img-top "
                      src={item.pic}
                      alt="Card image cap"
                    />
                  </div>

                  <Title className="card-title">{item.title}</Title>
                  <Span></Span>
                  <Discription className="text">{item.disc}</Discription>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </div>
    // <Div className="container">
    //   <H>خدمات ما</H>
    //   <Container className="dservices">
    //     {data.map((item, index) => (
    //       <Card className="card col-md-6 col-3">
    //         <div className="card-body">
    //           <Img
    //             className="card-img-top"
    //             src={item.pic}
    //             alt="Card image cap"
    //           />

    //           <Title className="card-title">{item.title}</Title>
    //           <Span></Span>
    //           <Discription className="text">{item.disc}</Discription>
    //         </div>
    //       </Card>
    //     ))}
    //   </Container>
    // </Div>
  );
};
export default Services;
