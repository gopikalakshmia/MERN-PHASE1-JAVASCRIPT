let n1=10;
let n2=5;
let result=n1+n2;
console.log("result "+result);

let sub=n1-n2;
console.log("Sub Result "+sub);

let mul=n1*n2;
console.log("mul result "+mul);

let modulus=n1%n2;
console.log("mod result ",modulus);

//comparison
n1="10";
n2=10;

let isEqual= n1===n2;
console.log("equal to:",isEqual);
let isNotequal= n1!==n2;
console.log("Notequal to:",isNotequal);
let greaterThan= n1>n2;
console.log("greater than :",greaterThan);
let greterthanqual= n1>=n2;
console.log("greaterthan eual to:",greterthanqual);
let lessthanoreqaul= n1<=n2;
console.log("lessthan equal eual to:",lessthanoreqaul);


//logical operations
let andOps=(n1>0)&&(n2>0);
console.log("and ops: ",andOps);
let orOps=(n1>0)||(n2>0);
console.log("or ops: ",orOps);
let notOps=!(n1>0);
console.log("Not ops: ",notOps);

//operator precedence 

n1=10;
n2=10;
let pre=n1+n2*3;
console.log("result",pre);
let associvityresult=n1-n2+5;
console.log("Associativity result",associvityresult);
let expression=n1*2+n2/2;
console.log("exp1",expression);
let exp2=n1+n2*n2-n1;
console.log("exp1",exp2);

//bitwise operators

let bitAnd=n1&n2;
console.log("bitAnd",bitAnd);
let bitOr=n1|n2;
console.log("bitOr",bitOr);
let bitXOR=n1^n2;
console.log("bitXOR",bitXOR);
let bitNOT=~n1;
console.log("bitNOT",bitNOT);
let bitLeftShift=n1<<1;
console.log("bitLeftShift",bitLeftShift);
let bitRightShift=n1>>1;
console.log("bitRightShift",bitRightShift);







