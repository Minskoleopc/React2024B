// truthy and falsy 

// NaN
// program 1

let a ;
console.log(a)
console.log(12 + a)

// NaN , null ,0 ,"",7 !== 7
// true , 9 == 9 , 8 != '8' , 7 == 7, {}, [] , " ","3"

if({}){
    console.log("hello")
}
else {
    console.log('bye')
}

// && , || , !

let a1 = "" && 7
console.log(a1)

let a2 = 8 === 8 && 7
console.log(a2)


let a11 = 0
let b12 = 42
let b13 = null 
let b14 = "hello" 

console.log(a11 && b12)
console.log(b13 && b14)

// || 

let b15 = null 
let b16 = 7 != 7
let f = b15 || b16
console.log(f)


b15b = "A"
let f12 = b15b || b16
console.log(b15b)

let h1 = false
let h2 = 10 === '10'
let r = false || h2


let j  = 9 > 11
let k = undefined
let jk = k || j


//coalese

console.log(null ?? "hello")
console.log(0 && 'hello')
console.log(null ?? 'hello')

// let a111 = 0
// if(a111 == null || a111 === undefined){
//     console.log("hello")
// }
// else {
//     console.log("bye")
// }

// console.log(7 === 7 && 8 === 8)
// console.log(6 != 6 && "6")
// console.log(6 != 6 || "6")
// console.log( 8 == 5 ?? "6")
// console.log( " "?? "6")
// console.log( undefined ?? "6")
// let w111 =  null ??  8 === 8


// optional operator 
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shrish deshpande"
    }

}

console.log(info?.parent?.father)





