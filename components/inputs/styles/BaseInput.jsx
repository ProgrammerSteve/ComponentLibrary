import styled from 'styled-components';



export const BaseInput=styled.div`
  background-color: #ffffff;
  display:flex;
  flex-direction: column;

  width:200px;
  height: 50px;


& label{
  height:15px;
    line-height: 15px;
    padding:0px 3px;
  margin: 5px 0px;

  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight:lighter;
  background-color: none;
  
}
& input{
  height: 20px;
    line-height: 17px;
    padding:1.5px 4px;
  margin-bottom: 3px;
  border: 1px black solid;
  box-shadow: 3px 3px 2px #38496db6;

  background-color:none;
  border-radius: 0px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color:#444040;
}
`