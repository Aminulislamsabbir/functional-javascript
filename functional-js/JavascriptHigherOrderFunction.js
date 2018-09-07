// The function that takes a function as argument and returns a function, and that function will be a pure function

function greet (msg) {
    return function (name) {
        console.log(msg + ' ' + name );

        return function (data) {
            console.log(data);
            
        }
        
    }
}
var result = greet ('Good Morning')('Aminul Islam Sabbir')('Happy Coding');

function myFun () {
    return function (name) {
        return name + ' is a problem solver';
    }
}

var p = myFun()('Aminul Islam Sabbir')
var x = p.toUpperCase();
console.log(x);


