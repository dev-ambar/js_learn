function add(a, b) {
       console.log(`Number are ${a} and ${b}`);
       let sum = a +b
       return sum;
}


// console.log(add(2,3));

function add(a, b) {
    console.log(`Number are ${a} and ${b}`);
    let mult = a *b
    return mult;
}

function addOld2() {
    // console.log(`Number are ${a} and ${b}`);
    let mult = a *b
    return mult;
}

// console.log(add(2,3));
// console.log(addOld2(2,3));




const add2 =  (a, b) => {
    
    let sum = a +b
    return sum;
}

const mult =  (a, b) => {
    return  a  * b;
}

const mult2 =  (a, b) => a  * b


const add3 =  (...arg) => {
    
    let sum = 0;
    for(i = 0; i<arg.length; i++){
        sum = sum + arg[i]
    }
    return sum;
}

const add3a =  (...arg) => {
    let sum = 0;
    arg.forEach(e => sum = sum + e);
    return sum;
}


console.log(add2(2));
console.log(mult(2));
console.log(mult2(2,3));

console.log(add3a(2,3,10));

const sayHello = () => {
    return;
}
console.log(sayHello());


/* this is bessic defirence in normal function and arrow function 

1:   arguments object is not working in arrow function  if you want to print unlimited number of input parameters in arrow function 
     then use spread operator .for example is given above. 
2:   hosting is not allowed in arrow function 
3:   this keyword has globel scope if you print  this keyword it represent window object while in normal 
     function it return current calling object 
*/

