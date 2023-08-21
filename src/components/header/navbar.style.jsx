import styled from "styled-components";

export const Nav = styled.nav`
  direction: rtl;
  position: absolute;
  top: 0;
  width: 100%;
  box-shadow: none;
`;
export const Navitem = styled.ul`
  margin: 0 110px;
  font-size: 18px;
`;

export const Navli = styled.li`
  &:hover {
    height: 40px;
    border-bottom: 3px solid rgb(220, 119, 142);
  }
`;
export const Serchpic = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 10px;
`;
export const ButtonA = styled.button`
  /* position:relative; */
  /* font-size:14px;
    font-weight:600; */
  background: #f25f5c !important;
  color: #fff !important;
  /* z-index:100; */
  /* margin-left:30px; */
  transition: background 0.3s, color 0.3s !important;

  &:hover {
    /* background:#fff!important;
      color:#f25f5c!important;
      transition: background 0.3s ,color 0.3s!important; */
    color: #fff !important;

    background: #fa9f9d !important;
    transition: background 0.3s, color 0.3s !important;
  }
`;
export const ButtonB = styled.button`
  /* font-size:14px;
    font-weight:600; */
  /* width:80px;     */
  /* margin-right:10px; */
  color: rgb(220, 119, 142);
  background: #f25f5c !important;
  transition: background 0.3s, color 0.3s !important;
  &:hover {
    /* background:#fff!important;
      color:#f25f5c!important; */
    color: #fff !important;
    background: #fa9f9d !important;
    transition: background 0.3s, color 0.3s !important;
  }
`;
