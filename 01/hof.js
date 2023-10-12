function add (a,b , cb){


    let sqrNSum = a*a + b*b;
     console.log("Sucess"); ;

    cb(sqrNSum);

}


const fn =  function printDigonal(val){
    let result = Math.sqrt(val)
    console.log(`printDigonal called with Value ${val} with result ${result}`);
}

add(3,4 , fn);