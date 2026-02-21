// 1to100 -  numer divisibly by 3 ,it is Fizz and numer divisibly by 5 ,it is Buzz 
// divisible by both 3and 5 it is fizzbuzz 
 
// I will use if -else -if statement here 

for(let i=1;i<=100;i++){

if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
}
else if(i % 3 === 0){
console.log("Fizz");
}
else if(i % 5 === 0){
    console.log("Buzz");
}
else{
console.log(i);
}

}