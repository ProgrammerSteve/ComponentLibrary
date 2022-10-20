import { useState } from "react";
import { Var1 } from "./styles/Var1";

export const DRAWER_CLASSES_TYPES={
  var1:'var1'
}

const getComponent=(type)=>{
  return(
    {
      [DRAWER_CLASSES_TYPES.var1]:Var1
    }[type]
  )
}

const Sidedrawer=({type,children})=>{
  const CustomComponent=getComponent(type)
  const [open,setOpen]=useState(false);
  const handleOpen=()=>setOpen(prev=>!prev)
  const tabHeight=100;
  const tabWidth=50;
  const xSh=10;

  return(
    <div>
      <CustomComponent open={open} tabHeight={tabHeight} tabWidth={tabWidth}>
        <div className="tab" onClick={handleOpen}>
            <svg>
              <path d={`M ${tabWidth*0.5+xSh} ${tabHeight*0.5} L ${tabWidth*0.5-25+xSh} ${tabHeight*0.5+25} L ${tabWidth*0.5-25+xSh} ${tabHeight*0.5-25} L ${tabWidth*0.5+xSh} ${tabHeight*0.5} z`} fill="green"/>
            </svg>
        </div>
        <div className="container">
          {children}
        </div>
      </CustomComponent>
    </div>
  )
}

export default Sidedrawer;