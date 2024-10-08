import React ,{useContext} from 'react';
import { UserContext } from './UserContext';
const App16 = () =>{
   const {users,loadind} = useContext(UserContext)
   if(loading) return <p>Loading .....</p>
   return (
    <div>
        <h2>
            <ul>
               {users.map((user)=>(
                    <li>
                        {user.id}{user.email}
                    </li>
               ))} 
            </ul>
        </h2>
    </div>

   )
}

export default App16