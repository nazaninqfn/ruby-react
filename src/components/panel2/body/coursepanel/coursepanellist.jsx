import React from "react";
import "../bodypanel.css";
import { useState } from "react";
import { AddStuToCourse } from "../../../../core/services/api/courseapi/AddStu.api";
import { getItem } from "../../../../core/services/storage/storage";
import { paginate } from "../../../../common/pagination/paginate";
import Pagination from "../../../../common/pagination/pagination";
import SearchPn from "../../../../common/searchPanel";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Courselistpanel = (props) => {
  const [pageSize] = useState(8);
  const [currentPage, setcurrentPage] = useState(1);
  const [search, setSearch] = useState([]);
  const user = JSON.parse(getItem("user"));
  const { courses, handleCourse } = props;

  const handlePageChange = (page) => {
    setcurrentPage(page);
  };
  ///searchCourse
  const CourseSearchFil = courses?.filter((val) => {
    if (val.title.includes(search)) {
      return val;
    } else if (val.teacher.fullName.includes(search)) {
      return val;
    }
  });

  ///addCourse
  const AddCourse = async (id) => {
    const obj = { courseId: id, userId: user._id };
    const result = await AddStuToCourse(obj);
    if (result.message[0].eventId == 200) toast.success("دوره اضافه شد");
    else toast.error("این دوره خریداری شده است");
    handleCourse();
  };

  const coursesValu = paginate(CourseSearchFil, currentPage, pageSize);

  return (
    <>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-5">
        <div className=" d-flex justify-content-center ">
          <div>
            <h4> لیست دوره ها </h4>
          </div>
        </div>
      </div>

      <div className=" d-flex justify-content-center">
        <div className="listsearch">
          <SearchPn onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 listp">
        <ul className="listhead d-flex justify-content-around">
          <li className="text-light">تصویر</li>
          <li className="text-light">نام دوره</li>
          <li className="text-light">مدرس</li>
          <li className="text-light">تاریخ شروع</li>
          <li className="text-light">قیمت</li>
          <li className="text-light">افزودن</li>
          <li className="text-light"> بیشتر</li>
        </ul>
      </div>
      {coursesValu.map((course) => (
        <div className=" position-relative">
          <div className="d-flex justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  ">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  listp">
                <ul className="listrow d-flex justify-content-around">
                  <li>
                    <img
                      src={course?.lesson.image}
                      alt="coursitems"
                      style={{ width: "50px", height: "50px" }}
                    ></img>
                  </li>
                  <li style={{ fontSize: "15px" }}>{course?.title}</li>
                  <li style={{ fontSize: "15px" }}>
                    {" "}
                    {course?.teacher.fullName}
                  </li>
                  <li>{course?.startDate.slice(0, 10)}</li>
                  {/* <li>{course?.endDate.slice(0, 10)}</li> */}
                  <li>{course.cost}</li>
                  <li>
                    <img
                      variant="primary"
                      onClick={() => AddCourse(course._id)}
                      alt="+"
                      src="image/add.png"
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
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
        <Pagination
          itemsCount={CourseSearchFil?.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};
export default Courselistpanel;
