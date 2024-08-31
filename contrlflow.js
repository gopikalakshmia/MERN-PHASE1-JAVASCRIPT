
console.log("for loop");
for (let i=1;i<=5;i++){
    console.log(i);
}

console.log("While Loop");

let counter=3;
while(counter>0){
console.log(counter);
counter--;
}

console.log("do-while loop");

let doCounter=2;
do{

    console.log(doCounter);
    doCounter--;
}while(doCounter>0);

console.log("For-in");
let person={
    name:"John",
    age:30,
    job:"Developer"
}
for(let x in person){
    console.log(x +": "+person[x]);
}

console.log("for-of");
let arr=[1,2,3,4,5];
for (let num of arr){
    console.log(num);
}