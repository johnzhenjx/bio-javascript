var memoize = require("memoizee");

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let input = `12 5 12 
3344554433999`.split("\n"); input[0] = input[0].split(" "); input[0].pop();

let [p,q,r] = input[0]; let n = input[1];

//all ints
function count(remaining, leftAdj, leftAdjCount, maxAdjCount, letters){
    if(leftAdjCount > maxAdjCount) return 0;
    if(remaining == 0) return 1;
    let total = 0;
    for(let i=0; i<letters; i++){
        if(i == leftAdj) total += count(remaining-1, leftAdj, leftAdjCount+1, maxAdjCount, letters);
        else total += count(remaining-1, i, 1, maxAdjCount, letters);
    }
    return total;
}
count = memoize(count, { primitive: true });

let res = [];
let leftAdj; let leftAdjCount=0;

while(res.length < r){
    //iterating for current letter (building res)
    for(let i=0; i<p; i++){
        newAdjCount = (i == leftAdj) ? leftAdjCount+1 : 1;
        let currCount = count(r-res.length-1,i,newAdjCount,q,p);
        if(currCount >= n){
            res.push(i); leftAdj = i; leftAdjCount = newAdjCount; break;
        }
        n -= currCount;
    }
}
console.log(res.map(i => CHARS[i]).join(""))