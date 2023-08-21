import React from "react";
import Modall from "../modal/modal";
import {
  Teachcontainer,
  Teachcard,
  Teachpic,
  Teachbody,
  Teachtitle,
} from "./topteacher.style";
// import "./topteacherresponsiv.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Topteacher = ({ image, fullName }) => {
  AOS.init({
    duration: 1200,
  });
  return (
    // <Teachcontainer className="container">
    // <div className=" row d-flex justify-content-center">
    <Teachcard
      className="card col-xl-3 col-lg-5 col-md-5 col-sm-5 col-12 teachcard"
      data-aos="fade-down-left"
    >
      <Teachpic
        src={image}
        className="img-fluid position-absolute top-0 start-50 translate-middle"
      />

      <Teachbody className="card-body ">
        <h5 className="card-title ">{fullName}</h5>

        {/* MODAL */}
        <Modall />
      </Teachbody>
    </Teachcard>
    // </div>
    // </Teachcontainer>
  );
};

export default Topteacher;
