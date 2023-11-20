const ALPHA = ["A","B","C","D"]; 
let first = {A:"A", B:"D", C:"B", D:"C"};
let second = {A:"A", B:"C", C:"B", D:"D"};
let reflector = {A:"D", B:"C", C:"B", D:"A"}

function turnRotor(rotor){
    let res = {};
    for(let left of Object.keys(rotor)){
        res[left == "A" ? "D" : ALPHA[ALPHA.indexOf(left)-1]] = rotor[left] == "A" ? "D" : ALPHA[ALPHA.indexOf(rotor[left])-1];
    }
    return res;
}

function encryptLetter(letter){
    return Object.keys(first).find(left => first[left] == Object.values(first)[Object.values(first).indexOf(Object.keys(second).find(left => second[left] == reflector[second[Object.keys(second)[Object.keys(first).indexOf(first[letter])]]]))]);
}

let input = 
`14
AAABBB`.split("\n");
let n = parseInt(input[0]);
let word = input[1];

let previousFirstRotations = n % 4; let previousSecondRotations = Math.floor(n/4) % 4;
for(let pFR=0; pFR<previousFirstRotations; pFR++) first = turnRotor(first);
for(let pSR=0; pSR<previousSecondRotations; pSR++) second = turnRotor(second);

console.log(first, second)

let encrypted = "";
for(let i=1; i<word.length+1; i++){
    encrypted += encryptLetter(word[i-1]);
    first = turnRotor(first);
    console.log(i+n)
    if(i+n % 4 == 0) turnRotor(second);
}

console.log(encrypted);