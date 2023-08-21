import React from "react";

import "../courseslist/courslist.css";

import { useState } from "react";
import { getItem } from "../../core/services/storage/storage";
import { paginate } from "./../../common/pagination/paginate";
import Pagination from "../../common/pagination/pagination";
import { DeleteStuOfCourse } from "../../core/services/api/courseapi/Deletcourse.api";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import SearchPn from "../../common/searchPanel";

import { ButtonA } from "../header/navbar.style";
import { Link } from "react-router-dom";

const Courseslist = (props) => {
  const { courses, handleCourses } = props;
  const [pageSize] = useState(3);
  const [currentPage, setcurrentPage] = useState(1);
  const [search, setSearch] = useState([]);
  const user = JSON.parse(getItem("user"));

  ///searchCourse
  const CourseSearchFil = courses?.filter((val) => {
    if (val.title.includes(search)) {
      return val;
    }
  });

  ///deletCourse
  const DeletCourse = async (id) => {
    const obj = { courseId: id, userId: user._id };
    const result = await DeleteStuOfCourse(obj);
    result.message[0].eventId == 200
      ? toast.success("دوره با موفقیت حذف شد")
      : toast.error("دوره حذف نشد");
    handleCourses();
  };
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };
  const coursesValu = paginate(CourseSearchFil, currentPage, pageSize);
  return (
    <>
      <div className="container position-relative">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-5">
          <div className=" d-flex justify-content-center ">
            <div>
              <h4> لیست دوره ها </h4>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className=" d-flex justify-content-center">
              <div className="listsearch">
                <SearchPn onChange={(e) => setSearch(e.target.value)} />
              </div>
            </div>
            {/* <table className="table" dir="rtl"> */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-5 listp ">
              <ul className="listhead d-flex justify-content-around">
                <li className="text-light">تصویر</li>
                <li className="text-light">نام دوره</li>
                <li className="text-light">مدرس</li>

                <li className="text-light">تاریخ شروع</li>
                <li className="text-light">تاریخ پایان</li>
                <li className="text-light">حذف</li>
                <li className="text-light">بیشتر</li>
              </ul>
              <div>
                {coursesValu.map((course) => (
                  <ul
                    key={course?._id}
                    className="listrow d-flex justify-content-around"
                  >
                    <li>
                      <img
                        src={course?.lesson.image}
                        alt="coursitems"
                        style={{ width: "50px", height: "50px" }}
                      ></img>
                    </li>

                    <li>{course.title}</li>
                    <li>{course?.teacher.fullName}</li>
                    <li>{course?.startDate.slice(0, 10)}</li>
                    <li>{course?.endDate.slice(0, 10)}</li>
                    <li>
                      <img
                        variant="danger"
                        onClick={() => DeletCourse(course._id)}
                        alt="_"
                        src="image/minus.png"
                        style={{
                          width: "30px",
                          height: "30px",
                          cursor: "pointer",
                        }}
                      ></img>
                      <ToastContainer />
                    </li>
                    <li>
                      <Link to={"/coursedetailes/" + course._id}>
                        <img
                          src="image/left-arrow.png"
                          alt="flesh"
                          style={{ width: "20px", height: "20px" }}
                        ></img>
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            {/* </table> */}

            {coursesValu.length > 0 ? (
              ""
            ) : (
              <>
                <div className=" d-flex justify-content-center">
                  <p>هنوز در دوره ای شرکت نکردید </p>
                </div>

                <div className=" d-flex justify-content-center">
                  <p>ایا مایل به شرکت در دوره ای هستید؟</p>
                </div>
                <div className=" d-flex justify-content-center">
                  <Link to="/courses" className="link-light">
                    <ButtonA type="button" className="btn text-light px-3">
                      رفتن به دوره ها
                    </ButtonA>
                  </Link>
                </div>
              </>
            )}

            <div>
              <Pagination
                itemsCount={CourseSearchFil?.length}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Courseslist;
