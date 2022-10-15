import {
  DangerButton, 
  BaseButton,
  InvertedButton
} from './styles'

export const BUTTON_TYPES_CLASSES={
  base: 'base',
  danger: 'danger',
  inverted: 'inverted',
}
export const getButton=(buttonType= BUTTON_TYPES_CLASSES.base)=>{
  return({
      [BUTTON_TYPES_CLASSES.base]: BaseButton,
      [BUTTON_TYPES_CLASSES.danger]: DangerButton,
      [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]
)}

const Button=({key,buttonType=BUTTON_TYPES_CLASSES.base,text="" })=>{
  const CustomButton=getButton(buttonType);
  return(
    <CustomButton key={key}>
      <span>{text}</span>
    </CustomButton>
  )
}
export default Button