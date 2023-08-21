import React from "react";
import { Link } from "react-router-dom";
import { Arrowimage } from "../LandingComponents/newssection/newssection.style";
export function Product(props){
    const data = props.data;
    return (
            
                <div className="row g-0">
                    <div className="col-md-4 col-sm-4 col-xl-12 col-lg-12 col-4 my-1">
                    <img
                        src={data.img}
                        alt="Trendy Pants and Shoes"
                        className="img-fluid "
                    />
                    </div>
                    <div className="col-md-8 col-sm-8 col-xl-12 col-lg-12 col-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {data.titel}
                        </h5>
                        <p className="card-text ">
                            {data.dec}
                        </p>
                        <p className="card-text">
                        <small className="text-muted">اخرین به روز رسانی 12:45 </small>
                        </p>
                        <Link to="/newsdetailetab">
                            <a href="#" className="position-absolute bottom-0 start-0 m-3">
                                <Arrowimage src={data.arow} alt="arrow"></Arrowimage>
                            </a>
                        </Link>
                    </div>
                    </div>
                    
                </div>
            
    );
}
