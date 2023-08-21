import React from "react";
import Categorycard from "../../components/LandingComponents/categorycard/categorycard";

// import Footer from "../../components/footer/footer";

// import Navbar from "../../components/header/navbar";
import Herosection from "../../components/LandingComponents/herosection/herosection";

import Newssection3 from "../../components/LandingComponents/newssection/tnews";

// import ForgetForm from "../../components/forget/forget";
// import LoginForm from "../../components/login/login";
// import RigesterForm from "../../components/rigester/rigester";

import Services from "../../components/LandingComponents/services/services";
import Support from "../../components/LandingComponents/support/support";
import Topteacher from "../../components/LandingComponents/teacher/topteacher";
import Topteacherid from "../../components/LandingComponents/teacher/teacher-list";

import CourseList from "../../components/LandingComponents/course/course-list";
// import List from "../../home/list";
import Footer2 from "../../components/footer/footer";
import Navbar2 from "../../components/header/navbar2";

function Landing() {
  return (
    <div className="landing">
      <Navbar2 />
      <Herosection />
      <Services />
      <Categorycard />
      <CourseList />
      {/* <Topteacher /> */}
      <Topteacherid />
      <Newssection3 />
      <Support />
      <Footer2 />
    </div>
  );
}
export default Landing;
