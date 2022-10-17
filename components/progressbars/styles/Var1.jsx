import styled from 'styled-components';

export const Var1=styled.div`
  border-radius: 100vmax;
  display: relative;
  border: 0.25em #4b4d5055 solid;
  background-color: #d0f0f8;
  width:300px;
  height:80px;
  overflow:hidden;
  & div {
    width:${props => props.percent ? `${props.percent}%` : "0%"};
    display:absolute;
    height:100%;
    background-color: steelblue;
    border-radius: 100vmax;
  }
`