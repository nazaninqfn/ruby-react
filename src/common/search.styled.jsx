import styled from "styled-components";

export const Input = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid #ced4da;
  border-radius: 0px 5px 5px 0;
  font-size: 12px;
  padding-right: 10px;
  @media screen and (max-width: 980px) {
    width: 300px;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
    width: 100px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;
export const Button = styled.button`
  height: 40px;
  border-radius: 5px 0px 0px 5px;
  @media screen and (max-width: 480px) {
    width: 55px;
  }
`;
export const Form = styled.div``;
export const Im = styled.img`
  width: 25px;
  margin: 0px auto;
  @media screen and (max-width: 480px) {
    width: 20px;
  }
`;
