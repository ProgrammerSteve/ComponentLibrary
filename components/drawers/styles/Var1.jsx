import styled, { css,keyframes } from "styled-components";


const rotate = keyframes`
  0% {

    transform: rotate(0deg);
  }
  100%{
    transform: rotate(180deg);
  }
`



export const Var1=styled.div`
  position: fixed;
  top:0px;
  transition: left 0.5s ease-in-out ;
  ${props => props.open ?css`left:0px`: css`left:-300px;`};
  width:300px;
  height:100vh;
  background-color:steelblue;

  & .tab{
    position: relative;
    top:30%;
    left:100%;
    width:${ props=> `${props.tabWidth}px` };
    height:${ props=> `${props.tabHeight}px` };
    background-color:lightgreen;
    transform:translateY(-50%);
    border-radius:0px 100vmax 100vmax 0px;
    display:grid;
    place-items:center;
  }
  & .tab svg{
    width:${ props=> `${props.tabWidth}px` };
    height:${ props=> `${props.tabHeight}px` };
    ${props => props.open ?css`transform:translateX(-15px) rotate(180deg)`: css`transform:rotate(0deg)` };
    transition: transform 0.35s ease-in-out ;
  }
  & .container{
    position:relative;
    top:${ props=> `-${props.tabHeight}px` };
    left:0;
    width:100%;
    height:100%;
    background-color:green;
    display:flex;
    flex-direction:column;
  }
`