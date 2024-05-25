Function.prototype.customCall = function (obj,...args) {
    // Write your solution here ========================
obj.fun=this
const res=obj.fun(...args)
delete obj.fun
return res
}
//my function
function greet(){
return `Hello,`+this.name+`!`+this.age;
}
const person={
name:"raju",
age:28
};
const print=greet.customCall(person)
console.log(print)