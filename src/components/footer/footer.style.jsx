import styled from "styled-components";

export const Footcontainer = styled.div`
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  /* height:350px; */
  width: 100%;
  margin-top: 50px;
  background: linear-gradient(rgb(80, 82, 251), rgb(132, 136, 251));
  padding: 100px;
`;
export const Contact = styled.div`
  text-align: right;
  /* margin:80px 0 0 500px; */
  height: fit-content;
`;
export const Links = styled.div`
  text-align: right;
  /* margin:80px 0 0 200px; */
`;
export const Circletag = styled.div`
  position: relative;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  background: rgb(242, 95, 92);
  top: 18px;
  left: 15px;
`;
export const Alink = styled.a`
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid rgb(220, 119, 142);
  }
`;
export const Footformdiv = styled.div`
  margin-top: -80px;
`;
export const Email = styled.div`
  height: 45px;
`;
export const Text = styled.div``;
export const Submit = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  position: relative;
  background: rgb(242, 95, 92);
  color: #fff;
  left: 305px;
  top: -35px;
  height: 45px;

  &:hover {
    background: #f58a88;
    color: #ffffff;
    border: none;
  }
`;
