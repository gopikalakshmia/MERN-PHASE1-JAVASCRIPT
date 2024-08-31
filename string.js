let str1='Single Quotes String';
let str2="Double Quotes String";
let str3=`Temple literal String`;

console.log("Single quotes",str1);
console.log("Double quotes",str2);
console.log("Template Literal quotes",str3);


let myStringObj=new String("Hello, Javascript");
console.log("my string object ",myStringObj);

let firstChar=myStringObj[0];
let lastchar=myStringObj[myStringObj.length-1] ;

console.log("first char ",firstChar);
console.log("last char ",lastchar);

console.log("Char at 7",myStringObj.charAt(7));
console.log("Charcode at 7",myStringObj.charCodeAt(7));
console.log("concat ",myStringObj.concat(",I want to understand you"));
console.log("index of ",myStringObj.indexOf(","));
