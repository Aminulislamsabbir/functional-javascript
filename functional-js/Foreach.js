var arr = [1,2,3,4,5,6,7,8,9]

arr.forEach(function(element, index) {
    console.log('Element Value is ' + element + ' Index of ' + index);
})

 arr.forEach(function (n) {
    console.log( n*n);
})

\
// foreach function make

function Myfunction (arr, callback){
    for(var i = 0; i < arr.length; i++) {
        callback(arr[i] ,i, arr)
    }
} 

Myfunction(arr , function(element, i, arr){
    console.log('Element value is ' + element + ' Index of ' + i + ' and Array ' + arr);
    
})


