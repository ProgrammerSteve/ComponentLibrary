import { useState } from "react";
import { Var1 } from "./styles";

export const TOGGLE_CLASSES_TYPES={
  var:"var"
}

const getComponent=(type)=>{
  return({
    [TOGGLE_CLASSES_TYPES.var1]:Var1
  }[type])
}

const Toggle=({type=TOGGLE_CLASSES_TYPES.var1})=>{
  const CustomComponent= getComponent(type);
  const [on,setOn]=useState(true)

  const handleToggle=()=>setOn(!on)
  return(
    <CustomComponent on={on} onClick={handleToggle}>
      <div></div>
    </CustomComponent>
  )
}

export default Toggle;