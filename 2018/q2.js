const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

let input = "31 ELEPHANT".split(" ");
let n = parseInt(input[0]);
let word = input[1];

let second = [];
let tempAlpha = [...ALPHA];
let currentIndex = 0;
while (second.length != 26) {
    currentIndex = (currentIndex + n - 1) % tempAlpha.length;
    second.push(tempAlpha[currentIndex]);
    tempAlpha.splice(currentIndex, 1);
}

let encrypted = "";
let rotation = 0;
[...word].forEach(char => {
    encrypted += second[(ALPHA.indexOf(char) + rotation) % ALPHA.length]; rotation++;
})

console.log(second.slice(0, 6).join(""));
console.log(encrypted);

//passes every case