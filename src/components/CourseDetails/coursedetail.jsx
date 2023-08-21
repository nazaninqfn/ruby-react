import React from "react";
import "./coursedetail.css";
import "./slid.css";
import styled from "styled-components";

export const Div = styled.a`
  background: #f25f5c;
  margin-right: 5px;
  color: white;
  border-radius: 5px;
  font-size: 10px;
  padding: 5px;
  text-decoration: none;
`;
export const Button = styled.button`
  border-radius: 5px;
  font-size: 12px;
  width: 120px;
  height: 35px;
  color: white;
  border: none;
  background: #f25f5c;
  margin-top: 30px;

  &:hover {
    color: #f25f5c;
    background: none;
    border: 1px solid #707070;
  }
`;
const Coursedetail = ({title,image,teacher,cost,startDate,endDate,capacity ,like}) => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                
                <h3 className="fw-lighter">{title}</h3>
              </div>
              {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 px-5">
                <p className="fw-bold"> مدرس دوره</p>
                <p className="fw-lighter">آرمین ساکت</p>
              </div> */}
            </div>
            <div className="col-xl-8 col-md-12 my-3 Divtitle">
              {/* <p className="fw-bold "> درباره دوره</p> */}
              <p className="fw-lighter">
                {""}
              </p>
            </div>
            <div className="my-5 Ddiscription">
              <p className="fw-bold"> اطلاعات بیشتر:</p>
              <div className="my-3">
                <img src={image} style={{ width: "20px" }} />
                <p className="fw-bold d-inline">  مدرس دوره:</p>
                <p className="fw-lighter d-inline">{teacher}</p>
                
              
              </div>
              <div className="my-3">
                <img src="./image/download.png" style={{ width: "20px" }} />
                <p className="fw-bold d-inline"> شهریه دوره:</p>
                <p className="fw-lighter d-inline">{cost}</p>
                <Div>
                  {" "}
                  <p className=" d-inline">%20</p>
                </Div>
              </div>
              <div className="my-3">
                <img
                  src="./image/download.png"
                  style={{ width: "20px", marginLeft: "5px" }}
                />
                <p className="fw-bold d-inline">ترم ارائه شده دوره:</p>
                <p className="fw-lighter d-inline">تابستان</p>
              </div>
              <div className="my-3">
                <img
                  src="./image/download.png"
                  style={{ width: "20px", marginLeft: "5px" }}
                />
                <p className="fw-bold d-inline">تاریخ شروع دوره:</p>
                <p className="fw-lighter d-inline">{startDate}</p>
              </div>
              <div className="my-3">
                <img
                  src="./image/download.png"
                  style={{ width: "20px", marginLeft: "5px" }}
                />
                <p className="fw-bold d-inline">تاریخ پایان دوره:</p>
                <p className="fw-lighter d-inline">{endDate}</p>
              </div>
              <div className="my-3">
                <img
                  src="./image/download.png"
                  style={{ width: "20px", marginLeft: "5px" }}
                />
                <p className="fw-bold d-inline">ظرفیت دوره:</p>
                <p className="fw-lighter d-inline">{capacity}</p>
              </div>
              <div className="my-3">
                <img
                  src="./image/download.png"
                  style={{ width: "20px", marginLeft: "5px" }}
                />
                <p className="fw-bold d-inline">تعداد دانشجویان دوره:</p>
                <p className="fw-lighter d-inline">40نفر</p>
              </div>




              <Button>خرید دوره</Button>


              
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 nazinewspic">
            <img
              src={"./image/Group 1105.png"}
              style={{ width: "100%" }}
              alt=","
            />
          </div>
        </div>

        

      </div>
    </>
  );
};
export default Coursedetail;
