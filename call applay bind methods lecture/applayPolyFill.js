Function.prototype.myApplay= function(context, ...argsArray){
if(typeof this!==`function`){
    throw new Error(`this is not a valid function to use myapplay`)
}
context.tempfun=this
context.tempfun(...argsArray || [])
}

const person1={
    name:"santhosth",
    age: 29,
    print:function(){
        console.log(`${this.name}, age ${this.age}`);
    },
    sum: function(num1,num2,num3){
        console.log(num1+num2+num3);
    }
}
const person2={
    name:"test",
    age: 3,
    print:function(){
        console.log(`${this.name}, age ${this.age}`);
    }
}
// person1.print.myApplay(person1);
const arr=[1,2,4]
person1.sum.myApplay(person2,arr);