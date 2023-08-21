import React, { useState, useEffect } from "react";
import Footer2 from "../../components/footer/footer";
import { Img, Container, Image, H } from "./coursepage.style";
import SearchCourse from "../../common/searchcourse";
import { Paginate } from "../pagination/paginate";
import Pagination from "../pagination/pagination";

import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

import "./coursepage.css";
import Navbar4 from "../header/navbar4";
import Loading from "../../components/loading/loading";
import getcourspageApi from "../../core/services/api/courspage/courspage.api";
import CourseGrid from "./coursegrids/coursegrid";
import CourseTest from "./coursetest";

export default function CoursePage() {
  const [basicActive, setBasicActive] = useState("tab1");

  const [course, setCourse] = useState([]);

  const getCourseApi = async () => {
    const course = await getcourspageApi();
    setCourse(course);
    console.log(course);
  };

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    getCourseApi();
  }, []);

  const [q, setQ] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [seleted, setSeleted] = useState([0]);

  const paginatedCourses = Paginate(course, currentPage, pageSize);

  const searchHandler = (e) => {
    setQ(e.target.value);
  };
  const search = (paginatedCourses) => {
    if (q === "") return paginatedCourses;
    else
      return paginatedCourses.filter((course) => course.title.indexOf(q) > -1);
  };

  const onSelect = (item) => {
    setCurrentPage(1);
    setSeleted(item);
  };

  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <Container claasNameName="container">
          <Navbar4 />{" "}
          <Img
            src="../assets/image/20945457.jpg"
            style={{ marginTop: "3rem" }}
          ></Img>
          <H>دوره های آموزشی</H>
          <div className="container  d-flex justify-content-around mt-5">
            {" "}
            <MDBTabs className="cdf">
              <MDBTabsItem>
                <MDBTabsLink
                  className="hh"
                  onClick={() => handleBasicClick("tab1")}
                  active={basicActive === "tab1"}
                >
                  <Image src="../assets/image/icons8-grid-50.png" />
                </MDBTabsLink>
              </MDBTabsItem>

              <MDBTabsItem>
                <MDBTabsLink
                  className="hh"
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                >
                  <Image src="../assets/image/36.png" />
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
            <div>
              <SearchCourse value={q} onChange={searchHandler} />
            </div>
            <div className="mt-2" sm={4}>
              <select
                style={{
                  border: "2px solid blue",
                  borderRadius: "5px",
                  padding: "5px 15px",
                }}
                onChange={(e) => {
                  setPageSize(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="16">16</option>
              </select>
            </div>
          </div>
          <div>
            {" "}
            <MDBTabsContent>
              <MDBTabsPane show={basicActive === "tab1"}>
                {/* <ListSection courses={course} /> */}
                <div className="container">
                  <div className="row d-flex justify-content-center">
                    {search(paginatedCourses).map((item) => (
                      <div className="col-xl-3 col-lg-4 col-md-6">
                        <CourseTest
                          title={item.title}
                          teacher={item.teacher.fullName}
                          image={item.lesson.image}
                          cost={item.cost}
                          capacity={item.capacity}
                          like={item.like}
                          _id={item._id}
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    className="pagination-background"
                    style={{ margin: "30px auto", display: "table" }}
                  >
                    <Pagination
                      itemsCount={course.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </div>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab2"}>
                <div className="container">
                  <div className="row  d-flex justify-content-center">
                    {" "}
                    {search(paginatedCourses).map((item) => (
                      <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-12 ">
                        <CourseGrid
                          title={item.title}
                          teacher={item.teacher.fullName}
                          image={item.lesson.image}
                          cost={item.cost}
                          capacity={item.capacity}
                          like={item.like}
                          _id={item._id}
                        />
                      </div>
                    ))}{" "}
                  </div>
                  <div
                    className="pagination-background"
                    style={{ margin: "10px auto", display: "table" }}
                  >
                    <Pagination
                      itemsCount={course.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </div>
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
          <Footer2 />
        </Container>
      )}
    </>
  );
}
