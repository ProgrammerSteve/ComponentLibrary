import styled, {css} from "styled-components";

const toggleWidth=75;


export const Var1=styled.div`
  background-color: #aea3a3;
  width: ${`${toggleWidth}px`};
  height:${`${toggleWidth*0.5}px`};
  border-radius: 100vmax;
  display: flex;
  align-items: center;
  ${props => props.on ? css`border: green solid 5px;` : css`border:red solid 5px;`};
  transition: all 0.25s ease-in-out;
 

  & div{
    box-sizing:border-box;
    width:50%;
    height: 100%;
    border-radius: 100vmax;
    background-color: #ffffff;
    ${props => props.on ? css`border: green solid 2px;` : css`border:red solid 2px;`};
    ${props => props.on ? css`transform:translateX(100%);` : css`transform:translateX(0%)`};
    transition: all 0.25s ease-in-out;
  }
`