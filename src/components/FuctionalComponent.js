import { useEffect, useState } from "react";
const FunctionalComponent = (props) =>{
const[count] = useState(0);   
const[count1,setCount] = useState(0);   
return(
    <div className="fc">
    <h2>Returned from a functional component</h2>
    <h2>Name:{props.name}</h2>
    <h2>Count={count}</h2>
    <h2>Count1={count1}</h2>
    <button onClick={()=>setCount(1)}>Count 1</button>
    </div>
)    
}
export default FunctionalComponent;