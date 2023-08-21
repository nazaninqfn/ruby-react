import styled, { css } from "styled-components";

export const Container = styled.div`
  /* padding-top:150px; */
  display: flex;
  flex-direction: row-reverse;
`;
export const Card = styled.div`
  direction: rtl;
  /* width:300px; */
`;
export const Title = styled.h1`
  color: #5254fb;
  display: inline;
`;
export const Description = styled.p`
  color: #5254fb;
`;
export const Button = styled.button`
  border-radius: 12px;
  color: #5254fb;
  background-color: #ffff;
  border: none;
  width: 150px;
  height: 50px;
  font-size: 10px;
`;

export const colorred = css`
  color: red;
`;

export const Design1 = styled.img`
  width: 100%;
`;
export const Design2 = styled.div`
  width: 100%;
  height: 680px;
  border-radius: 90px;
  transform: translateX(-50px) translateY(-1240px) rotate(22deg);

  background-image: linear-gradient(180deg, #e1e7fd, #4e50fb);
`;

export const Designorg = styled.div`
  width: 100%;
  overflow: hidden;
  position: absolute;
  z-index: -100;
`;
export const Imgcard = styled.div``;
