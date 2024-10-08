import React, {createContext,useState ,useEffect} from "react";

export const UserContext = createContext()

export const UserProvider =  ({children}) =>{

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true)

    // Fetch user from reqres API 

    useEffect(()=>{
        const fetchUsers = async()=>{

            try {
               const responsne =  await fetch("https://reqres.in/api/users?page=2")
               const data = await responsne.json()
               setUsers(data.data)

            }
            catch(error){
                console.error("Error while fetching data:",error)
            }
            finally{
                setLoading(false)
            }
            fetchUsers();
        }

    },[]);

    return (
        <UserContext.Provider value = {{users,loading}}>
            {children}
        </UserContext.Provider>
    )

}




