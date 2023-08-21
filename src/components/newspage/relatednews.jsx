import React from "react";
// import "./coursedetail.css";
// import "./slid.css";

const Relatednews = () => {
  return (
    <>
      <div className="container">
        <div
          className="row position-relative my-4"
          style={{ borderBottom: "1px solid black" }}
        >
          <div
            className="position-absolute top-100 start-50 translate-middle "
            style={{
              width: "106px",
              zIndex: "100",
              backgroundColor: "#F3F3F3",
            }}
          >
            <p className="relatednews ">اخبار مرتبط</p>
          </div>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="horizontal_slider">
            <div className="slider_container">
              <div className="item">
                <div class="card text-center  m-2 p-2">
                  <img
                    src={"./image/undraw_learning_sketching_nd4f.png"}
                    alt="'"
                    style={{ width: "100%" }}
                  ></img>
                  <div class="card-body">
                    <h6 class="card-title ">معرفی استاد جدید ریکت</h6>
                    <div class="my-2 text-muted">2 روز پیش</div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div class="card text-center  m-2 p-2">
                  <img
                    src={"./image/undraw_learning_sketching_nd4f.png"}
                    alt="'"
                    style={{ width: "100%" }}
                  ></img>
                  <div class="card-body">
                    <h6 class="card-title ">معرفی استاد جدید ریکت</h6>
                    <div class="my-2 text-muted">2 روز پیش</div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div class="card text-center  m-2 p-2">
                  <img
                    src={"./image/undraw_learning_sketching_nd4f.png"}
                    alt="'"
                    style={{ width: "100%" }}
                  ></img>
                  <div class="card-body">
                    <h6 class="card-title ">معرفی استاد جدید ریکت</h6>
                    <div class="my-2 text-muted">2 روز پیش</div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div class="card text-center  m-2 p-2">
                  <img
                    src={"./image/undraw_learning_sketching_nd4f.png"}
                    alt="'"
                    style={{ width: "100%" }}
                  ></img>
                  <div class="card-body">
                    <h6 class="card-title ">معرفی استاد جدید ریکت</h6>
                    <div class="my-2 text-muted">2 روز پیش</div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div class="card text-center  m-2 p-2">
                  <img
                    src={"./image/undraw_learning_sketching_nd4f.png"}
                    alt="'"
                    style={{ width: "100%" }}
                  ></img>
                  <div class="card-body">
                    <h6 class="card-title ">معرفی استاد جدید ریکت</h6>
                    <div class="my-2 text-muted">2 روز پیش</div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div class="card text-center  m-2 p-2">
                  <img
                    src={"./image/undraw_learning_sketching_nd4f.png"}
                    alt="'"
                    style={{ width: "100%" }}
                  ></img>
                  <div class="card-body">
                    <h6 class="card-title ">معرفی استاد جدید ریکت</h6>
                    <div class="my-2 text-muted">2 روز پیش</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /////////////////////////////////////////////////////////////// */}
        </div>
      </div>
    </>
  );
};
export default Relatednews;
