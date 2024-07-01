// tenary operator 

// let a = 10 
// let b = 5

// if(a > b){
//     console.log("a is greater")
// }
// else {
//     console.log("b is greater")
// }
// a > b ? console.log("a is greater"):console.log("b is greater")

// // program 2 
// let season = "winter"
// console.log(The city i am currently is ${season == "winter"?"pune":"nagpur"})

// program 3

// function declaration 

function additionA(x,y){
    return x + y
}
additionA(12,3)

// function expression 

let additionB = function(x,y){
    return x + y
}

// arrow funcion
let additionC = (x,y)=>{
    return x + y
}
let additionD = (x,y) => x + y


let numbers = [11,22,33,44,55,66,77]
console.log(numbers.map(el=>el+10))


// this keyword 

var firstName = "ninad"
var lastName = "dani"

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName:function(){
//         // this  ====> info
//         console.log(this.firstName + this.lastName)
//         let displayName2 = function(){
//             // this ==>  window
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()
//     }
// }

//info.displayName()


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName:function(){
//         // this  ====> info
//         console.log(this.firstName + this.lastName)
//         let displayName2 = ()=>{
//             // this ==>  info
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()
//     }
// }

// info.displayName()

// this ---> window
// let info3 = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     displayName:()=>{
//         // this -----> window
//         console.log(this.firstName + this.lastName)
//         let displayName2 = ()=>{
//             // this -----> window
//             console.log(this.firstName + this.lastName)
//         }
//         displayName2()
//     }
// }

// info3.displayName()