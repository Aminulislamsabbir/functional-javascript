/*

The Outer function's code can be accessed in the inner function and the inner function code can't be accessed in the code Outer Function.

*/

function outer () {
    var a = 30;

    function inner () {
       a;
        console.log('This is inner Function');
    }
    inner()
    console.log('This is outer Function');
    
}
outer()

function add (a,b) {
    
    function sum () {
        return a+b;
    }
    function sub () {
        return a-b;
    }
    function multi () {
        return a*b;
    } 
    function div () {
        return a/b
    } 

    return sum() + sub() + multi() + div()
}

var result = add(60, 4);


console.log(result);
