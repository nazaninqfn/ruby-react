import styled, { keyframes } from 'styled-components';
import { bounceInUp } from 'react-animations';

const backcolor = keyframes`
 0% { fill:#676AF5; }
 50% { fill:#090B68; }
 100% {fill:#676AF5;}

`;
export const Path28= styled.path`
     animation-name: ${backcolor};
     animation-duration:4s;
     animation-iteration-count: infinite; 
`;
const flash1 = keyframes`
 0% {transform:translate(5.27px, -93.556px);}
 100% {transform:translate(400.27px, -573.556px);}

`;
export const Path141= styled.path`
    animation-name: ${flash1};
     animation-duration:4s;
     animation-iteration-count: infinite; 
`;
const flash2= keyframes`
 0%{ 
    transform:translate(100.27px, 693.556px); rotate(4deg)}
 100% { 
    transform:translate(518.479px , 185.852px);rotate(4deg)}
`;
export const Polygon= styled.path`
    animation-name: ${flash2};
    animation-duration:4s;
    animation-iteration-count: infinite; 
`;
const gg= keyframes`
 0% ,2%{ 
    transform:translate(-220px, 474.888px);
 }
 100% { 
    transform:translate(0, 474.888px); 
}
`;
export const G= styled.g`
    animation-name: ${gg};
    animation-duration:4s;
    animation-iteration-count: infinite; 
`;
const gg2= keyframes`
 0%{ 
    transform:translate(62.416px, -574.888px);
 }
 100% { 
    transform:translate(62.416px, 399.191px); 
}
`;
export const G2= styled.g`
    animation-name: ${gg2};
    animation-duration:4s;
    animation-iteration-count: infinite; 
`;