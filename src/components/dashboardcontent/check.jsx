import React, { useState, useEffect } from "react";
import Loading from "../../components/loading/loading";
import { getItem } from "../../core/services/storage/storage";
import { GetById } from "../../core/services/api/courseapi/getById.api";
import Navbar3 from "./../header/navbar3";
import Checkout from "./checkout";
import Footer2 from "../../components/footer/footer";

export default function Check() {
  const [stuCourse, setStuCourse] = useState([]);
  const user = JSON.parse(getItem("user"));
  const [s, setLoad] = useState(false);

  const GetStudentId = async () => {
    // setLoad(true);

    // setLoad(false);
    const basketjson = localStorage.getItem("basket");
    const basketList = basketjson ? JSON.parse(basketjson) : [];
    setStuCourse(basketList);
  };

  useEffect(() => {
    GetStudentId();
  }, []);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar3 />
          <div className="container" style={{ margin: "100px auto" }}>
            <Checkout handleCourses={GetStudentId} courses={stuCourse} />
          </div>
          <Footer2 />
        </>
      )}
    </>
  );
}
