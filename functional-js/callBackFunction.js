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


var Books = [   
    {
        title : 'JavaScript Definitive Guideline',
         price : 300
    },
     
    {
        title : 'You Don\'t know javaScript', 
        price : 50
    },

    {
        title : 'Elon Musk', 
        price : 70
    },

    {
        title : 'Rich Dad and Poor Dad', 
        price : 50
    },

    {
        title : 'How to java program' ,
        price : 200
    },

    {
        title : 'JavaScript Coocked Book' , 
        price : 80
    }
]

function Myfind (arr, callback) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}

var Big = Myfind(Books, function(n) {
    return n.price > 50;
})
console.log(Big);

var bookslength = Myfind (Books , function(n) {
    return n.title.length > 22
})

console.log(bookslength);

var num = [32,45,67,89,90,444,56,74,887,5,7554,88,3345,33];

var even = Myfind(num, function(n){
    return n%2 === 1
})

console.log(even);




