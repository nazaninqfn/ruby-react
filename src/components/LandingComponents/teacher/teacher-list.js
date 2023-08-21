import React from "react";
import Topteacher from "./topteacher";
import { useState } from "react";

import { useEffect } from "react";
import getteacherapi from "../../../core/services/api/topteacherid/topteacher.api.js";

export default function Topteacherid() {
  const [allteacher, setallteacher] = useState([]);

  const getteacherApi = async () => {
    const allteacher = await getteacherapi();
    const teacher1 = allteacher.slice(0, 3);
    setallteacher(teacher1);
    console.log(teacher1);
  };

  useEffect(() => {
    getteacherApi();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2 style={{ textAlign: "center" }} className="mt-5">
          اساتید برتر
        </h2>
        <div className="d-flex justify-content-center">
          <div className="row g-0 container d-flex justify-content-center ">
            {" "}
            {allteacher.map((item) => (
              <Topteacher fullName={item.fullName} image={item.profile} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
