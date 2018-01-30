// eleq js 4.1
/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. */

function ranger(x,y) {
rangeArray = [];
    for (var steps = x; y >= steps; steps++) {
        rangeArray.push(steps);
    }
return rangeArray;
}
console.log(ranger(1, 10));


// eleq js 4.1b
/* Next, write a sum function that takes an array of numbers and returns the sum of these numbers. */

function suk() {
    var result = 0;
    var arrayLength = rangeArray.length;
    for (var i = 0; i < arrayLength; i++)
        var result = result + rangeArray[i];
    return result;
}
suk(ranger(1,10));


// eleq js 4.1c
/* Combination of the two */

function rangerSuk(x,y) {
rangeArray = [];
    for (var steps = x; y >= steps; steps++) {
        rangeArray.push(steps);
    }
// return rangeArray;
var result = 0;
var arrayLength = rangeArray.length;
    for (var i = 0; i < arrayLength; i++) {
        var result = result + rangeArray[i];
    }
return result;
}
rangerSuk(1, 10));


// eleq js 4.1d
/* Modify your range function to take an optional third argument that indicates the “step” value used to build up the array */

function ranger(x,y,z) {
rangeArray = [];
    if (z)
        for (var steps = x; y >= steps; steps++)
            rangeArray.push(steps);    
    else
        for (var steps = x; y >= steps; steps++)
            rangeArray.push(steps);
return rangeArray;
}
ranger(1, 10);
ranger(1, 10, 2);


// eleq js 4.1d-e
/* Make sure it works in reverse too*/

function ranger(x,y,z) {
rangeArray = [];
    if (z < 0)
        for (var steps = x; y <= steps; steps = steps + z)
            rangeArray.push(steps);
    else if (z > 0)
        for (var steps = x; y >= steps; steps = steps + z)
            rangeArray.push(steps);         
    else
        for (var steps = x; y >= steps; steps++)
            rangeArray.push(steps);
return rangeArray;
}
ranger(5, 2, -1);
            
// no infinite loop protection