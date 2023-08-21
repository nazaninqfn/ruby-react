import React from "react";
import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";

const SearchPn = (props) => {
  return (
    <MDBInputGroup tag="form" className="d-flex flex-row-reverse w-auto my-4 ">
      <MDBBtn
        inline
        style={{
          background: "#5254fb",
          border: "1px solid #5254fb",
          height: "35px",
        }}
      >
        <img
          src={"../image/icons8-search-50 (1).png"}
          alt="search"
          style={{ width: "17px" }}
        />
      </MDBBtn>
      <input
        className="form-control"
        placeholder="جستجوی دوره..."
        aria-label="Search"
        type="Search"
        onChange={props.onChange}
      />
    </MDBInputGroup>
  );
};

export default SearchPn;
