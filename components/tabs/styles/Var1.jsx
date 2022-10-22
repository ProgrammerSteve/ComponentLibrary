import styled, { css } from "styled-components";
const getLeft=(selected,tabEnum)=>{
  const numDiv= tabEnum.length;
  const pos= parseFloat(selected.slice(-1));
  const placement=(pos-1)*100/numDiv;
  return(`${placement}%`)
}
const getWidth=(tabEnum)=>{
  const numDiv= tabEnum.length;
  return(`${100/numDiv}%`)
}
const posIndex=css` ${props => (props.selected && props.tabEnum)? 
css`
  background-color: blue;
  left:${getLeft(props.selected,props.tabEnum)};
` :css`background-color: #ff0000;`};`;



export const Var1=styled.div`
  background-color: #131361;
  /* border-radius: 100vmax;
  overflow: hidden;
  padding:0 30px; */
  color:white;
  display:flex;
  justify-content: space-evenly;
  position:relative;
  cursor:pointer;
  width: 300px;
  height: 100px;
  div[class^='tab'] span{
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }
  & div[class^='tab']{
    background-color: #131361;
    display: grid;
    place-items:center;
    width:100%;
  }
  & div[class^='tab']:hover{
    background-color: #090923;
  }
  & .highlight{
    position: absolute;
    top:100%;
    transform: translateY(-100%);
    ${props => (props.tabEnum)? css`width:${getWidth(props.tabEnum)};`:css`width:100%;`};
    height: 10px;
    ${posIndex};
    transition: all 0.25s ease-in-out;
  }
`