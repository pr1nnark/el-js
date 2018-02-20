// eleq js 4.3.1a
// Write an array to list function when given [1, 2, 3] as argument
function arrayToList(input) {
    var list = {};
    for (var i = input.length - 1; i >= 0; i--) {
        list = {
            value: input[i], 
            rest: list
        }
    }
    return list;
}
console.log(arrayToList([1, 2, 3]));

// eleq js 4.3.1b -- same as above, but with reverse().
function arrayToList(input) {
    input = input.reverse();
    var list = {};
    for (var i = 0; i < input.length; i++) {
        list = {
            value: input[i], 
            rest: list || null
        }
    }
    return list;
}
console.log(arrayToList([1, 2, 3]));

// eleq js 4.3.2
// now from list to array
function arrayToList(input) {
    input = input.reverse();
    var list = {};
    for (var i = 0; i < input.length; i++) {
        list = {
            value: input[i], 
            rest: list || null
        }
    }
    return list;
}
// ok giving up now
function listToArray(look) {
    var array = [];
    for (var listen = look; listen; listen = listen.rest) {
      array.push(listen.value);
    }
    return array;
}
console.log(listToArray(arrayToList([10, 20, 30])));

// fk knows... Will need to reread chapter 4. Maybe try the 3rd edition, see if it's less of a mess?
function prepend(value, rest) {
    return { 
        value: value, 
        rest: rest 
    };
}
console.log(prepend(1, null));