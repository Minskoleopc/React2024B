import React , {useState} from "react"

function App8(){

    const [count , setCount] = useState(0)

    return (
        <div>
            <p>Count:{count}</p>
            <button onClick = {()=>setCount(count+ 1)}>Increment</button>
            <button onClick = {()=>setCount(count- 1)}>Decrement</button>
        </div>
    )
}
export default App8




// userState()
// useEffect()
// custom hook()
// useReducer()

// useState()   --- simple state example 
// useReducer() --- complex state example 
