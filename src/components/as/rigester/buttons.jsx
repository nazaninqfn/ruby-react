import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  font-size: 12px;
  width: 120px;
  height: 40px;
  color: white;
  border: none;
  background: #5254fb;
  transition: background 0.3s, color 0.3s !important;
  &:hover {
    /* color: #5254FB;
        background: none;
        border: 1px solid #707070;
        transition: background 0.3s ,color 0.3s!important; */
    color: #fff;
    border: none;
    background: #9c9dfc;
    transition: background 0.3s, color 0.3s !important;
  }
`;
export const Button2 = styled.button`
  border-radius: 5px;
  font-size: 12px;
  width: 120px;
  height: 40px;
  color: white;
  border: none;
  background: #b9c7f8;
  transition: background 0.3s, color 0.3s !important;
  &:hover {
    color: #b9c7f8;
    background: none;
    border: 1px solid #707070;
    transition: background 0.3s, color 0.3s !important;
  }
`;

export const Button3 = styled.button`
  border-radius: 5px;
  font-size: 12px;
  width: 120px;
  height: 40px;
  color: #ffffff;
  background: #5254fb;
  border: 1px solid #ffffff;
  float: left;
  margin-left: 3rem;
  transition: background 0.3s, color 0.3s !important;
  &:hover {
    color: #fff;
    border: none;
    background: #9c9dfc;
    transition: background 0.3s, color 0.3s !important;
  }
`;

export const Button4 = styled.button`
  border-radius: 5px;
  font-size: 12px;
  min-width: 120px;
  height: 40px;

  color: #fff;
  background: #fe7567;
  border: 1px solid transparent;
  transition: background 0.3s, color 0.3s !important;

  &:hover {
    color: #fff;
    border: 1px solid transparent;
    background: #fe7667b3;
    transition: background 0.3s, color 0.3s !important;
  }
`;

export const Button5 = styled.button`
  border-radius: 5px;
  font-size: 12px;
  align-items: center;
  color: white;
  border: none;
  /* position-absolute top-100 start-0 translate-middle */
  position: absolute;
  top: 70%;
  right: 70%;
  translate: middle;
  background: #5254fb;
  padding: 8px 8px 8px 9px;
  width: 50px;
  height: 50px;
  transition: background 0.3s, color 0.3s !important;
  &:hover {
    color: #5254fb;
    background: #b9c7f8;
    border: 1px solid transparent;
    transition: background 0.3s, color 0.3s !important;
  }
`;
export const Arrowdown = styled.div`
  border: 5px solid #fff;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  background-color: #a5a5a5;
  background-image: url("./image/download (1).png");
  background-position: center;
  background-size: cover;
  position: absolute;
  margin-left: 3px;
`;
export const Listdote = styled.div`
  display: inline-block;
  border: 1px solid transparent;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  background-color: #f25f5c ;
`;
