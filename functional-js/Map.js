var arr = [1,2,3,4,5,6,7,8,9];

var mapped = arr.map(function (n) {
    return n*n
})
console.log(mapped);



function Myfunction (arr, callback) {
    var result = [];
    for(var i = 0; i<arr.length; i++) {
        result.push(callback(arr[i]))
    }
    return result
}

var arrmap = Myfunction(arr, function (n) {
    return n*2;
})

console.log(arrmap);

var myObject = {a: 1, b:2, c:3, d:4 };

Object.keys(myObject).map(function(key) {
    myObject[key] *= 2;
 });
 
 console.log(myObject);
 