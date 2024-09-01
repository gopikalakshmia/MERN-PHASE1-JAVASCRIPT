var x=(2*3)+5;
var y=3*4;
var result=myFun(2,3);
console.log(result);

function myFun(n1,n2){
    var a=n1*n2;
    var b=n1+n2;
    return a+b
}

console.log(myFun(3,4));
function toCelsius(f){
    return (5/9)*(f-32);
}

console.log("The temperature in celsius ",toCelsius(60));