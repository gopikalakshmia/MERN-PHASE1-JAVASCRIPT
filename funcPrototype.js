///function constructor

function Emp(name,desig,yob){
    this.name=name;
    this.desig=desig;
    this.yob=yob;
}

Emp.prototype.calcAge=function(){
    console.log("The current age is ",(2024-this.yob))
}

console.log(Emp.prototype);

let e=new Emp('Gopi',"Developer",1993);
console.log("Employee Object : ",e);
e.calcAge();

let e1=new Emp('Hari',"Developer",1992);
console.log("Employee Object : ",e1);
e1.calcAge();

let e2=new Emp('Athi',"Developer",1994);
console.log("Employee Object : ",e2);
e2.calcAge();