import React , {useRef} from 'react'


function App11(){

    const inputref = useRef(null);

    const focusInput = ()=>{
        //document.querySelector('input').current.focus()
        inputref.current.focus();
    };
    return (
        <div>
           <input ref = {inputref} type="text"/>
           <button onClick={focusInput}>Click</button>
        </div>
    )
}

export default App11














// useRef()--- DOM element referenec
// useRef() --- mutable without rendering
//useState()
//useEffect()
//useReducer()
// useRef() ------ reference ---- re- render
// userRef() ---- mutable state , which will not cause render