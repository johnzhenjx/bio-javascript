const { combination } = require("js-combinatorics");
function comb(n, k){
  return Number(combination(n, k));
}

let n = 654321;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

function getLength(n){
  let length = 1;
  while(n > comb(ALPHABET.length, length)){ //combinatoric for a string of current length
    n -= comb(ALPHABET.length, length); //reduces remaining n
    length++; //we know that the correct string lies beyond this section
  }
  return [length, n];
}

function recurse(length, n, res=""){
  if(length == 0) return res;
  
  //start at letter after end of res as string must be alphabetical order
  let startIndex = res.length ? ALPHABET.indexOf(res.charAt(res.length - 1)) + 1 : 0; 

  //loops through every letter index starting from startIndex
  for(let i=startIndex; i<ALPHABET.length; i++){ 
    //combinatoric for the substring (length - 1) out of all remaining characters
    let currentcomb = comb(ALPHABET.length - i - 1, length - 1);
    
    //if n is within this section, add letter to res then call recursive function
    if(currentcomb >= n) return recurse(length - 1, n, res+ALPHABET[i]);
    n -= currentcomb; //reduces remaining n
  }
}

let [length, remainingN] = getLength(n);
console.log(recurse(length, remainingN))