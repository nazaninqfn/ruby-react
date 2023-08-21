import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  font-size: 12px;
  width: 90px;
  height: 35px;
  color: white;
  border: none;
  background: #f25f5c;
  float: none;
  display: table;

  margin: 20px auto;
  &:hover {
    color: #f25f5c;
    background: none;
    border: 1px solid #707070;
  }
`;

export default function SendButton() {
  return <Button type="button">ارسال</Button>;
}
