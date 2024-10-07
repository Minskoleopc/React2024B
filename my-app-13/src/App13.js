import { MyContext } from './MyContext';
import App14 from './App14';

function App13(){
    const user = {name:"chinmay",age:34}

    return (
        <MyContext.Provider value = {user}>
            <App14/>
        </MyContext.Provider>
    );

}

export default App13



// class ---- context -----> 


// componentA
// componentB
// componentC









