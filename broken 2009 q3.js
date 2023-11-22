let [targetSum, n] = "12 1752".split(" ").map(s => parseInt(s));

let res = "";
let currSum = 0;
while(currSum < targetSum){
  if(Math.pow(2,targetSum-currSum-1) == n){
    res += targetSum-currSum; break;
  }
  for(let i=1; i<=targetSum-currSum; i++){
    let newCurrSum = currSum + i;
    
    let possible = Math.pow(2, targetSum-newCurrSum-1);
    console.log(currSum, n, res, i, possible)
    if(n<=possible){
      res += i + " ";
      currSum = newCurrSum;
      break;
    }
    n-=possible;
  }
}
console.log(res)