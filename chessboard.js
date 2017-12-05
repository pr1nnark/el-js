// eleq js 2.3a

var size = 8, counter = 1;
var even = "# # # # #", odd = " # # # #";

while (counter <= size) {
if (counter % 2 == 0) {
console.log(even);
} else {
console.log(odd);
}
counter++;
}


// eleq js 2.3b

var size = 8, counter = 1;

var odd = "# ".repeat(size);
var even = " #".repeat(size);

while (counter <= size) {
if (counter % 2 == 0) {
console.log(even);
} else {
console.log(odd);
}
counter++;
}


// eleq js 2.3c

var size = 25;

var odd = "# ".repeat(size);
var even = " #".repeat(size);

for (var counter = 1; counter <= size; counter++) {
if (counter % 2 == 0) {
console.log(even);
} else {
console.log(odd);
}
}