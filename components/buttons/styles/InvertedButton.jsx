import styled from 'styled-components';

export const InvertedButton=styled.div`
width:10rem;
height:4rem;
border-radius:100vmax;
border: 2px solid steelblue;
display:grid;
place-items:center;
background-color:white;
cursor:pointer;
user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
& span{
  font-size:2rem;
  color:steelblue;
}
&:hover{
  background-color:rgba(20,15,0,0.2);
  & span{
    color:steelblue;
  }
}
`
