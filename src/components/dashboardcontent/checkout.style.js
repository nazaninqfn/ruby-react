import styled from "styled-components";
export const Img = styled.img`
  width: 300px;
  margin: 0 auto;
  display: block;
`;

export const H = styled.h4`
  text-align: center;
  font-weight: bold;
`;
export const P = styled.p`
  text-align: center;
  font-size: 14px;
`;

export const Div = styled.div`
  margin: auto 20px;
  display: table;
`;
export const Card = styled.div`
  border: none;
  box-shadow: 2px 1px 10px #dedede;
  &:hover {
    box-shadow: 2px 1px 10px #757373;
  }
`;

export const Dimage = styled.div`
  background-color: #f3f3f3;
  border-radius: 8px;
`;

export const Courseimage = styled.img`
  width: 90%;
  margin: auto;
  display: block;
`;

export const Title = styled.div`
  font-size: 16px;
  padding-bottom: 3px;
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
  font-size: 13px;
`;
export const Teacher = styled.div`
  color: #292828;
  opacity: 87%;
  font-size: 13px;
  padding-bottom: 10px;
`;
export const Capacity = styled.div`
  padding-bottom: 10px;
  display: flex;
  text-align: right;
`;
export const Price = styled.p`
  color: #292828;
  opacity: 87%;
  font-size: 13px;
`;
export const Image = styled.img`
  width: 20px;
  padding-right: 5px;
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
export const Ddate = styled.p`
  color: #292828;
  opacity: 87%;
  font-size: 13px;
`;

export const Button = styled.button`
  border-radius: 5px;
  font-size: 12px;
  width: 120px;
  height: 40px;
  color: white;
  border: none;
  background: #f25f5c;
  float: none;
  display: table;
  transition: background 0.3s, color 0.3s !important;
  margin: 20px auto;
  &:hover {
    color: #fff !important;
    background: #fa9f9d !important;
    transition: background 0.3s, color 0.3s !important;
  }
`;
export const But = styled.button`
  color: #f25f5c;
  background: none;
  border: 1px solid #707070;
  border-radius: 5px;
  font-size: 12px;
  width: 80px;
  height: 30px;
  display: block;
  margin-top: 5px;

  &:hover {
    color: white;
    border: none;
    background: #f25f5c;
  }
`;
