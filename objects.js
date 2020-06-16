var adder = {
    base: 10,

    add: function (a) {
        var f = (b) => {console.log(this.base)};
        f(); 
        // var f = v => v + this.base;
        // return f(a);
    },

    addThruCall: function (a) {
        // var f = v => v + this.base;
        // var b = {
        //     base: 2
        // };

        // return f.call(b, a);
    }
};

console.log(adder.add(1));         // This would log 2
// console.log(adder.addThruCall(1)); // This would log 2 still


// let myObj = {};

// myObj.a = 1;
// myObj.b = 2;
// myObj.f1 = function(){
//     console.log('hello');
//     console.log('PRINT a = ', this.a);
// }
// myObj.f1();


// function f2(obj){
//     console.log(obj);
//     obj.f1();
// }

// f2(myObj);

// let objA = {};
// objA.a = 5;

// let objB = objA;

// objB.a = 21;

// console.log(objB.a);
// console.log(objA.a);

// objA.f1 = myObj.f1;

// objA.f1();


var yoyo = {
    a : 1
}
yoyo.a +=1;
yoyo.b = [1,2,3,4,5];
console.log(yoyo.b.length);
yoyo.b.push(6);
console.log(yoyo.b);
yoyo.b.pop();
console.log(yoyo.b);

var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}


r1 = ['#','#','#']
r2 = ['#','#','#']
r3 = ['#','#','#']
console.log(r1);
console.log(r2);
console.log(r3);