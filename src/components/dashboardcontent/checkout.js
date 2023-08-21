import React, { useState, useEffect } from "react";
import ViewButton from "../button/vie-button";
import SubmitButton from "../button/sub-button";

import {
  Img,
  H,
  P,
  Div,
  Card,
  Courseimage,
  Dimage,
  Title,
  Teacher,
  Price,
  Capacity,
  Span,
  Meter,
  Button,
  But,
} from "./checkout.style";
import { getItem } from "../../core/services/storage/storage";
import { paginate } from "./../../common/pagination/paginate";
import AddCourse from "../../core/services/api/addtoterm/addtoterm";
import { Link } from "react-router-dom";

import ProgressBar from "react-bootstrap/ProgressBar";

export default function Checkout(props) {
  const [isLoading, setLoading] = useState(true);

  const { courses, handleCourses } = props;
  const [pageSize] = useState(3);
  const [currentPage, setcurrentPage] = useState(1);
  const [search, setSearch] = useState([]);
  const [changeFlag, setChangeFlag] = useState(false);
  const user = JSON.parse(getItem("user"));

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    let sum = 0;
    courses.map((item) => {
      sum += item.cost;
    });
    setTotal(sum);
  }, [changeFlag]);

  ///searchCourse
  const CourseSearchFil = courses?.filter((val) => {
    if (val.title.includes(search)) {
      return val;
    }
  });

  ///deletCourse
  const DeletCourse = async (_id) => {
    // const obj = { courseId: id, userId: user._id };
    const basketjson = localStorage.getItem("basket");
    const basketList = basketjson ? JSON.parse(basketjson) : [];
    const updateList = basketList.filter((item) => item._id !== _id);
    localStorage.setItem("basket", JSON.stringify(updateList));

    // const result = await DeleteStuOfCourse(obj);
    // result.message[0].eventId == 200
    //   ? toast.success("دوره با موفقیت حذف شد")
    //   : toast.error("دوره حذف نشد");
    handleCourses();
    setChangeFlag((old) => !old);
  };
  const finalpay = async () => {
    await courses.map(async (item) => {
      let courses = await AddCourse(item._id);
    });
    localStorage.removeItem("basket");
    handleCourses();
    setChangeFlag((old) => !old);
  };
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };
  const coursesValu = paginate(CourseSearchFil, currentPage, pageSize);

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center ">
          <div className="row g-0 container d-flex justify-content-center ">
            <div className="col-xxl-5 col-xl-5 col-lg-6  mx-4 my-4">
              {" "}
              {coursesValu.map((course) => (
                <Card
                  className="card d-flex flex-row justify-content-around m-4"
                  key={course?._id}
                >
                  <Dimage className="col-md-5">
                    <Courseimage
                      className="mt-3"
                      src={course?.lesson.image}
                      alt="news"
                    ></Courseimage>
                  </Dimage>
                  <Div className="col-md-5">
                    <Title className="card-title">{course.title}</Title>
                    <Teacher>مدرس:{course?.teacher.fullName}</Teacher>
                    <Price>قیمت دوره:{course.cost}تومان</Price>
                    <Capacity className="gridst">
                      <Span>ظرفیت:{course.capacity}%</Span>
                      <Meter>
                        <div>
                          <ProgressBar
                            variant="danger"
                            now={course.capacity}
                            style={{
                              height: "12px",
                              borderRadius: "5px",
                              direction: "ltr",
                              width: "80px",
                              background: "#fa9f9d",
                              marginRight: "3px",
                            }}
                          />
                        </div>
                      </Meter>
                    </Capacity>
                    <Link to={"/coursedetailes/" + course._id}>
                      {" "}
                      <But class="btn">مشاهده</But>
                    </Link>
                  </Div>
                  <div className="col-md-2">
                    <img
                      variant="danger"
                      onClick={() => DeletCourse(course._id)}
                      alt="_"
                      src="./image/icons8-trash-64.png"
                      style={{
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                        margin: "100px auto",
                      }}
                    />
                  </div>
                </Card>
              ))}
            </div>

            {coursesValu.length > 0 && (
              <div className="col-xxl-4 col-xl-4 col-lg-6  mx-4 my-4">
                <Card className="p-5 m-4" style={{ borderRadius: "15px" }}>
                  <h5>سفارش شما</h5>
                  <div className="d-flex justify-content-between mt-4">
                    <span>هزینه‌ی دوره ها</span>
                    <span>{total}تومان</span>
                  </div>
                  <div
                    className=" mx-6 mb-4 mt-4"
                    style={{ border: "1px solid rgb(240, 237 ,240)" }}
                  ></div>
                  <div className="d-flex justify-content-between mt-4">
                    <span>مبلغ قابل پرداخت</span>
                    <span>{total}تومان</span>
                  </div>
                  <Button onClick={finalpay}>خرید نهایی</Button>
                </Card>
              </div>
            )}
          </div>
        </div>
        {coursesValu.length > 0 ? (
          ""
        ) : (
          <>
            <Img src="./image/animation_640_l8hvgvuw.gif"></Img>
            <H>سبد خرید شما خالی است.</H>
            <P className="text-muted">
              می‌توانید با مراجعه به فهرست دوره ها، دوره مورد نظر خود را انتخاب
              کنید.
            </P>
            <ViewButton />
          </>
        )}
      </div>
    </>
  );
}
