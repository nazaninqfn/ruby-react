import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  /* margin:180px auto 20px; */
  margin: 30px auto;
`;
export const Title = styled.h3`
  margin-bottom: 40px;
  text-align: center;
`;
export const Card = styled.div`
  display: inline-block;
  background: #f3efef;
  width: 15%;
  height: 150px;
  margin: 10px 40px 10px 0;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 10px 1px #eee7e7;
  /* transition:box-shadow 0.3s!important ; */

  &:hover {
    box-shadow: 0 0 10px 1px #d3c9c9 inset;
    /* transition:box-shadow 0.3s!important ; */
  }
`;
export const Catimg = styled.img`
  width: 60px;
  height: 60px;
  margin: 20px 30% 0;
`;
export const Catbody = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0;
  margin: 10px auto;
`;
export const A = styled.a`
  font-size: 18px;
  text-decoration: none;
`;
