const obj = {
    value : 20,
    myFunc : function () {
        console.log(this.value); // 20
        console.log(this); // {value: 20, myFunc: ƒ}
    }
}

  obj.myFunc();


 const obj2 = {
    value : 20,
    myFunc : () => {
        console.log(this.value); // 20
        console.log(this); // {value: 20, myFunc: ƒ}
    }
}

obj2.myFunc();