import styled from "styled-components";

export const Container = styled.div`
  background-image: url("../image/Web 1920 – 1.png");
  background-size: 100%;
  width: 100%;
  background-repeat: no-repeat;
  margin-top: 50px;
  /* display: flex; */
  @media screen and (max-width: 768px) {
    background-image: none;
  }
  @media screen and (max-width: 576px) {
    background-image: none;
  }
  @media screen and (max-width: 480px) {
    background-image: none;
  }
`;

export const Card = styled.div`
  /* margin: 30px auto; */
  cursor: pointer;
  border: none;
  background: none;
  box-shadow: none;
`;
export const Img = styled.img`
  width: 200px;
  height: 160px;
  /* margin: 0 auto; */
  float: none;
  display: table;
  transition: 1s;

  &:hover {
    width: 220px;
    height: 180px;
  }
`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
export const Span = styled.div`
  border-bottom: 5px solid #f25f5c;
  width: 60px;
  margin: 10px auto;
`;

// export const Div = styled.div`
//   margin-top: 180px;
// `;
export const Discription = styled.p`
  color: #292828;
  opacity: 87%;
  font-size: 14px;
  text-align: center;
`;
export const H = styled.h3`
  text-align: center;
`;
