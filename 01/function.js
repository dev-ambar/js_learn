// function sayHello(user) {
//     console.log(`Hello ${user}`);
// }

// function sayHello() {
//     console.log(`Hello Ankur4`);
// }

// function sayHello(user, user2) {
//     console.log(`Hello ${user} and ${user2}`);
// }

// sayHello(); // Hello undefined and undefined
// sayHello('Ambar4'); // Hello Ambar4 and undefined
// sayHello('Ambar4','arav4'); // Hello Ambar4 and arav4


function addNumbers(){
    console.log(arguments);

    let sum = 0;
    for(i = 0; i<arguments.length; i++){
        sum = sum + arguments[i]
    }

    console.log(sum)
    
}


// Spread operator == List of Values = Array of Values

function addNumbers2(...myVal) {
    let sum = 0;
    for(i = 0; i<myVal.length; i++){
        sum = sum + myVal[i]
    }

    console.log(sum)
}

addNumbers2(1,2,3,10,10,10);

