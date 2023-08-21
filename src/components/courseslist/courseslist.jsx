import React from "react";

import { MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import Courspagination from "../pagination/courspagination";
import "./courslist.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { H } from "../dashboardcontent/dashboardcontent.style";

export default function Courseslist({
  title,
  cost,
  startDate,
  endDate,
  teacher,
  image,
  _id,
}) {
  const [icon, addcours] = useState("../image/plus.png");

  return (
    <div className=" position-relative">
      <div className="d-flex justify-content-center">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  ">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  listp">
            <ul className="listrow d-flex justify-content-around">
              <li>
                <img
                  src={image}
                  alt="coursitems"
                  style={{ width: "50px", height: "50px" }}
                ></img>
              </li>
              <li>{title}</li>
              <li>{teacher}</li>
              <li>{startDate}</li>
              <li>{endDate}</li>
              <li>{cost}</li>
              <li>
                <Link to={"/coursedetailes/" + _id}>
                  {/* <img src={item.icon} alt="+" style={{ width: "30px" }} ></img> */}{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
