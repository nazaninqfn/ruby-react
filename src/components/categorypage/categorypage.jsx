import React, { useState, useEffect } from "react";
// import ListSection from "./coursegrids/listsection";
import Footer2 from "../../components/footer/footer";

import {
// Img,
Container,
Im,
Input,
// Button,
// Image,
Form,
H,
Img,
// Image,
} from "../coursepage/coursepage.style";
import Pagination from "../pagination/pagination";

import {
MDBTabs,
MDBTabsItem,
MDBTabsLink,
MDBTabsContent,
MDBTabsPane,
} from "mdb-react-ui-kit";
import {
MDBDropdown,
MDBDropdownMenu,
MDBDropdownToggle,
MDBDropdownItem,
} from "mdb-react-ui-kit";
// import CourseGrid from "./coursegrids/coursegrid";
// import "./coursepage.css";
import "../coursepage/coursepage.css";

import Navbar4 from "../header/navbar4";
import Loading from "../../components/loading/loading";
import { Link } from "react-router-dom";
import { Button, Cardcapacity, H4, H6, Image,  } from "../dashboardcontent/dashboardcontent.style";
import { ProgressBar } from "react-bootstrap";
import { Arrowimage } from "../LandingComponents/newssection/newssection.style";
import Slider from "../dashboardcontent/slider";
import { NewsContentcategory } from "./categorynews";

