import { Var1 } from "./styles";

export const SEARCHBAR_TYPE_CLASSES={
  var1:'var1'
}

const getComponent=(type)=>{
  return(
    {
      [SEARCHBAR_TYPE_CLASSES.var1]:Var1,
    }[type]
  )
}

const Searchbar=({type})=>{
  const CustomComponent=getComponent(type);
  return(
    <CustomComponent>
      <input placeholder="Search..."/>
    </CustomComponent>
  )
}

export default Searchbar;