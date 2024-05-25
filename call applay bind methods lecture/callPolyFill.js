// Array.map
// if any browser not support call,applay and bind
// we have to create our own funcation and add to function proto type

Function.prototype.myCall= function(context,...args){
    //check if i calling mycall in function or not
    if(typeof this !=='function'){
        throw new Error("this fun must be call in a function")
    }
    context.temp=this
    context.temp(...args)
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
person1.print.myCall(person1);
person1.print.myCall(person2);