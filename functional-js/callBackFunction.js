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

function callPrint (name, cp1, cp2) {
    console.log(name);
    
    cp1(name);
    cp2(name);
}

callPrint ('Aminul Islam Sabbir is a problem solver' , function (name) {
    console.log(name.toUpperCase());
}, function (name){
    console.log(name.split(''))
})

var obj = {
    Name : 'Aminul Islam Sabbir',
    Age :18,
    Roll : 773309,
    Skill : ['JavaScript', 'Hltm', 'CSS', 'Java'],
    Passion :['Wild Photograper','World Tour','Problem Solveing']
}

function Greet (data,cp) {
    cp(data) ;
}

Greet(obj, function(data){
    for (var props in data) {
        console.log('AI Sabbir ' + props);
    }
})

Greet(obj, function (data) {
        if(obj.Age > 20) {
            console.log('You are abult');
            
        }else {
            console.log('You are not abult ');
            
        }
})

Greet(obj, function (data) {
    for(var props in data) {
        console.log( data[props]);
    }
})


Greet (obj, function (data) {
    console.log(obj.Name.toUpperCase());
})


function Dowhatever (a,b, callback) {
     return callback (a,b);
}

var add = Dowhatever (23,4, function (a,b){
    return a+b;
} )

var subtract = Dowhatever (22,20, function(a,b) {
    return a -b;
} )

var multiply = Dowhatever (5,6, function (a,b) {
    return a*b;
})


var divide = Dowhatever (50,10, function (a,b) {
    return a/b
})

console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);





