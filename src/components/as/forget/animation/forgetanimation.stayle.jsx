import styled from "styled-components";
import { keyframes } from 'styled-components';

export const DIV= styled.div`
@media screen and (max-width: 770px) {
    display: none;
  }
  @media screen and (max-width: 830px) {
    width:500px;
  }
`;
const backcolor1 = keyframes`
    0% { fill:#FBA7C1; }
    50% { fill:#FBAFA7; }
    95% {fill:#CFDCFB;}
    100%{fill:#FBA7C1;}
`;
export const Circle= styled.g`
    animation-name: ${backcolor1};
    animation-duration:3s;
    animation-iteration-count: infinite; 
`;

const wiggle = keyframes`
    0% { -moz-transform:translate(-146.388px , -129px); rotate:0deg;}
    50% { -moz-transform:translate(-146.388px , -129px);rotate:2deg; }
    100%{-moz-transform:translate(-146.388px , -129px);rotate:0deg;}
`;
export const Path1= styled.path`
    animation-name: ${wiggle};
    animation-duration:3s;
    animation-iteration-count: infinite; 
`;
const wiggle1 = keyframes`
    0% { -moz-transform:translate(-146.388px , -129px); rotate:2deg;}
    50% { -moz-transform:translate(-146.388px , -129px);rotate:0deg; }
    100%{-moz-transform:translate(-146.388px , -129px);rotate:2deg;}
`;
export const Path2= styled.path`
    animation-name: ${wiggle1};
    animation-duration:3s;
    animation-iteration-count: infinite; 
`;
const cercle= keyframes`
 0% { stroke-width:0; }

 100% {stroke-width:1px;}

`;
export const G2= styled.g`
    animation-name: ${cercle};
    animation-duration:2s;
    animation-iteration-count: infinite; 
`;
export const G3= styled.g`
    animation-name: ${cercle};
    animation-duration:2s;
    animation-iteration-count: infinite; 
`;
export const G4= styled.g`
    animation-name: ${cercle};
    animation-duration:2s;
    animation-iteration-count: infinite; 
`;

const rect3= keyframes`
 0% { width:0; }

 60% {width:108px;}

 100%{width:100px;}

`;
export const Rect3= styled.rect`
    animation-name: ${rect3};
    animation-duration:4s;
    animation-iteration-count: infinite; 
`;
const rect5= keyframes`
 0% { width:0; }

 60% {width:235px;}

 100%{width:229px;}

`;
export const Rect5= styled.rect`
    animation-name: ${rect5};
    animation-duration:4s;
    animation-iteration-count: infinite; 
`;
export const Rect6= styled.rect`
    animation-name: ${rect5};
    animation-duration:4s;
    animation-iteration-count: infinite; 
`;
const rect7= keyframes`
 0% { width:0; }

 60% {width:66px;}

 100%{width:61px;}

`;
export const Rect7= styled.rect`
    animation-name: ${rect7};
    animation-duration:4s;
    animation-iteration-count: infinite; 
`;
const rect8= keyframes`
 0% { width:0; }

 60% {width:45px;}

 100%{width:38px;}

`;
export const Rect8= styled.rect`
    animation-name: ${rect8};
    animation-duration:4s;
    animation-iteration-count: infinite; 
`;

export const Rect9= styled.rect`
    animation-name: ${rect5};
    animation-duration:4s;
    animation-iteration-count: infinite; 
`;



