import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Var1=styled.svg`
  animation: ${rotate} 1.5s linear infinite;
  /* clip-path: polygon(50px 0px, 50px 50px, 100px 50px, 100px 0px, 50px 0px);
  clip-path: circle(20px at 50px 50px); */
`