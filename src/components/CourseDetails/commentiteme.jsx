import React from "react";

const Commentitem = ({comment,username}) =>{

  return (
    <>
      <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 my-3 nazi2profile">
        <img
          src={"../image/profile.png"}
          alt="profilepicture"
          style={{ width: "100%" }}
        />
      </div>
        <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10 col-10">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 card py-2 px-3 my-3">
             <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <p className="fw-lighter fs-6 text-muted d-inline">
                  <small>{username}</small>
                </p>
                <p className="fw-lighter fs-6 text-muted d-inline">
                  <small> ارسال شده در 1401/6/17</small>
                </p>
                <p className="my-4 mx-3">
                  {comment}
                </p>
              </div>
          </div>

        </div>
      </>  
    );
  }


export default Commentitem;