const person1={
    name: "mahesh",
    age: 30 ,
    // print: function(){
    //     console.log(`your name is ${this.name}, your age is ${this.age}`);
    // }
    print: function(location) {
        console.log(`Name is ${this.name} and age is ${this.age} he's placing on ${location}`)
    },
    sum:function(num1,num2,num3){
        console.log(num1+num2+num3);
    }
}
person1.print("india")
person1.sum(1,2,4);
// console.log(person1.print);
const person2 ={
    name:"raju",
    age:20,
}
person1.print.call(person2("mumbai")); // call method (first arugment is context and 2nd arguments varibles)
// person1.print.call(person2,"mumbai"); 
person1.sum.call(person2,1,2,3) // worng expecration
const args=[1,2,4];
person1.sum.apply(person2,args); // applay

// one way add a proto type
// console.log(person1.print.__proto__);
//  console.log(Function.prototype) // function adding to prototype
 //console.log(Array.prototype) // adding array proto type