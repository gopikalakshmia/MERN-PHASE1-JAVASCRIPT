//array mutability

let mutArr=[1,2,3,4,5];
console.log(mutArr);
mutArr[2]=10;
console.log("Mudified array at index 2:",mutArr);
mutArr.length=3;
console.log("Mutable Array after changing length ",mutArr);

mutArr.push(11,12,13);
console.log("Mutable Array after pushing ",mutArr);

mutArr.pop();
console.log("Mutable Array after popping ",mutArr);

//Array Immutability
let immuArr=[1,2,3,4,5];
console.log("Immmutable Array ",immuArr);

let newArr=immuArr.map((n)=>2*n);
console.log("New Array ",newArr);

//avoid direct mutation
let outMut=[...immuArr,6,7];
console.log("New array without modification",outMut);
