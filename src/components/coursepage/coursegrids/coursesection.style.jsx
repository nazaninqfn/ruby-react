import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
  text-align: right;
  box-shadow: 2px 1px 10px #dedede;
  border: none;
  width: 100%;
  margin: 0 auto;
  &:hover {
    box-shadow: 2px 1px 10px #757373;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  padding-bottom: 5px;
`;
export const Teacher = styled.div`
  color: #292828;
  opacity: 87%;
  font-size: 14px;
  padding-bottom: 10px;
`;
export const Capacity = styled.div`
  padding-bottom: 10px;
  display: flex;
  text-align: right;
  direction: rtl;
`;
export const Price = styled.p`
  color: #292828;
  opacity: 87%;
  font-size: 14px;
`;
export const Image = styled.img`
  width: 20px;
  padding-right: 5px;
`;

export const Div = styled.div`
  height: 200px;
  background-color: #f3f3f3;
  display: flex;
`;
export const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: 20px auto;
`;
export const Meter = styled.div`
  margin-right: 10px;
  width: 100px;
  height: 15px;
  /* background-color: #fa9f9d; */
  border-radius: 8px;
  direction: ltr;
  margin-top: 3px;
`;
export const Capa = styled.div`
  background-color: #f25f5c;
  width: 70px;
  height: 100%;
  border-radius: 8px 0px 0px 8px;
`;
export const Span = styled.span`
  color: #292828;
  opacity: 87%;
  font-size: 14px;
`;
