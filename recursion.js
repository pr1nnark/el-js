// eleq js 3.2a - non-recursive

function isEven (x) {
    if (x % 2 == 0)
        return true;
    else
        return false;
}


// eleq js 3.2b - recursive

function isEven (n) {
    n = Math.abs(n);
    if (n == 0)
        return true;
    else if (n == 1)
        return false;
    else
        return isEven(n - 2);
}

// yak ak