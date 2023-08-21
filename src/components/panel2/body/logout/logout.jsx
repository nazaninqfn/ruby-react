import React from "react";
import "../bodypanel.css";

import { clearStorage, getItem } from "../../../../core/services/storage/storage";
import { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { ButtonA, ButtonB } from "../../../header/navbar.style";

export default function Logout(){
const navigate=useNavigate();
const usertoken=getItem("token");
const rolstudents=JSON.parse(getItem("user"));
const [user,setuser] = useState(usertoken?true:false);

const onSubmit = async() => {

    const logout=await clearStorage(user);
    if(logout){navigate("/");}
  }




  return (
    <>
      
      
        <div className="row">
          <p className="d-flex justify-content-center">
            ایا میخواهید از حساب کاربری خود خارج شوید؟
          </p>
          <div className="d-flex justify-content-center" onClick={onsubmit}>
            
            <NavLink to="/">
              <ButtonA onClick={()=>{setuser(false);clearStorage();}} type="button" className="btn text-light mx-2 px-4 "> خروج از حساب کاربری</ButtonA>

            </NavLink>

            
          </div>
        </div>
    
    </>
  );
}
