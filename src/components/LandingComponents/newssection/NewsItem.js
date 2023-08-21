import React from "react";
import { Link } from "react-router-dom";
import { Newsimage, Arrowimage, Newstext } from "./newssection.style";
import AOS from "aos";
import "aos/dist/aos.css";

// import"./news.css";
const NewsItem = ({ image, text, _id }) => {
  AOS.init({
    duration: 1500,
  });
  return (
    <div
      className=" card d-flex flex-row p-4 my-3 newscard "
      data-aos="flip-right"
    >
      <div
        className=" col-xl-4 col-md-3 col-sm-3 col-3   mx-1 position-relative "
        // style={{ border: "1px solid rgba(0,0,0,.125)" }}
      >
        <Newsimage
          className="position-absolute top-50 start-50 translate-middle"
          src={image}
          alt="news"
        ></Newsimage>
      </div>

      <Newstext className="card-title d-inline-block col-xl-8 col-md-7 dir-rtl  mx-1 ">
        {text}
      </Newstext>

      <Link to={"newsdetailetab/" + _id}>
        <a href="/" className="position-absolute bottom-0 start-0 m-3">
          <Arrowimage src="image/left-arrow.png" alt="arrow"></Arrowimage>
        </a>
      </Link>
    </div>
  );
};
export default NewsItem;
