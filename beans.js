// eleq js 3.3
// Use a function to print the length of a string
function getLength(s) {
    console.log("Length is " + s.length);
}
console.log(getLength("goodbye horses"));

// Use a function to print each letter of a string
function printLength(s) {
var eggo = 0;
while (s.length > eggo) {
    console.log(s.charAt(eggo));
    eggo++;
    }
}
console.log(printLength("all things pass into the night"));    

// Use a function to only print specific letters of a string
function printSpecific(s) {
var eggo = 0;
while (s.length > eggo) {
    if (s.charAt(eggo) == "o") {
        console.log(s.charAt(eggo));
        eggo++;
    } else {
    eggo++;
    }
    }
}
console.log(printSpecific("won't you listen to me"));  

// Use a function to count numbers of a certain letter
function countLetter(s) {
var wanted = "o";
var eggo = 0;
var howMany = 0;
while (s.length > eggo) {
    if (s.charAt(eggo) == wanted) {
        howMany++;
        eggo++;
    } else {
        eggo++;
        }
    }
console.log("How many? So many: " + howMany);
}
console.log(countLetter("hopes and dreams a lying on the ground"));   

// Use a function to count numbers of a variably defined letter
function countLetter(s,p) {
var eggo = 0;
var howMany = 0;
while (s.length > eggo) {
    if (s.charAt(eggo) == p) {
        howMany++;
        eggo++;
    } else {
        eggo++;
        }
    }
console.log("How many? So many: " + howMany);
}
console.log(countLetter("And I say, Oh no sir, I must say you're wrong", "o"));  