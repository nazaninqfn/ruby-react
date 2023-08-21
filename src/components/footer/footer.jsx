import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";
import React from "react";
import { Listdote } from "../as/rigester/buttons";
import "../button/hover.css";
import {
  Footcontainer,
  //   Circletag,
  Alink,
  //   Text,
  //   Submit,
  // Email, Footformdiv Contact, Links,
} from "./footer.style";
import "./footerrisponsiv.css";
// import Map from "./map/map";
// import SimpleMap from './googlemap';

export default function Footer() {
  return (
    <Footcontainer>
      <div className="container">
        <div className="row ">
          <div className="col-xl-4 col-lg-4 col-md-6 p-5">
            <h5 className="text-light  mb-4">لینک ها</h5>
            <div className="my-2">
              <Listdote />
              <Alink href="/" className="text-light me-2">
                صفحه اصلی
              </Alink>
            </div>
            <div className="my-2">
              <Listdote />
              <Alink href="/courses" className="text-light me-2">
                دوره ها
              </Alink>
            </div>
            <div className="my-2">
              <Listdote />
              <Alink href="" className="text-light me-2">
                کیف پول
              </Alink>
            </div>
            <div className="my-2">
              <Listdote />
              <Alink href="#!" className="text-light me-2">
                خدمات
              </Alink>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 p-5" id="call">
            <h5 className="text-light fw-bold mb-4 ">ارتباط با ما</h5>
            <p className="text-light">
              <img
                src="../image/icons-1.png"
                alt="fi"
                className="ms-2 mb-1"
                style={{ width: 20 }}
              />
              + 01 234 567 88
            </p>

            <p className="text-light">
              <img
                src="/image/icons8-email-open-50.png"
                alt="fi"
                className="ms-2 mb-1"
                style={{ width: 20 }}
              />
              info@example.com
            </p>

            <a href="https://maps.windows.com/?form=WNAMSH&collection=point.36.597632_53.06462_Point">
              <img
                src="../image/location.png"
                alt="fi"
                className="ms-2 mb-1"
                style={{ width: 20 }}
              />
              <h6 className="flink">
                ساری، میدان خزر، نرسیده به روزبهان ، جنب دنیای آرزو، ساختمان
                سپهر(جنب املاک ملایی)، طبقه اول پژوهشگاه سپهر
              </h6>
            </a>
            <div>{/* <Map/> */}</div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 p-5">
            <div className=" d-flex justify-content-center">
              <div>
                <p className="text-light">
                  برای دریافت اخبار از طریق ایمیل ثبت نام کنید
                </p>
                <MDBInputGroup
                  tag="form"
                  className="d-flex flex-row-reverse w-auto my-4 "
                >
                  <input
                    className="form-control"
                    placeholder="csnazanin@gmail.com"
                    aria-label="Search"
                    type="Search"
                  />
                  <MDBBtn
                    inline
                    className="redhover"
                    style={{
                      background: "#F25F5C",
                      border: "1px solid #F25F5C",
                    }}
                  >
                    <span className="text-light">ارسال</span>
                  </MDBBtn>
                </MDBInputGroup>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Footcontainer>
  );
}
