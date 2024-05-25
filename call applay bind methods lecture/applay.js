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
    },
    print2: function(location,area){
        console.log(`Name is ${this.name} and age is ${this.age} he's placing on ${location}, he area is ${area}`)
    }
}
person1.print("india")
person1.sum(1,2,4);
// console.log(person1.print);
const person2 ={
    name:"raju",
    age:20,
}

const args=[1,2,5];
person1.sum.apply(person2,args);  // applay we can use multiple varibles in array fromate will send
person1.print.call(person2,"srikakulam"); // call method we can use argumetns in coma sperated formate
person1.print2.call(person2,"andhra", "narasannapeta");

// find max num given array
const arr=[10,89,90,23];
console.log(Math.max.apply(null,arr)) // applay we have to use context and arguments here we dont have any context so will pass null/undifend as context
console.log(Math.max.apply(undefined,arr))

// ES6 (2015 jS) way -> to write array in spread operator 
// when we use in a fun, a spread operator on an array
//it  will convert on comseprated in to bunch of coma sperated argumemts
console.log(Math.max(...arr))

// Rest operator
// when we used in definiation, it converts the function arguments into array
// Whenever you want to accept a dynamic number of arguments
 function max(...arr){
    console.log(arr);
 }
