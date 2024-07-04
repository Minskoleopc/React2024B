// Promise.all()
// Promise.any()
// Promise.race()
// Promise.allSettled()

async function PromiseAll(){
   let a =  await Promise.all([
        Promise.resolve("hello"),
        Promise.reject("hello2"),
        Promise.resolve("hello3"),
    ])

    console.log(a)
}
//PromiseAll()

async function PromiseAllSettled(){
    let b =  await Promise.allSettled([
         Promise.resolve("hello"),
         Promise.reject("hello2"),
         Promise.resolve("hello3"),
     ])
 
     console.log(b)
 }
 PromiseAllSettled()

 function Student(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('studentOne')
        },3000)
    })
 }
 function StudentTwo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('studentTwo')
        },2000)
    })
 }

 async function getRacePromise(){
   let b =  await Promise.race([
        Student(),
        StudentTwo()
    ])
    console.log(b)
 }
 getRacePromise()


 // Promise.any()
 async function getPromiseAny(){
    let b =  await Promise.any([
         Promise.reject("bye"),
         Promise.reject("bye2"),
         Student(),
         StudentTwo()
     ])
     console.log(b)
  }
getPromiseAny()
 