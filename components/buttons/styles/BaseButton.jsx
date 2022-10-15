import styled from 'styled-components';

export const BaseButton=styled.div`
width:10rem;
height:4rem;
border-radius:100vmax;
display:grid;
place-items:center;
background-color:steelblue;
user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
cursor:pointer;
& span{
  font-size:2rem;
  color:white;
}
&:hover{
  background-color:blue;
  & span{
    color:gray;
  }
}
`
