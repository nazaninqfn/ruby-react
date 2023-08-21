import React from "react";

import "../bodypanel.css"


import Menu from "../../menu/menu";
import Navbar3 from "../../../header/navbar3";
import Editprofile from "./editprofile";


const Edit = () => {
return(
    <> 
    <Navbar3/>
    <div className="container mt-5 pt-5 panelcontainer">
        <div className="row">
            <Menu/>
            <div className="col-xl-8 col-lg-8 col-md-12 card  panelcard" >
                <Editprofile/>
            </div>
        </div>
        
    </div>


    </>
);
};
export default Edit;