import styled from 'styled-components';

export const Var4=styled.div`
  display: relative;
  border: 0.25em #26313a solid;
  background-color: #d3e7d8;
  width:300px;
  height:25px;
  box-shadow: 2px 2px 2px #38496d;

  overflow:hidden;
  & div {
    width:${props => props.percent ? `${props.percent}%` : "0%"};
    display:absolute;
    height:100%;
    background-color: green;
  }
`