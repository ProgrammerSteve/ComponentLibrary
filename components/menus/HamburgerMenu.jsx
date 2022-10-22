import { useState } from "react";
import { Var1 } from "./styles";

export const MENU_CLASSES_TYPES={
  var1:"var1"
}


const getComponent=(type)=>{
  return {
    [MENU_CLASSES_TYPES.var1]:Var1,
  }[type]
}



const HamburgerMenu=({type=MENU_CLASSES_TYPES.var1})=>{
  const CustomComponent=getComponent(type);
  const [open,setOpen]=useState(false);
  const handleClick=()=>setOpen(!open)
  return(
    <CustomComponent open={open} onClick={handleClick}>
      <div className="topbar"></div>
      <div className="midbar"></div>
      <div className="bottombar"></div>
    </CustomComponent>
  )
}

export default HamburgerMenu;