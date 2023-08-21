import React, { useState, useEffect } from "react";
import { Listdote } from "../as/rigester/buttons";
import "./newsdetail.css";
import "./slider.css";

const Newsdetaile = ({ title, text, image }) => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 ">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                <h3 className="fw-lighter">{title}</h3>
              </div>
            </div>
            <div className="col-xl-8 col-md-12 my-5">
              <p className="fw-lighter">{text}</p>
            </div>
            <div className="my-5">
              <p className="fw-bold"> اطلاعات بیشتر:</p>
              <div className="my-3">
                <Listdote />
                <p className="fw-bold d-inline"> تاریخ انتشار خبر:</p>
                <p className="fw-lighter d-inline">1401/6/19</p>
              </div>
              <div className="my-3">
                <Listdote />
                <p className="fw-bold d-inline"> دسته بندی:</p>
                <p className="fw-lighter d-inline">مقاله</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 nazinewspic">
            <img src={image} style={{ width: "100%" }} alt="," />
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsdetaile;
