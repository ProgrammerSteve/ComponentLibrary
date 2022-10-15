import styled from 'styled-components';

export const DangerButton=styled.div`
width:10rem;
height:4rem;
border-radius:100vmax;
display:grid;
place-items:center;
background-color:red;
cursor:pointer;
user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
& span{
  font-size:2rem;
  color:white;
}
&:hover{
  background-color:pink;
  & span{
    color:gray;
  }
}
`