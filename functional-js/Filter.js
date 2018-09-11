var arr = [1,2,3,4,5,6,7,8,9]

var Put = arr.filter(function (n) {
    return n > 5 
})
console.log(Put);

var odd = arr.filter(function (n) {
    return n%2 === 1
})

console.log(odd);


// Filter array make

function MyArray (arr, callback) {
    var result = [];

    for( var i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}

var ODD = MyArray (arr, function( n) {
    return n%2 === 1;
})

console.log(ODD);

var even = MyArray (arr , function(n ) {
    return n%2 === 0;
} )

console.log(even);

var Big = MyArray ( arr , function (n) {
    return n > 4; 
})

console.log(Big);

