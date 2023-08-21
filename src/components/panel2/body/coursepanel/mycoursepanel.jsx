
  import React, { useState, useEffect } from "react";
  import { getItem } from "../../../../core/services/storage/storage";
  import { GetById } from "../../../../core/services/api/courseapi/getById.api";
  import Courseslist from "../../../mycourse/mycourse";
  import "../bodypanel.css";
  import Menu from "../../menu/menu";
  import Navbar3 from "../../../header/navbar3";
  
  const MyCoursepanel = () => {
    const [stuCourse, setStuCourse] = useState([]);
    const user = JSON.parse(getItem("user"));
    const [s, setLoad] = useState(false);
  
    const GetStudentId = async () => {
      setLoad(true);
      setStuCourse(await GetById(user._id));
      setLoad(false);
    };
  
    useEffect(() => {
      GetStudentId();
    }, []);
  
    return (
      <>
      <Navbar3 />
      <div className="container mt-5 pt-5 panelcontainer">
        <div className="row">
          <Menu />
          <div className="col-xl-8 col-lg-8 col-md-12 card  panelcard">
          <Courseslist handleCourses={GetStudentId} courses={stuCourse.courses} />
          </div>
        </div>
      </div>
    </>
    );
  };
  
  export default MyCoursepanel;
