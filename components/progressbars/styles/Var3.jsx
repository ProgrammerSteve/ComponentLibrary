import styled from 'styled-components';

export const Var3=styled.div`
  border-radius: 20px;
  display: relative;
  background-color: #f5f5dc6b;
  box-shadow: 7px 7px 5px #38496d;
  width:300px;
  height:80px;
  overflow:hidden;
  &, & div{
    box-sizing: border-box;
  }

  & div {
    width:${props => props.percent ? `${props.percent}%` : "0%"};
    display:absolute;
    height:100%;
    background-color: steelblue;
    border-radius: 20px;
  }
`