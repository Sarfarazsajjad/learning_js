var a = 1;
let b = 2;
var c = "hello";
var d = "a";
d = 5;
d = 5.6;

var f = 5 + a;
console.log('f=',f);

let obj = {};
obj.a = 1;
console.log(obj);
obj.merimarzikaobject = 5;

console.log(obj.merimarzikaobject);

function myFunction(){
 console.log('myFunction activated');
}

console.log(myFunction() == undefined);

myFunction.yo = 145;
console.log(myFunction);

let yoyofunction = myFunction;

yoyofunction();

function aFunctionCaller(callFunction){
 callFunction();
}

aFunctionCaller(yoyofunction);




















