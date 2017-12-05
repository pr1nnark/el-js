// eleq js 2.1a

console.log("while loop");
var tegn = '#'
while (tegn.length <= 7) {
console.log(tegn);
tegn = tegn + '#';
}

console.log("\n");


// eleq js 2.1b

console.log("do while loop");
var karat = '#'
do {
console.log(karat);
karat = karat + '#';
} while (karat.length <= 7)

console.log("\n");


// eleq js 2.1c

console.log("for loop");
for (var char = '#'; char.length <= 7; char = char + '#') {
console.log(char);
}
