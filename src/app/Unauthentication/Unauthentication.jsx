import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Error from "../../components/as/error/error";
import Coursepage from "../../components/coursepage/coursepage";

import ForgetForm from "../../components/as/forget/forget";
import LoginForm from "../../components/as/login/login";

import Rigester from "../../components/as/rigester/rigester";
import Commentinput from "../../components/CourseDetails/comentinput";
import Comments from "../../components/CourseDetails/comments";
import CourseDetailsTab from "../../components/CourseDetails/coursedetails";
import Newsdetaile from "../../components/newspage/newsdetaile";
import NewsDetailsTab from "../../components/newspage/newsdetailetab";

import Newspage from "../../components/newspage/newspage";
import Landing from "../../screens/landing/landing";

import Loading from "../../components/loading/loading";
import Categorypage from "../../components/categorypage/categorypage";
import Check from "../../components/dashboardcontent/check";
import LoginAdmin from "../../components/as/login/loginAdmin";

function Unathentication() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/rigester" element={<Rigester />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/loginEmployee" element={<LoginAdmin />} />

            <Route path="/forget" element={<ForgetForm />} />

            <Route path="/newspage" element={<Newspage />} />
            <Route exact path="/courses" element={<Coursepage />} />

            <Route path="/coursedetailes/:_id" element={<CourseDetailsTab />} />
            <Route path="/Newsdetaile" element={<Newsdetaile />} />
            <Route path="/comentinput" element={<Commentinput />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/newsdetailetab/:_id" element={<NewsDetailsTab />} />
            <Route path="/coursedetail" element={<CourseDetailsTab />} />
            {/* <Route path="/panelPage" element={<AllCollapseExample />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/edit" element={<Edit />} /> */}
            {/* <Route path="/coursepanel" element={< Courselistpanel/>}/> */}
            {/* <Route path="/coursepanellist" element={<ListCourse />} /> */}
            {/* <Route path="/mycoursepanel" element={<MyCoursepanel />} /> */}
            {/* <Route path="/buycourse" element={<  BuyCoursepanel/>}/> */}
            {/* <Route path="/logout" element={<Logout />} /> */}
            <Route path="/categorypage" element={<Categorypage />} />
            <Route path="/check" element={<Check />} />

            {/* <Route path="/bodytemplate" element={<Bodytemplate/>}/> */}

            <Route path="/error" element={<Error />} />

            <Route path="*" element={<Navigate to="error" />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}
export default Unathentication;
