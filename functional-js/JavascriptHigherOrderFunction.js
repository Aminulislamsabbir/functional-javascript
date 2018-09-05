function greet (msg) {
    return function (name) {
        console.log(msg + ' ' + name );

        return function (data) {
            console.log(data);
            
        }
        
    }
}
var result = greet ('Good Morning')('Aminul Islam Sabbir')('Happy Coding');
