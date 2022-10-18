import PropTypes from 'prop-types';
import { Var1,Var2,Var3,Var4 } from './styles';

export const PROGRESSBAR_TYPES_CLASSES={
  var1:'var1',
  var2:'var2',
  var3:'var3',
  var4:'var4',
}

const getProgressbar=(type)=>{
  return {
    [PROGRESSBAR_TYPES_CLASSES.var1]:Var1,
    [PROGRESSBAR_TYPES_CLASSES.var2]:Var2,
    [PROGRESSBAR_TYPES_CLASSES.var3]:Var3,
    [PROGRESSBAR_TYPES_CLASSES.var4]:Var4,
  }[type]
}

const Progressbar=({type=PROGRESSBAR_TYPES_CLASSES.var1, percent=0})=>{
  const CustomProgressbar=getProgressbar(type)
  return(
    <CustomProgressbar percent={percent}>
      <div></div>
    </CustomProgressbar>
  )
}
export default Progressbar
