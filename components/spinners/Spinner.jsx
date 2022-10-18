import { Var1, Var2, Var3 } from "./styles"

export const SPINNER_TYPE_CLASSES={
  var1:"var1",
  var2:"var2",
  var3:"var3",
}

const getSpinner=(spinnerType=SPINNER_TYPE_CLASSES.var1)=>{
  return({
      [SPINNER_TYPE_CLASSES.var1]:Var1,
      [SPINNER_TYPE_CLASSES.var2]:Var2,
      [SPINNER_TYPE_CLASSES.var3]:Var3,
    }[spinnerType]
  )
}

const getPathString=(width, thickness, theta1, theta2)=>{
  const innerCPT1x=width*0.5+Math.cos(theta1)*(width*0.5-thickness);
  const innerCPT1y=width*0.5-Math.sin(theta1)*(width*0.5-thickness);
  const innerCPT2x=width*0.5+Math.cos(theta2)*(width*0.5-thickness);
  const innerCPT2y=width*0.5-Math.sin(theta2)*(width*0.5-thickness);
  const outerCPT2x=width*0.5+Math.cos(theta2)*(width*0.5);
  const outerCPT2y=width*0.5-Math.sin(theta2)*(width*0.5);
  const outerCPT1x=width*0.5+Math.cos(theta1)*(width*0.5);
  const outerCPT1y=width*0.5-Math.sin(theta1)*(width*0.5);
  const points1=`M ${width/2} 0 L ${width/2} ${thickness} `
  const points2=`C ${width/2} ${thickness} ${innerCPT1x} ${innerCPT1y} ${innerCPT2x} ${innerCPT2y} `
  const points3=`L ${outerCPT2x} ${outerCPT2y} `
  const points4=`C ${outerCPT2x} ${outerCPT2y} ${outerCPT1x} ${outerCPT1y} ${width*0.5} 0 z`
  return(points1+points2+points3+points4)
}

const Spinner=({spinnerType})=>{
  const CustomSpinner=getSpinner(spinnerType=SPINNER_TYPE_CLASSES[spinnerType]);
  const pointsPath=getPathString(100,15,55*(Math.PI/180),20*(Math.PI/180));

  return(
      <CustomSpinner width="100" height="100">
        {
          spinnerType===SPINNER_TYPE_CLASSES.var1?(
          <>
            <path d={pointsPath} fill="steelblue"/>
          </>
          ):(<></>)
        }
        {
          spinnerType===SPINNER_TYPE_CLASSES.var2?(<path d="M 50 0 L 100 50 L 50 100 L 0 50 L 50 0 z" fill="red"/>):(<></>)
        }
        {
          spinnerType===SPINNER_TYPE_CLASSES.var3?(
          <>
            <path d="M 45 0 L 55 0 L 55 100 L 45 100 L 45 0 z" fill="green"/>
            <path d="M 0 45 L 0 55 L 100 55 L 100 45 L 0 45 z" fill="green"/>
          </>):(<></>)
        }
      </CustomSpinner>
  )
}

export default Spinner