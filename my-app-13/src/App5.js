//userState()
//useEffect()
//useRef()
//customHook()

// function App5(){

//     const [A,setA] = useState(7) //#1
//     if (A == 23){
//         const [B,setB] = useState("") // #2
//     }
//     useEffect(fnz,[]) //3

// }
/* eslint-disable */
import React, { useState } from 'react';

function App5() {
    const [A, setA] = useState(23)
    const [B,setB] = useState(24)
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        age: 30,
      });
    const isLoggedIn = true;

  if (isLoggedIn) {
    // Incorrect: useState inside a conditional statement
    const [user, setUser] = useState({
      name: "John Doe",
      email: "johndoe@example.com",
      age: 30,
    });
  }

  return (
    <div>
      <h2>User Profile</h2>
      {/* This will cause an error because `user` is not accessible here */}
      {isLoggedIn && (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </>
      )}
    </div>
  );
}

export default App5;

















