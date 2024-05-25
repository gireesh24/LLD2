const person1={
    name: "raju",
    age:20,
    print:function(location){
        console.log(`your name ${this.name} , and your age is ${this.age}, and finally your from ${location}`)
    }
}

// call and applay both executes the funtion anad return the funcation
//but BIND will call the function and simply return a new fun that rembers in the context

const retrn=person1.print.bind(person1);
retrn("srikakulam");

const person2={
    name:"srinu",
    age: 89
}
const retrn2=person1.print.bind(person2);
retrn2("vizag");