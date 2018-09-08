// javascript sort array and object

var arr = [45,32,67,98,100,4333,8,9,23,5]

// Descending Order :- largest to the smallest number. 
arr.sort(function (a, b) {
    return b - a;
});

console.log(arr);


// Ascending Order :- smallest to the largest number.
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);


var obj = [
    {name : 'Aminul Islam Sabbir', age : 20},
    {name : 'AI Sabbir', age : 18},
    {name : 'Adol Rashid' , age : 20},
    {name : 'Tanvir Prodhan' , age: 20},
    {name : 'Mehedi Khan' , age : 19}, 
    {name : 'Pranto Khan', age : 22},
    {name : 'Sadia Islam Mow', age : 19},
    {name : 'Mr. Xoss', age : 15},
    {name : 'Ms. Meherun' , age : 14}
]

obj.sort(function (a, b) {
    return a.age -b.age;
})
console.log(obj);

obj.sort (function (a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name - b.name)  {
        return -1;
    } else {
        return 0
    }
})


console.log(obj);
