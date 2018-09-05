function greet (msg) {
    return function (name) {
        console.log(msg + ' ' + name );

        return function (data) {
            console.log(data);
            
        }
        
    }
}
var result = greet ('Good Morning')('Aminul Islam Sabbir')('Happy Coding');

function outer () {

    console.log('I am host Function');
  
    return  function () {
        console.log('I am inner Function');

    }   
}

var acb = outer()();