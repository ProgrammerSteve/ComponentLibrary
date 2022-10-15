import React from 'react';
import  Button , {BUTTON_TYPES_CLASSES} from '../components/buttons/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    buttonType: { control: 'select', options: [BUTTON_TYPES_CLASSES.base, BUTTON_TYPES_CLASSES.inverted, BUTTON_TYPES_CLASSES.danger] } ,
  },
};




const Template = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  key: '1',
  buttonType: BUTTON_TYPES_CLASSES.base,
  label: 'click me',
  onClick: ()=>console.log("clicked"),
};



export const Inverted = Template.bind({});
Inverted.args = {
  key: '1',
  buttonType: BUTTON_TYPES_CLASSES.inverted,
  label: 'click me',
  onClick: ()=>console.log("clicked"),
};



export const Danger = Template.bind({});
Danger.args = {
  key: '1',
  buttonType: BUTTON_TYPES_CLASSES.danger,
  label: 'click me',
  onClick: ()=>console.log("clicked"),
};


