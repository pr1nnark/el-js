// eleq js 4.2.1a -- with unshift and while loop
// Take an input array and produce new array with same elements in inverse order. 
function reversal(input) {
    var mirrorUniverse = [];
    var moustacheKirk = 0;
    while (input.length > moustacheKirk) {
        mirrorUniverse.unshift(input[moustacheKirk]);
        moustacheKirk++;
    }
    return mirrorUniverse;
}
console.log(reversal(["A", "B", "C"]));

// eleq js 4.2.1b -- with unshift and for loop
function reversal(input) {
    var mirrorUniverse = [];
    for (var i = 0; i < input.length; i++) {
        mirrorUniverse.unshift(input[i]);
    }
    return mirrorUniverse;
}
console.log(reversal(["A", "B", "C"]));

// eleq js 4.2.1c -- with push
function reversal(input) {
    var theUpsideDown = [];
    for(var i = input.length-1; i >= 0; i--) {
        theUpsideDown.push(input[i]);
    }
    return theUpsideDown;
}
console.log(reversal(["A", "B", "C"]));


// eleq js 4.2.2a -- no Math
// Same as above, but _modify_ the input array directly like .reverse().
/* Experienced troubles here, the main one being I didn't know this thing already existed:
https://en.wikipedia.org/wiki/In-place_algorithm */
function transporter(input){
    for(var i = 0; i < input.length / 2; i++) {
        var scotty = input[i];
        input[i] = input[input.length - 1 - i];
        input[input.length - 1 - i] = scotty;
    }
    return input;
}
console.log(transporter([1, 2, 3, 4, 5]));

// eleq js 4.2.2b -- with Math.floor; unsure if used correctly
function portalGun(input) {
    for (var i = 0; i < Math.floor(input.length / 2); i++) {
        var telefrag = input[i];
        input[i] = input[input.length - 1 - i];
        input[input.length - 1 - i] = telefrag;
    }
    return input;
}
console.log(portalGun([1, 2, 3, 4, 5]));

// eleq js 4.2.2c -- idea from web; solution using .splice
function pleaseSplice(input) {
    for (i = 1; i < input.length; i++) {
        var splicer = input.splice(i,1)
        input.unshift(splicer[0]);
	}
 return input;
}
console.log(pleaseSplice([1, 2, 3, 4, 5]));

