let arr=[1,2,3,4,5];
console.log("Length ",arr.length);
console.log("Array ",arr);

arr.push(6,7,8);
console.log("array after push ",arr);
console.log("Array length ",arr.length);

let poppedelement=arr.pop();
console.log("popped element ",poppedelement);
console.log("length after pop ",arr.length);

let shiftelem=arr.shift();
console.log("shifter element ",shiftelem);
console.log("after shift length ",arr.length);

arr.unshift(0,-1);
console.log("array after unshift ",arr);
console.log("length after unshift ",arr.length);

let secondArr=[8,9,10];
console.log("after concat ",arr.concat(secondArr));
console.log("length: ",arr.length);

let joinedStr=arr.join("|");
console.log("Joined string ",joinedStr);


let slicedArray=arr.slice(2,5);
console.log("Original array",arr);
console.log("sliced Array ",slicedArray);

let splicedArray=arr.splice(2,3,"a","b","c");
console.log("Array after splice",arr);
console.log("Spliced Array ",splicedArray);


//iterate th'arrays
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}
let splicedArray2=arr.splice(2,3,2,3,4);
console.log(arr);

console.log("For each");
arr.forEach((n)=>{
    console.log(n);
})


let squarevalueArr=arr.map((n)=>{
    return n*n
})

console.log("Sqared array ",squarevalueArr);

let fileterArr=arr.filter((num)=>(num!=0 && num%2==0 ))
console.log(fileterArr);

let reduceArr=arr.reduce((acc,val)=>acc+val,0)
console.log("sum of array :",reduceArr);