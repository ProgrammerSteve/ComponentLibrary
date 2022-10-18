import { BaseInput, InputVar1, InputVar2, InputVar3 } from "./styles";

export const INPUT_TYPES_CLASSES={
  base:BaseInput,
  var1:InputVar1,
  var2:InputVar2,
  var3:InputVar3,
};

export const getInput=(inputType=INPUT_TYPES_CLASSES.base)=>{
  return({
    [INPUT_TYPES_CLASSES.base]:BaseInput,
    [INPUT_TYPES_CLASSES.var1]:InputVar1,
    [INPUT_TYPES_CLASSES.var2]:InputVar2,
    [INPUT_TYPES_CLASSES.var3]:InputVar3,
  }[inputType])
}

const Input=({inputType=INPUT_TYPES_CLASSES.base,label="",placeholder=""})=>{
  const CustomInput=getInput(inputType);
  return(
    <CustomInput>
      <label>{label}</label>
      <input placeholder={placeholder} type="text"/>
    </CustomInput>
  )
}
export default Input