import styled from "styled-components";

import { keyframes } from 'styled-components';

const backcolor = keyframes`
    0% { fill:#E9EFFD; }
    40% { fill:#B0C5F2; }
    75% {fill:#F2887E;}
    100%{fill:#E9EFFD;}
`;
export const Circle= styled.ellipse`
    animation-name: ${backcolor};
    animation-duration:8s;
    animation-iteration-count: infinite; 
`;
const opa = keyframes`
    0% { opacity:1 ;}
    50% { opacity:0.2 ;}
    100% { opacity:1 ;}
`;
export const Path1= styled.path`
    animation-name: ${opa};
    animation-duration:4s;
    animation-iteration-count: infinite; 
`;
export const Circle5= styled.circle`
    animation-name: ${opa};
    animation-duration:4s;
    animation-iteration-count: infinite; 
`;
const wiggel = keyframes`
    0% { -moz-transform:translate(-122px , -94.562px); rotate:1deg;}
    50% { -moz-transform:translate(-122px , -94.562px); rotate:-1deg;}
    100% { -moz-transform:translate(-122px , -94.562px);rotate:1deg;}
`;
export const Path7= styled.path`
    animation-name: ${wiggel};
    animation-duration:3s;
    animation-iteration-count: infinite; 
`;
const wiggel2 = keyframes`
    0% { -moz-transform:translate(-110px , -86px); rotate:0deg;}
    50% { -moz-transform:translate(-110px , -86px); rotate:2deg;}
    100% {  -moz-transform:translate(-110px , -86px); rotate:0deg;}
`;
export const Path8= styled.path`
    animation-name: ${wiggel2};
    animation-duration:3s;
    animation-iteration-count: infinite; 
`;
const dash = keyframes`
    0%{
       rotateY:0;
    }

    100%{
        rotateY:360deg;

    }  

`;
export const G= styled.path`
     animation-name: ${dash};
     animation-duration:6s;
     animation-iteration-count: infinite; 
`;
const error= keyframes`
    0%{
        font-size:33px;
        -moz-transform:translate(295px , 140px);
    }

    50%{
        font-size:15px;
        -moz-transform:translate(275px , 140px);
    }

    100%{
        font-size:33px;
        -moz-transform:translate(295px , 140px);
    }  

`;
export const Text= styled.text`
     animation-name: ${error};
     animation-duration:5s;
     animation-iteration-count: infinite; 
`;

const error2= keyframes`
    0%{
        font-size:15px;
        -moz-transform:translate(265px , 85px);

    }

    50%{
        font-size:36px;
        -moz-transform:translate(281px , 85px);

    }

    100%{
        font-size:15px;
        -moz-transform:translate(265px , 85px);

    }  

`;
export const Text2= styled.text`
     animation-name: ${error2};
     animation-duration:5s;
     animation-iteration-count: infinite; 
`;