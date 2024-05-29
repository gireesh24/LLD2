import React,{ useState}  from "react"

// function MultiCounterFun({ index, value})
function MultiCounterFun({ index, value }) {
    const [count , setCount]=useState(value)
    const increment=()=> setCount(count+1)
    const decrement =()=>setCount(count-1)
    return (
        <div>
            <h2> index value {index}</h2>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default MultiCounterFun