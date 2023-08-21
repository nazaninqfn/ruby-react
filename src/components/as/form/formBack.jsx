import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #5254fb;
  }
`;
export const Container = styled.div``;
export const Content = styled.div`
  width: 80%;

  background-color: #fff;
  margin: 70px auto;
  border-radius: 10px;
`;
export default function BackForm() {
  return (
    <Container>
      <GlobalStyle whiteColor />

      <Content></Content>
    </Container>
  );
}
