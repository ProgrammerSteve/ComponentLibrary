import PropTypes from 'prop-types';

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

const Button=({
  buttonType=BUTTON_TYPES_CLASSES.base,label="", 
  onClick=undefined
})=>{
  const CustomButton=getButton(buttonType);
  return(
    <CustomButton onClick={onClick}>
      <span>{label}</span>
    </CustomButton>
  )
}
export default Button

Button.propTypes = {
  buttonType: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonType: BUTTON_TYPES_CLASSES.base,
  label: 'click me',
  onClick: undefined,
};
