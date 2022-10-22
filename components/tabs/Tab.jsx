import { useState } from "react";
import { Var1 } from "./styles/Var1";

export const TABS_CLASSES_TYPES={
  var1:'var1',
}
const getComponent=(type)=>{
  return(
    {
      [TABS_CLASSES_TYPES.var1]:Var1,
    }[type]
  )
}
const Tab=({type})=>{
  const CustomComponent=getComponent(type)
  const tabEnum=[
    {tab:'tab1',name:'Tab1'},
    {tab:'tab2',name:'Tab2'},
    {tab:'tab3',name:'Tab3'},
    {tab:'tab4',name:'Tab4'},
  ]
  const [selected, setSelected]=useState(tabEnum[0].tab)
  const handleSelect=({target:{className}})=>{setSelected(className)}
  return(
    <>
    <CustomComponent selected={selected} tabEnum={tabEnum}>
      { tabEnum.map(obj=><div className={obj.tab} key={obj.name} onClick={handleSelect}><span>{obj.name}</span></div>) }
      <div className="highlight"></div>
    </CustomComponent>
    </>
  )
}

export default Tab;