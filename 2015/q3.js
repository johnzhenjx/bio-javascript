const { factorial } = require("js-combinatorics");

function perm(counts){
  return Number(factorial(counts[0]+counts[1]+counts[2]+counts[3]) / (factorial(counts[0])*factorial(counts[1])*factorial(counts[2])*factorial(counts[3]))); 
}

let inputarr = "5 5 5 5 11223344556".split(" ").map(Number);;
let counts = inputarr.slice(0, 4);
let n = inputarr[4];

let ALPHA = ["A", "B", "C", "D"];

function recurse(counts, n, res=""){
  if(eval(counts.join('+')) == 0) return res;
  
  for(let i=0; i<counts.length; i++){
    if(counts[i] != 0){
      let currentcounts = [...counts]; currentcounts[i]--;
      let currentperm = perm(currentcounts);
      if(currentperm >= n) return recurse(currentcounts, n, res+ALPHA[i]);
      n -= currentperm;
    }
  }
}


console.log(recurse(counts, n))

//WORKS FOR EVERY SINGLE CASE
