import styled from "styled-components";

export const Teachcontainer = styled.div`
  width: 88%;
  margin: 30px auto;
`;
export const Teachtitle = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;
export const Teachcard = styled.div`
  border: none;

  margin: 70px 15px 70px 15px;
  box-shadow: 0 0 15px 1px #ccc;
  /* &:hover {
    width:400px;
    transition:width 0.5s;
  } */
  &:hover {
    box-shadow: 2px 1px 10px #757373;
  }

  @media screen and (max-width: 980px) {
    &:hover {
      /* width: 450px;
      transition: width 0.5s; */
      &:hover {
        box-shadow: 2px 1px 10px #757373;
      }
    }
  }
  @media screen and (max-width: 768px) {
    &:hover {
      /* width: 320px;
      transition: width 0.5s; */
      &:hover {
        box-shadow: 2px 1px 10px #757373;
      }
    }
  }
`;
export const Teachpic = styled.img`
  width: 50%;
  border-radius: 100%;
  z-index: 10;
  cursor: pointer;
`;
export const Teachbody = styled.div`
  cursor: pointer;
  margin-top: 60px;
  text-align: center;
`;
