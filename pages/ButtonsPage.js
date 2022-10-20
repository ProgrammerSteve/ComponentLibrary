import { useEffect, useRef, useState } from "react"
import Button, { BUTTON_TYPES_CLASSES }  from "../components/buttons/Button.jsx"
import Input, { INPUT_TYPES_CLASSES } from "../components/inputs/Input.jsx"
import Progressbar, {PROGRESSBAR_TYPES_CLASSES} from "../components/progressbars/Progressbar.jsx"
import Searchbar, {SEARCHBAR_TYPE_CLASSES} from "../components/searchbars/Searchbar.jsx";
import Spinner, {SPINNER_TYPE_CLASSES} from "../components/spinners/Spinner.jsx";
import Sidedrawer, {DRAWER_CLASSES_TYPES} from "../components/drawers/Sidedrawer.jsx";

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
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
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

    <h2 style={headerStyle}>PROGRESSBARS {time}%</h2>
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

    <h2 style={headerStyle}>Spinner</h2>
    <div style={gridStyle}>
      <Spinner spinnerType={SPINNER_TYPE_CLASSES.var1}/>
      <Spinner spinnerType={SPINNER_TYPE_CLASSES.var2}/>
      <Spinner spinnerType={SPINNER_TYPE_CLASSES.var3}/>
    </div>

    <h2 style={headerStyle}>Searchbar</h2>
    <div style={gridStyle}>
      <Searchbar type={SEARCHBAR_TYPE_CLASSES.var1}/>
    </div>


    
    <h2 style={headerStyle}>SideDrawer</h2>
    <div style={gridStyle}>
      <Sidedrawer type={DRAWER_CLASSES_TYPES.var1}>
        <p>Home</p>
        <div>
          Hello World
        </div>
      </Sidedrawer>
    </div>
    
    </>
  )
}