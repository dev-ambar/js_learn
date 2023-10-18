// High order and call back function 

// in below example  fuction  add is high order function it take fuction as argument  and cb is  called call back function 
// it usefull where  your tak taken too much time and yu wwant when it complete it return his result in another  fucntion  which is call back.

/* function add (a,b , cb){
    let sqrNSum = a*a + b*b;
     console.log("Sucess");
    cb(sqrNSum);

}


const fn =  function printDigonal(val){
    let result = Math.sqrt(val)
    console.log(`printDigonal called with Value ${val} with result ${result}`);
}

add(3,8 , fn); */


// A hof function also return a fucntion 


function add (a,b , cb){


    let sqrNSum = a*a + b*b;
    
    let r = cb(sqrNSum);

    console.log(`squre and sume of two number  is ${sqrNSum}`)

    return () => console.log(`squreRoot of the number is ${r}`);

}
 
// pass this function as callback in to main function called HOF

const fn =  function printDigonal(val){
    let result = Math.sqrt(val)
    return result;
}

  // HOF retun  a fucntion 
  
 let finalResult = add(5,4 ,fn);
 
  finalResult();
