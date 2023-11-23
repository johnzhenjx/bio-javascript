let n = "987654321";

function count(length){
  if(length==0) return 1;
  let section = Math.floor(length/2);
  return Math.pow(9,section);
}

//identify length;
let length = 1;
while(true){
  let possible = count(length);
  if(n <= possible) break;
  length++; n-=possible;
  //console.log(length, n)
}

let left = [];
while(left.length < Math.floor(length/2)){
  for(let i=1; i<=9; i++){
    //console.log(left, i, n)
    let possible = count(length-((left.length+1)*2));
    //console.log(possible)
    if(n <= possible){ left.push(i); break; }
    n-=possible;
  }
}

let right = [];
left.forEach(num => right.push(10-num));
let res = left.join("") + ( length % 2 == 1 ? "5" : "" ) + right.reverse().join("");
console.log(res);
