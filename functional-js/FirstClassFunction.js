
function sayHi(name) {
    return 'Hello ' + name;
}
// 1. A Function can be stored in a Variable

// passed by reference sayHi

var hello = sayHi;
console.log(hello);   // output : [Function: sayHi]


var firstclass = hello;

console.log(firstclass('Aminul Islam Sabbir'));  // output : Hello Aminul Islam Sabbir


// 2. A Function can be stored in an Array


var array = [1,2,3,4,firstclass]

array.push(sayHi)
console.log(array);    // output : [ 1, 2, 3, 4, [Function: sayHi], [Function: sayHi] ]

// 3. A Function can be stored as an Object Field or Property

var obj = {
    name : 'Aminul Islam Sabbir',
    sayHi : sayHi,

    print : function () {
        console.log('Hello Git');        // Output : Hello Git

        
    } ()
}

console.log(obj);       // Output : { name: 'Aminul Islam Sabbir', sayHi: [Function: sayHi],  print: undefined } 

 
// 4. We can create function as needed 

var sum = 10 + (function () {
    return 90
})()

console.log(sum);       //  Output :100


// 5. We can pass function as an arguments

function love (name,wow) {
    return wow(name)
} 

var result = love('Aminul Islam Sabbir', sayHi)
console.log(result);


// 6. We can return function from another function

function base (b) {
    return function (n) {
        var result = 1;
        
        for(var i = 0; i<b ; i++) {
            result *= n;
        }
        return result
    }
}

// var power = base(2)
// var result = power (10);
// console.log(result); 
// output : 100

var result2 = base(2)(10)

console.log(result2);
