// eleq js 2.2a

var counter = 1;

while (counter <= 100) {
if (counter % 3 == false) {
console.log("fizz");
} else if (counter % 5 == false) {
console.log("buzz");
} else {
console.log(counter);
}
counter++;
}

console.log('\n');


// eleq js 2.2b

var counter = 1;

while (counter <= 100) {
if (counter % 3 == 0 && counter % 5 == 0) {
console.log("fizzbuzz");
} else if (counter % 3 == 0) {
console.log("fizz");
} else if (counter % 5 == 0) {
console.log("buzz"); 
} else {
console.log(counter);
}
counter++;
}
