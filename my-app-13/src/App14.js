import App from '../../my-app-10/src/App';
import { MyContext } from './MyContext';
import { useContext } from 'react';
function App14(){

    const user = useContext(MyContext)
    return (
        <div>
            <h1>Name:{user.name}</h1>
            <h1>Name:{user.age}</h1>
        </div>
    );
}

export default App14

// common place to store value 
// context --- MyContext.js
// MyContext adding values ------> App13.js ---> App14
// App14 ------> useContext(MyContext)
