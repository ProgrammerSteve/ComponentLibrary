import Button, { BUTTON_TYPES_CLASSES }  from "../components/buttons/Button.jsx"

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
        text={"Click me!"}
      />
      <Button 
        key={1} 
        buttonType={BUTTON_TYPES_CLASSES.danger} 
        text={"Click me!"}
      />
      <Button 
        key={1} 
        buttonType={BUTTON_TYPES_CLASSES.inverted} 
        text={"Click me!"}
      />
    </div>
  )
}