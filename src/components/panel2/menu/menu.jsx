import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { Data } from "./data";

import { Menucard, Menuprofile } from "./menu.style";
import "../../button/hover.css";
import "../../panel2/body/bodypanel.css";

import { useState } from "react";
import { getItem, setItem } from "../../../core/services/storage/storage";
import Modalllogout from "../body/logout/modallogout";
import { UserContext } from "../../dashboardcontent/UserContext";

const Menu = () => {
  // const user=JSON.parse(getItem("user"));
  const { user, setUser } = useContext(UserContext);
  // const [fullName] = useState(user.fullName);
  // const [role] = useState(user.role);

  // const handlesubmit = async (e) => {
  //   e.preventDefault();
  //   let obj = { fullName: fullName, role: role };
  //   setItem("user", JSON.stringify(user));
  // };

  return (
    <>
      <Menucard className="col-xl-3 col-lg-3 col-md-12 ms-3 d-fixed menucard">
        <ul className="position-relative" style={{ padding: "0", margin: "0" }}>
          <Menuprofile className=" col-xl-5 col-lg-5 col-md-2 col-sm-2 col-2 position-absolute top-0 start-50 translate-middle ">
            <img
              // src="./image/undraw_female_avatar_w3jk-fococlipping-standard.png"
              src={user?.profile}
              style={{ width: "100%" }}
            />
          </Menuprofile>
        </ul>
        <ul style={{ padding: 0 }}>
          <li
            className="d-flex justify-content-center text-light"
            style={{ marginTop: "50px" }}
            // onSubmit={handlesubmit}
          >
            <h4>{user?.fullName}</h4>
          </li>
          <li className="d-flex justify-content-center text-light mb-3">
            <p>{user?.role}</p>
          </li>

          <div className="row">
            {Data.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  className="me-3 py-3 col-xl-12 col-lg-12 col-md-5 col-sm-5 col-5 menuhover"
                  key={index}
                >
                  <NavLink to={item.path}>
                    <img style={{ width: "30px" }} src={item.img} alt="icon" />
                    <h5
                      className=" d-inline "
                      // style={{ color: isActive ? "#bdd0fb" : "white" }}
                    >
                      {item.titel}
                    </h5>
                  </NavLink>
                </NavLink>
              );
            })}

            <Modalllogout />
          </div>
        </ul>
      </Menucard>
    </>
  );
};
export default Menu;
