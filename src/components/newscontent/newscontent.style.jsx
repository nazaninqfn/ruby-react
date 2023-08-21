import styled from "styled-components";

export const Card = styled.div`
  border: none;
  box-shadow: 2px 1px 10px #dedede;
  height: 380px;
`;

export const Img = styled.img`
  margin: 0px auto;
  width: 60%;
  display: block;
`;
export const Image = styled.img`
  width: 20px;
  float: left;
  transition: width 0.3s;
  &:hover {
    width: 25px;
    transition: width 0.3s;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  padding-bottom: 3px;
`;
export const Teacher = styled.p`
  font-size: 14px;
  padding-bottom: 3px;
`;
export const P = styled.p`
  font-size: 13px;
  padding-bottom: 3px;
`;
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

  margin: 10px auto;
  &:hover {
    color: #f25f5c;
    background: none;
    border: 1px solid #707070;
  }
`;
