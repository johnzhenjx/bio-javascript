function sieve(end) { 
  const primes = new Array(end + 1).fill(true); 
  primes[0] = primes[1] = false; 

  for (let i=2; i*i<=end; i++) { 
    if(primes[i]){ 
      for(let j=i*i; j<=end; j+=i) primes[j] = false; 
    } 
  } 

  let res = new Set();
  for(let i=2; i<=end; i++){
    if(primes[i]) res.add(i); 
  }
  return res;
} 

const [limit,start,target] = "1000000 993851 995387".split(" ").map(x => parseInt(x));
const primes = sieve(limit);

console.log(bfs(primes,limit,start,target));

function bfs(primes,limit,start,target){
  let queue = [start];
  let distances = {}; distances[start] = 1;

  while(queue.length){
    let current = queue.shift();
    if(current == target) return distances[current];

    let connected = [];

    let negativeDiff = 1;
    while(current - negativeDiff >= 2){
      if(primes.has(current - negativeDiff)) connected.push(current - negativeDiff);
      negativeDiff *= 2;
    }
    let positiveDiff = 1;
    while(current + positiveDiff <= limit){
      if(primes.has(current + positiveDiff)) connected.push(current + positiveDiff);
      positiveDiff *= 2;
    }

    connected.forEach(next => {
      if(!distances[next]){
        queue.push(next); distances[next] = distances[current] + 1;
      }
    })   
  }
}