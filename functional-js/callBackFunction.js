// When I pass a Function inside a function and pass the function to argument form it is call back function

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
        console.log('AI Sabbir ' + data[props]);
    }
})


Greet (obj, function (data) {
    console.log(obj.Name.toUpperCase());
})
