import React, { useState, useEffect } from "react";
import { getItem } from "../../../../core/services/storage/storage";
import { GetById } from "../../../../core/services/api/courseapi/getById.api";
import "../bodypanel.css";
import Menu from "../../menu/menu";
import Navbar3 from "../../../header/navbar3";
import Courselistpanel from "./coursepanellist";
import getAllCourseApi from "../../../../core/services/api/courseapi/course1.api";

const ListCourse = () => {
  const [course1, setCour] = useState([]);
  const [stuCourse, setStuCourse] = useState([]);
  const user = JSON.parse(getItem("user"));
  const [s, setLoad] = useState(false);

  const GetCour = async () => {
    setCour(await getAllCourseApi());
  };
  const GetStudentId = async () => {
    setStuCourse(await GetById(user._id));
  };

  useEffect(() => {
    setLoad(true);
    GetCour();
    GetStudentId();
    setLoad(false);
  }, []);
  return (
    <>
      <Navbar3 />
      <div className="container mt-5 pt-5 panelcontainer">
        <div className="row">
          <Menu />
          <div className="col-xl-8 col-lg-8 col-md-12 card  panelcard">
            <Courselistpanel
              handleCourse={GetStudentId}
              student={stuCourse.courses}
              courses={course1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCourse;
