import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: -40px;
  left: -35%;
  width: fit-content;

  @media screen and (max-width: 576px) {
    top: 0px;
    left: -20%;
  }
  @media screen and (max-width: 992px) {
    top: 0px;
    left: -8%;
  }
`;
export const Searchinput = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 280px;
  height: 40px;
  padding: 0.5rem;
`;
export const SearchButton = styled.button`
  position: relative;
  top: -1px;
  left: 49px;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: #5254fb;
  width: 50px;
  height: 40px;
`;
export const Searchimg = styled.img`
  width: 20px;
  height: 20px;
`;
