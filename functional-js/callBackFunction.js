// When I pass a Function inside a function and pass the function to argument form it is a call back function

function mycall (name,cp){
    cp (name);
} 

mycall('Aminul Islam Sabbir', function (name){
    console.log(name.toUpperCase());
})

mycall('Adol Rashid', function (name) {
    console.log('Hello ' + name.toLowerCase())
})

