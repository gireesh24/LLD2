// Array.map
// if any browser not support call,applay and bind
// we have to create our own funcation and add to function proto type

Function.prototype.mybind= function(context,...args){
    //check if i calling mycall in function or not
    if(typeof this !=='function'){
        throw new Error("this fun must be call in a function")
    }
    context.temp=this
    return function(...args){
    return context.temp(...args)
    }
}

const person1={
    name:"vysyaraju",
    age: 29,
    print:function(){
        console.log(`${this.name}, age ${this.age}`);
    }
}

const person2={
    name:"IKS",
    age: 3,
    print:function(){
        console.log(`${this.name}, age ${this.age}`);
    }
}
const res1=person1.print.mybind(person1);
const res2=person1.print.mybind(person2);
const print=(["name",24]);
console.log(print)