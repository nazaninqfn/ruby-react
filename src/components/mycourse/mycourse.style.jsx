import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .tablet {
    @media screen and (max-width: 992px) {
      margin: 0 -30px;
    }
    @media screen and (max-width: 768px) {
      margin: 0 -40px;
    }
    @media screen and (max-width: 576px) {
      margin: 0 -5px;
    }
    @media screen and (max-width: 480px) {
      margin: 0 -40px;
    }
  }
  .thead {
    display: flex;
    margin: 10px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`;
export const H3 = styled.h3`
  text-align: left;
  padding: 25px 80px 0;

  @media screen and (max-width: 480px) {
    padding: 20px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 10px auto;
  }
  @media screen and (max-width: 992px) {
    text-align: center;
    margin: 10px auto;
  }
`;
export const Tableheadtr = styled.tr`
  font-size: 14px;
  display: flex;
  border: 0px solid #555ee9;
`;
export const Tr = styled.tr`
  border: #fff;
  background: #ebf0ff;
  font-size: 14px;
  display: flex;
  border-radius: 20px;
  margin: 10px;
`;
export const Td = styled.td`
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 992px) {
    margin: 0 -15px;
  }
`;
export const Th = styled.th`
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 992px) {
    margin: 0 -15px;
  }
`;
export const Mycoursimg = styled.img`
  width: 40px;
  height: 40px;
`;
export const Plussicon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
