//  function sayHello(user) {
//      console.log(`Hello ${user}`);
// }  
   
// sayHello("Ambar");

   
//  function sayHello() {
//      console.log(`Hello Ankur4`);
//  }


// function addition(num1 ,num2)
// {
//     console.log(num1+num2);
// }

// function multiple(num1 ,num2)
// {
//     return (num1*num2);
// }

// addition(8,5);
// let a = multiple(8,2);
// console.log('result is '+a);



// // function sayHello(user, user2) {
// //     console.log(`Hello ${user} and ${user2}`);
// // }

// // sayHello(); // Hello undefined and undefined
// // sayHello('Ambar4'); // Hello Ambar4 and undefined
// // sayHello('Ambar4','arav4'); // Hello Ambar4 and arav4

 
// unlimited arrgument can  passed   using arguments parameter
// function addNumbers(){

//     let sum = 0;
//     for(i = 0; i<arguments.length; i++){
//         sum = sum + arguments[i]
//     }

//     return sum;
    
// }
//    let ans = addNumbers(4,5,8,9,7,3);
//    console.log(`result is ${ans}`);


// // Spread operator == List of Values = Array of Values

function addNumbers2(...myVal) {
    let sum = 0;
    for(i = 0; i<myVal.length; i++){
        sum = sum + myVal[i]
    }

    console.log(sum)
}

addNumbers2(1,2,3,10,10,11);

