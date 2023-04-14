//let length = parseInt(prompt(""));
//let start = prompt("");
let start = "547389126"; let length = start.length;

function inRange(target, a, b){
  if(a > b){
    if(target < a && target > b) return true;
    else return false;
  }
  else {
    if(target < b && target > a) return true;
    else return false;
  }
}

function solve(start){
  if(start.split("").sort() == start) return 0;
  let queue = [start];
  let discovered = [start];
  let allPaths = [[start]];

  while(queue.length){
    let current = queue.shift();
    let currentPath = allPaths.filter(path => path.at(-1) == current)[0];

    for(let i=0; i<length-1; i++){
      let a = parseInt(current[i]);
      let b = parseInt(current[i+1]);

      let valid = false;
      if(current[i-1] && inRange(parseInt(current[i-1]), a, b)) valid = true;
      if(current[i+2] && inRange(parseInt(current[i+2]), a, b)) valid = true;

      //console.log(current[i-1], a, b, current[i+2], valid)
      
      if(valid){
        let currentArr = current.split("");
        [currentArr[i], currentArr[i+1]] = [currentArr[i+1], currentArr[i]];
        let toQueue = currentArr.join("");

        if(!discovered.includes(toQueue)){
          queue.push(toQueue);
          discovered.push(toQueue);
          
          let newPath = [...currentPath];
          newPath.push(toQueue);
          allPaths.push(newPath);
        }
      }
    }
  }
  return allPaths[allPaths.length - 1].length - 1;
  //console.log(allPaths.sort((a, b) => a.length - b.length))
}

console.log(solve(start))

//SOLUTION WORKS FOR EVERY CASE