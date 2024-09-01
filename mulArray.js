//multi Array
let num=[[1,2,3],[4,5,6],[7,8,9]];
console.log(num.length);
console.log(num);
num.forEach(n=>console.log(n));
for(let i=0;i<num.length;i++){
console.log(num[i]);
for (let j=0;j<num[i].length;j++){
    console.log(num[i][j])
}
}