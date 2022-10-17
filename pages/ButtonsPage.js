import { useEffect, useRef, useState } from "react"
import Button, { BUTTON_TYPES_CLASSES }  from "../components/buttons/Button.jsx"
import Input, { INPUT_TYPES_CLASSES } from "../components/inputs/Input.jsx"
import Progressbar, {PROGRESSBAR_TYPES_CLASSES} from "../components/progressbars/Progressbar.jsx"

export default function ButtonsPage(){
  const [time,setTime]=useState(0);



  const intervalRef= useRef(null);
  const incrementTime=()=>setTime(prev=>(prev+1)%100);

  useEffect(()=>{
    intervalRef.current=setInterval(incrementTime,250)
    return()=>clearInterval(intervalRef.current)
  },[])


  const gridStyle={
    display:"grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap:'20px',
    placeItems:"center",
    marginTop:"2rem",
    marginBottom:"5rem",
  }

  const headerStyle={
    textAlign:"center",
    
  }

  return(<>
    <h2 style={headerStyle}>BUTTONS</h2>
    <div style={gridStyle}>
      {
        Object.keys(BUTTON_TYPES_CLASSES).map(
          (objkey,ind)=><Button 
            key={`button-${ind}`} 
            buttonType={BUTTON_TYPES_CLASSES[objkey]} 
            label={"Click me!"}
          />)
      }
    </div>







    <h2 style={headerStyle}>INPUTS</h2>
    <div style={gridStyle}>
      {
        Object.keys(INPUT_TYPES_CLASSES).map(
          (objkey,ind)=><Input 
            key={`Input-${ind}`} 
            inputType={INPUT_TYPES_CLASSES[objkey]} 
            label={"Name"}
            placeholder={"Enter your name"}
          />)
      }
    </div>








    <h2 style={headerStyle}>PROGRESSBARS time:{time}</h2>
    <div style={gridStyle}>
      {
        Object.keys(PROGRESSBAR_TYPES_CLASSES).map(
          (objkey,ind)=><Progressbar 
            type={PROGRESSBAR_TYPES_CLASSES[objkey]} 
            percent={time}
            key={`Progressbar-${ind}`}
          />)
      }
    </div>
    </>
  )
}