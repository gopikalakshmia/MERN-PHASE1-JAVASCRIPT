var myMap=new Map();

myMap.set("fname","Robb");
myMap.set("lname","jon");
myMap.set("age",30);
myMap.set("friend1","heln");
myMap.set("friend2","jan");

console.log("map ",myMap);

class Employee{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    details(){
        console.log(this.id+" "+this.name);
    }
}

var e1=new Employee(101,"John");
var e2=new Employee(102,"bob");

e1.details();
e2.details();

