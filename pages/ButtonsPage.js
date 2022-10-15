import Button, { BUTTON_TYPES_CLASSES }  from "../components/buttons/Button.jsx"
import Input, { INPUT_TYPES_CLASSES } from "../components/inputs/Input.jsx"

export default function ButtonsPage(){
  const gridStyle={
    display:"grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    placeItems:"center",
    marginTop:"2rem",
  }
  return(
    <div style={gridStyle}>
      <Button 
        key={1} 
        buttonType={BUTTON_TYPES_CLASSES.base} 
        label={"Click me!"}
      />
      <Button 
        key={2} 
        buttonType={BUTTON_TYPES_CLASSES.danger} 
        label={"Click me!"}
      />
      <Button 
        key={3} 
        buttonType={BUTTON_TYPES_CLASSES.inverted} 
        label={"Click me!"}
      />
      <Input
        key={4} 
        inputType={INPUT_TYPES_CLASSES.base} 
        text={"label"}
      />
    </div>
  )
}