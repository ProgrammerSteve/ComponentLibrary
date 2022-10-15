import { BaseInput } from "./styles";

export const INPUT_TYPES_CLASSES={
  base:BaseInput
};

export const getInput=(inputType=INPUT_TYPES_CLASSES.base)=>{
  return({
    [INPUT_TYPES_CLASSES.base]:BaseInput
  }[inputType])
}

const Input=({key,inputType=INPUT_TYPES_CLASSES.base,text="" })=>{
  const CustomInput=getInput(inputType);
  return(
    <CustomInput key={key}>
      <label>{text}</label>
      <input type="text"/>
    </CustomInput>
  )
}
export default Inputy