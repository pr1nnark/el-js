// eleq js 3.1

function min (x, y) {
    if (x > y) {
        return y;
    } else if (x == y) {
        return null;
    } else {
        return x;
    }
}

console.log(min(0, 10));
console.log(min(0, -10));


// eleq js 3.1a

function min (x, y) {
    if (x > y)
        return y;
    else if (x == y)
        return null;
    else
        return x;
}

console.log(min(0, 10));
console.log(min(0, -10));