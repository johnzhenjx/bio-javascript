function getFactorPairs(num) { 
  const isEven = num % 2 === 0;
  const max = Math.sqrt(num);
  const inc = isEven ? 1 : 2;
  let factors = [];

  for (let curFactor = isEven ? 2 : 3; curFactor <= max; curFactor += inc) {
    let pair = [];
    if (num % curFactor !== 0) continue;
    pair.push(curFactor);
    let compliment = num / curFactor;
    pair.push(compliment);
    factors.push(pair);
  }

  
  return factors;
}

let target = 10000;

(arr = []).length = target+1; arr.fill(9999);
arr[0] = 0;

for(let i=1; i<arr.length; i++){
    arr[i] = Math.min(arr[i-1]+1, arr[i]);
    getFactorPairs(i).forEach(pair => {
        arr[i] = Math.min(arr[i], arr[pair[0]] + arr[pair[1]]);
    })
}

console.log(arr[arr.length-1]);