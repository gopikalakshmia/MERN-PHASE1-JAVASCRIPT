let variable="I am variable";
const constexample="I am const";
var legacyex="I am a legacy variable";

console.log(variable);
console.log(constexample);
console.log(legacyex);

//update
variable="i have a new value";
legacyex="i am a new legacy variable";
///constexample="i am new const";

console.log(variable);
console.log(constexample);
console.log(legacyex);


//primitive
let stringEx="Hello Javascript";
console.log(stringEx +", Data type is "+typeof stringEx);

//number
let numEx=60;
console.log(`the value of NumEx is ${numEx} data type is ${typeof numEx}` );
//Boolean
let boolEx=true;
console.log(boolEx +", Data type is "+typeof boolEx);

//data type conversion

//convert- number-->string
let convertStr= String(numEx);
console.log("Converted string "+convertStr+" typpe of convert string is "+typeof convertStr);

//convert to string -->Number
let convertedNum=Number(convertStr);
console.log("Converted Number "+convertStr+" typpe of convert Number is "+typeof convertedNum);


//convert boolean-->string
let boolstr=String(boolEx);
console.log("Converted string "+boolEx+" typpe of convert string is "+typeof boolEx);

//convert boolean-->number
let bookNum=Number(boolEx);
console.log("Converted Number "+bookNum+" typpe of convert Number is "+typeof bookNum);



//Implicit conversion
let imConv="5"+5+5;
console.log(imConv);

//explicit conversion
let exConv=Number("5")+5+5;
console.log(exConv+" datatype "+typeof exConv);


let parseCon=parseInt("3.14");
let numConv=Number("3.14");
console.log(parseCon+" "+numConv);
