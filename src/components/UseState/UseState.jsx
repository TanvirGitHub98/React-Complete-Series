import { useState } from "react";

const UseState=()=>{
    let [price,setPrice]=useState(5);
    let increaseValue=()=>{
        setPrice(price+1);

    }
    let decreaseValue=()=>{
        setPrice(price-1);
        
    }
    return(
        <div>
            <h1>Price {price}</h1>
            <button onClick={increaseValue}>Increase</button> &nbsp;
            <button onClick={decreaseValue}>Decrease</button>
            <h2>Price {price}</h2>
            <h3>Price {price}</h3>
            <h4>Price {price}</h4>
        </div>
    )
}

export default UseState;