export default function Categorypage() {
const [basicActive, setBasicActive] = useState("tab1");

const handleBasicClick = (value) => {
    if (value === basicActive) {
    return;
    }

    setBasicActive(value);
};
const [isLoading, setLoading] = useState(true);
useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
}, []);
return (
    <>
    {" "}
    {isLoading ? (
        <Loading />
    ) : (
        <Container claasNameName="container">
        <Navbar4 />{" "}
        <Img
            src="../assets/image/web.png"
            style={{ marginTop: "3rem" ,paddingTop:"3rem"}}
        ></Img>
        <H>وب</H>
        <div className="container   mt-5">
            {" "}
            <div className="row  px-2">
                
                    {" "}
                    <span className="col-lg-2 col-4">دوره های مربوطه</span>

                    <Link to="/mycoursepanel"className="col-1 ">
                    {" "}
                        <Arrowimage src="./image/icons8-left-arrow-50.png" alt="arrow"></Arrowimage>
                    </Link>
                    
            </div>

            <div className="row px-2">
            <div class="col-md-4 col-sm-12 mt-2 p-2">
                

        
                <Cardcapacity className="card">
                    <div class="card-body d-flex">
                    <div className="col-md-5 col-xl-5">
                        <div
                        style={{
                            background: " #f3f3f3",
                            height: "100%",
                            borderRadius: "5px",
                        }}
                        >
                        {" "}
                        <Image src="./image/1.png"></Image>
                        </div>
                    </div>
                    <div className="col-md-8 mx-2">
                        <H4 class="card-title">دوره آموزش ریکت</H4>
                        <H6 className="card-subtitle mb-2 ">مدرس:آرمین ساکت</H6>
                        <H6 className="card-text">قیمت دوره:750000 تومان</H6>{" "}
                        <H6 className="card-text">تاریخ شروع:1400/10/13</H6>{" "}
                        <H6 className="card-text d-flex">
                        ظرفیت:75%
                        <div>
                            <ProgressBar
                            now={75}
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
                        </H6>
                        <img
                        src="./image/star.png"
                        style={{ width: "15px", marginLeft: "3px" }}
                        />
                        <img
                        src="./image/star.png"
                        style={{ width: "15px", marginLeft: "3px" }}
                        />
                        <img
                        src="./image/star.png"
                        style={{ width: "15px", marginLeft: "3px" }}
                        />
                        <Link to="/coursedetail">
                        {" "}
                        <Button class="btn">مشاهده</Button>
                        </Link>
                    </div>
                    </div>
                </Cardcapacity>
            
            </div>
            <div class="col-md-4 col-sm-12 mt-2 p-2">
                

        
                <Cardcapacity className="card">
                    <div class="card-body d-flex">
                    <div className="col-md-5 col-xl-5">
                        <div
                        style={{
                            background: " #f3f3f3",
                            height: "100%",
                            borderRadius: "5px",
                        }}
                        >
                        {" "}
                        <Image src="./image/1.png"></Image>
                        </div>
                    </div>
                    <div className="col-md-8 mx-2">
                        <H4 class="card-title">دوره آموزش ریکت</H4>
                        <H6 className="card-subtitle mb-2 ">مدرس:آرمین ساکت</H6>
                        <H6 className="card-text">قیمت دوره:750000 تومان</H6>{" "}
                        <H6 className="card-text">تاریخ شروع:1400/10/13</H6>{" "}
                        <H6 className="card-text d-flex">
                        ظرفیت:75%
                        <div>
                            <ProgressBar
                            now={75}
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
                        </H6>
                        <img
                        src="./image/star.png"
                        style={{ width: "15px", marginLeft: "3px" }}
                        />
                        <img
                        src="./image/star.png"
                        style={{ width: "15px", marginLeft: "3px" }}
                        />
                        <img
                        src="./image/star.png"
                        style={{ width: "15px", marginLeft: "3px" }}
                        />
                        <Link to="/coursedetail">
                        {" "}
                        <Button class="btn">مشاهده</Button>
                        </Link>
                    </div>
                    </div>
                </Cardcapacity>
            
            </div>
            <div class="col-md-4 col-sm-12 mt-2 p-2">
            

        
                <Cardcapacity className="card">
                    <div class="card-body d-flex">
                    <div className="col-md-5 col-xl-5">
                        <div
                        style={{
                            background: " #f3f3f3",
                            height: "100%",
                            borderRadius: "5px",
                        }}
                        >
                        {" "}
                        <Image src="./image/1.png"></Image>
                        </div>
                    </div>
                    <div className="col-md-8 mx-2">
                        <H4 class="card-title">دوره آموزش ریکت</H4>
                        <H6 className="card-subtitle mb-2 ">مدرس:آرمین ساکت</H6>
                        <H6 className="card-text">قیمت دوره:750000 تومان</H6>{" "}
                        <H6 className="card-text">تاریخ شروع:1400/10/13</H6>{" "}
                        <H6 className="card-text d-flex">
                        ظرفیت:75%
                        <div>
                            <ProgressBar
                            now={75}
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
                        </H6>
                        <img
                        src="./image/star.png"
                        style={{ width: "15px", marginLeft: "3px" }}
                        />
                        <img
                        src="./image/star.png"
                        style={{ width: "15px", marginLeft: "3px" }}
                        />
                        <img
                        src="./image/star.png"
                        style={{ width: "15px", marginLeft: "3px" }}
                        />
                        <Link to="/coursedetail">
                        {" "}
                        <Button class="btn">مشاهده</Button>
                        </Link>
                    </div>
                    </div>
                </Cardcapacity>
            
            </div>
            </div>

            <div className="row mt-5 pt-5 px-2">
                
                    {" "}
                    <span className="col-lg-2 col-4"> اساتید مربوطه</span>

                    <Link to="/mycoursepanel"className="col-1">
                    {" "}
                        <Arrowimage src="./image/icons8-left-arrow-50.png" alt="arrow"></Arrowimage>
                    </Link>
                    
            </div>
            
            <div className="row ">
                
                <Slider />
                {" "}
            </div>

            <div className="row mt-5 pt-5 px-2">
                
                    {" "}
                    <span className="col-lg-2 col-4"> اخبار و مقالات مربوطه</span>

                    <Link to="/mycoursepanel"className="col-1">
                    {" "}
                        <Arrowimage src="./image/icons8-left-arrow-50.png" alt="arrow"></Arrowimage>
                    </Link>
            </div>
            <div className="row">
                <NewsContentcategory/>
            </div>
            
            
            <div>
            {" "}
            
            </div>
            
        </div>
        
        
        <Footer2 />
        </Container>
    )}
    </>
);
}
