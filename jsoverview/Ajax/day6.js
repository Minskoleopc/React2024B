// using fetch 
// get 

function getUser(id) {
    fetch(`https://reqres.in/api/users/${id}`)
        .then(function (resposne) {
            return resposne.json()
        })
        .then(function (response) {
            console.log(response.data)
        })
}
//getUser(1)
// post 

function createUser() {
    fetch(`https://reqres.in/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'John Doe',
            job: 'Software Developer'
        })
    })
        .then(function (response) {
            //console.log(response)
            return response.json()
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function(error){
            console.error(error)
        })
}
//createUser()
// put 

function updateUser(id) {
    fetch(`https://reqres.in/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "morpheus",
            job: "zion resident"
        })
    })
    .then(function(response){
        return response.json()
      
    })
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.error(error)
    })
}
//updateUser(3)
//delete 

function deleteUser(id){
    fetch(`https://reqres.in/api/users/${id}`,{
        method:"DELETE"
    })
    .then(function(response){
        //console.log(response)
        if(response.status == 204){
            console.log("user deleted successfully")
        }
        
    })
      
}
//deleteUser(2)

// program 1
async function getUser(id){
    try{
        let response = await fetch(`https://reqres.in/api/users/${id}`)
        let res = await response.json()
        console.log(res.data)
    }
    catch(error){
        console.error(error)
    }
}
getUser(3)


// program 2

async function CreateUser(){
    try{
        let response = await fetch(`https://reqres.in/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'John Doe',
                job: 'Software Developer'
            })
        })
        let responseB = await response.json()
        console.log(responseB)
    }
    catch(error){
        console.error(error)
    }
}
CreateUser()
// program 3
async function UpdateUser(id){
    try{
        let response = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'John Doe',
                job: 'Software Developer'
            })
        })
        let responseB = await response.json()
        console.log(responseB)
    }
    catch(error){
        console.error(error)
    }
}
//UpdateUser(7)








