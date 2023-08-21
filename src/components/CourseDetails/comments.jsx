import React from "react";
import { Formik, Form } from "formik";
import Commentitem from "./commentiteme";

const Comments = (props) => {
  const { date, username, comment } = props;
  // if (!comment.length) {
  //   return <h5>نظری ثبت نشده است .</h5>;
  // }
  return (
    <>
      <Formik>
        <Form className="container">
          <div className="row flex-row">
            <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 my-3 nazi2profile">
              <img
                src={"../image/profile.png"}
                alt="profilepicture"
                style={{ width: "100%" }}
              />
            </div>
            {date.slice(0, 10)}
            <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10 col-10">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 card py-2 px-3 my-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <p className="fw-lighter fs-6 text-muted d-inline">
                    <small>{username}</small>
                  </p>
                  <p className="fw-lighter fs-6 text-muted d-inline">
                    <small> ارسال شده در 1401/6/17</small>
                  </p>
                  <p className="my-4 mx-3">{comment}</p>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Comments;

{
  /* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 card py-2 px-3 float-end">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 my-3">
                        <p className="fw-lighter fs-6 text-muted d-inline">
                          <small> Nazanin(مدرس)</small>
                        </p>
                        <p className="fw-lighter fs-6 text-muted d-inline">
                          {" "}
                          <small>|</small>
                        </p>
                        <p className="fw-lighter fs-6 text-muted d-inline">
                          <small> ارسال شده در 1401/6/17</small>
                        </p>

                         <div className="row my-2">
                          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 my-2 me-2 nazi1profile">
                            <img
                              src={"./image/profile.png"}
                              alt="profilepicture"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div className="col-xl-11 col-lg-10 col-md-10 col-sm-11 col-11">
                            <p className="my-4 ">
                              سلام وقت بخیر تا دو هفته آینده
                            </p>
                          </div>
                        </div> 
                      </div>
                    </div> */
}
