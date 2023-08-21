import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  border-radius: 5px;
  font-size: 12px;
  width: 120px;
  height: 40px;
  color: white;
  border: none;
  background: #f25f5c;
  float: none;
  display: table;
  transition: background 0.3s ,color 0.3s!important;
  margin: 0px auto;
  &:hover {
    /* color: #f25f5c;
    background: none;
    border: 1px solid #707070;
    transition: background 0.3s ,color 0.3s!important; */
    color: #fff!important;
    background: #fa9f9d!important;
    transition: background 0.3s ,color 0.3s!important;

  }
`;

export default function ViewButton() {
  return (
    <Link to="/courses">
      {" "}
      <Button type="button">مشاهده دوره ها</Button>
    </Link>
  );
}
