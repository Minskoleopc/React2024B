
// program 1
//               0          1       2       3
let names  = ["chinmay","shirish","amol","ninad"]
console.log(names)

let [n1,n2,n3] = names
console.log(n1)
console.log(n2)
console.log(n3)


// let q1 = names[0]
// let q2 = names[0]
// let q3 = names[0]

// console.log(q1)
// console.log(q2)
// console.log(q3)

// program 2

let info = {
    firstName:"chinmmay",
    lastName:"deshpande",
    age:27
}

let fn = info.firstName
let ln = info.lastName
let ag = info.age

console.log(fn)
console.log(fn)
console.log(ag)

let {firstName:fn1,lastName:ln1,age:ag1} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)
console.log(fn1)
console.log(ln1)
console.log(ag1)

// spread and rest operator

// spread with array 
//              0         1         2        3
let cities  = ["pune","mumbai","banglore","kolkata"]
// cities.push("wardha")
// console.log(cities)
let newArr = [...cities,"wardha"]
console.log(newArr)
console.log(cities)

// rest operator with array
let fruits = ['apple',"mango","banana","orange"]
let [a1,...arr] = fruits
console.log(a1)
console.log(arr)


let numbers  = [11,22,33,44,55]
function addThree(a,b,c){
    console.log(a+b+c)
}
//addThree(numbers[0],numbers[1],numbers[2])
addThree(...numbers)

function addAll(...arr){
    console.log(arr)
    return arr.reduce(function(acc,el){
        return acc + el
    },0)
}
let q2 = addAll(12,33,44,55,66,77,33,44,55,66,77)
console.log(q2)

//1,2,3,4,5  -----> [1,2,3,4,5]
//[1,2,3,4,5] ---->  1,2,3,4,5,6

// program 3 

let infoe = {

    firstName:"chinmay",
    lastName:"deshpande",
    city:"pune"
    
}





let infob = {infoe,"age":34}
console.log(infob)

// spread operator with object
let infoc  = {...infoe,"age":34}
console.log(infoc)

// rest operator with objects 
let {city , ...infot} = infoe
console.log(city)
console.log(infot)


// program 4

//template literals
let firstN  = "chinmay"
let lastN = "deshpande"
console.log(`My firstName is ${firstN} and lastName is ${lastN}`)

let season = "summer"
console.log(`My current city is ${season === "winter"?"pune":"nagpur"}`)

let a = 10
let b = 5
a > b ? console.log("a is greater"):console.log("b is greater")
// output of template literals is always string

console.log(`${9+9}`)
console.log(9+9)

// 10 am 
// short circuting --- &&  and || and coalease operator
// arrow function 
// optional chaining 
// map() , reduce() , filter(),sort()










































