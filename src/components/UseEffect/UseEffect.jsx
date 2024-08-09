import { useState,useEffect } from "react";


const UseEffect=()=>{
    const [price,setPrice]=useState(10);
     useEffect(()=>{
        alert("Value Changed")
     },[price])
const updateValue=()=>{
    setPrice(price+1);
}

    return(
        <div>
             <h1>Price-{price}</h1>
             <button onClick={updateValue}>Click Me</button>

        </div>
       
    )
}

export default UseEffect;