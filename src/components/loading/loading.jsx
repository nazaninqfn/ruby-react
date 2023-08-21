import React from "react";
import styled from "styled-components";
export const Img = styled.img`
  margin: 0px auto;
  display: block;
  @media screen and (max-width: 576px) {
    width: 400px;
  }
`;
export const Div = styled.div``;

export default function Loading() {
  return (
    <div className="loader">
      <Div className="container">
        <Img src="/image/animation_640_l8aljhl2.gif"></Img>
      </Div>
    </div>
  );
}
