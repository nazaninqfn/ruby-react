
import styled from "styled-components";

import { keyframes } from 'styled-components';

const color= keyframes`
    0%{fill:#e0e8fd;
    }
    50%{fill:#ffe4e2;
    }
    100%{fill:#e0e8fd;
    }
`;
export const Path1= styled.path`
animation-name: ${color};
animation-duration:4s;
animation-iteration-count: infinite;
`;

const wiggle2= keyframes`
    0%{
        -moz-transform:translate(443.618px , 274.548px) ;rotate:-1deg; 
    }
    50%{
        -moz-transform:translate(443.618px , 274.548px) ;rotate:1deg; 
    }
    100%{
        -moz-transform:translate(443.618px , 274.548px) ;rotate:-1deg; 
    }
`;
export const Path16= styled.path`
animation-name: ${wiggle2};
animation-duration:4s;
animation-iteration-count: infinite;
`;
const wiggle3= keyframes`
    0%{
        -moz-transform:translate(419.77px,291.575px) ;rotate:-4deg; 
    }
    50%{
        -moz-transform:translate(419.77px,291.575px) ;rotate:0deg; 
    }
    100%{
        -moz-transform:translate(419.77px,291.575px) ;rotate:-4deg; 
        ;
    }
`;
export const Path22= styled.path`
animation-name: ${wiggle3};
animation-duration:4s;
animation-iteration-count: infinite;
`;
export const Path20= styled.path`
animation-name: ${wiggle3};
animation-duration:4s;
animation-iteration-count: infinite;
`;

const wiggle4= keyframes`
    0%{
        -moz-transform:translate(385.833px, 217.071px) ;rotate:0deg; 
    }
    50%{
        -moz-transform:translate(385.833px, 217.071px) ;rotate:-3deg; 
    }
    100%{
        -moz-transform:translate(385.833px, 217.071px) ;rotate:0deg; 
    }
`;
export const Path19= styled.path`
animation-name: ${wiggle4};
animation-duration:4s;
animation-iteration-count: infinite;
`;

const flash = keyframes`
    0% {
        transform:translate(9.32px,641.532px) ;
    }
    100%{
        transform:translate(409.32px,241.532px) ;
    }
`;
export const Path30= styled.path`
    animation-name: ${flash};
    animation-duration:4s;
    animation-iteration-count: infinite;
`;
const flash2 = keyframes`
    0%{ 
        transform:translate(20.115px, 560.138px) rotate(10deg);
    }
    100%{
        transform:translate(430.115px, 130.138px) rotate(10deg);
    }
`;
export const Path32= styled.g`
animation-name: ${flash2};
animation-duration:4s;
animation-iteration-count: infinite;
`;
const dot = keyframes`
    0%{ 
        stroke-width:1px; stroke-dasharray:3px;
    }
    100%{
        stroke-width:3px; stroke-dasharray:7px;
    }
`;
export const Path109= styled.path`
animation-name: ${dot};
animation-duration:8s;
animation-iteration-count: infinite;
`;
export const Path110= styled.path`
animation-name: ${dot};
animation-duration:8s;
animation-iteration-count: infinite;
`;