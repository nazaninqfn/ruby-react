import styled from "styled-components";

export const Button = styled.button`
  color: #f25f5c;
  background: none;
  border: 1px solid #707070;
  border-radius: 5px;
  font-size: 12px;
  width: 80px;
  height: 30px;
  margin-top: 10px;
  transition: background 0.3s, color 0.3s !important;
  &:hover {
    color: white;
    border: none;
    background: #f25f5c;
    transition: background 0.3s, color 0.3s !important;
  }
`;
