import styled, {css} from 'styled-components';
const width = '100px';

export const Var1=styled.div`
  position: relative;
  background-color: #a9cad9;
  width:${width}; height:${width}; 
  & .topbar {
    position:absolute;
    border-radius: 100vmax;
    height:20%;width:100%;
    background-color: steelblue;
    transition:all 0.25s ease-in-out;
    ${props => props.open ? 
      css`top:40%;transform: rotate(-45deg) translate(0,-0%);` : 
      css`top:0px;transform: translate(0,-0%);`
    };
  }
  & .bottombar {
    position:absolute;
    border-radius: 100vmax;
    height:20%;width:100%;
    background-color: green;
    transition:all 0.25s ease-in-out;
    ${props => props.open ? 
      css`top:40%;transform: rotate(45deg) translate(0,-0%);` : 
      css`top:100%;transform: translate(0,-100%);`
    };
  }    
  & .midbar {
    position:absolute;
    top:50%;height:20%;width:100%;
    transform: translateY(-50%);
    border-radius: 100vmax;
    ${props => props.open ? css`background-color: #d0f0f80;` : css`background-color: #ff0000;`};
    transition:all 0.25s ease-in-out;
  }
`