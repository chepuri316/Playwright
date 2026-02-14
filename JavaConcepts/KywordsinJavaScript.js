// // let ,var ,const are keywords 

var a =50; // it is function scoped ,it is allowing re declaration of variable 
console.log(a);

// defination of the function 
function Test1(){

    var a =100;
    console.log(a);
    if(true){  
        var a=30;
        console.log(a);
    }
console.log(a);
}

// calling of the function 
Test1();
// *****************************Let Keyword*********************************************************
console.log("*******Let*************************************");
let b =10; // it is block scoped ,it is not allowing re declaration of variable 
console.log(b);

// defination of the function 
function Test2(){

    let b =20; // block scoped
    console.log(b);
    if(true){
        let b=40;// block scoped 
        console.log(b);
    }
console.log(b);
}
// calling of the function 
Test2();
console.log("*******const*************************************");
//****************const **********************************/

const h =12;
console.log(h);
