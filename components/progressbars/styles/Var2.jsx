import styled from 'styled-components';

export const Var2=styled.div`
  display: relative;
  border: 0.25em #26313a solid;
  background-color: #3a313b;
  width:300px;
  height:80px;
  overflow:hidden;
  & div {
    width:${props => props.percent ? `${props.percent}%` : "0%"};
    display:absolute;
    height:100%;
    background-color: #788a83;
  }

`