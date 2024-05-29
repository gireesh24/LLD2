import { useState } from "react";

function Counterfun(){
    const [count , setCount]=useState(0);
    const increment =()=> setCount(count+1)
    const decrement=()=> setCount(count-1)
    return (
        <div>
        <button className="increment" onClick={increment}>+</button>
        <span>{count}</span>
        <button className="decrement" onClick={decrement}>-</button>
        </div>
    )
}
export default Counterfun