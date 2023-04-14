function add(current, other){
  current += other[0];
  other = other.substr(1);
  return [current, other];
}

function swap(current){
  currentarr = current.split("");
  [currentarr[0], currentarr[1]] = [currentarr[1], currentarr[0]];
  return currentarr.join("");
}

function rotate(current){
  let front = current[0];
  return current.substr(1) + front;
}

function solve(target){
  //if(target.split("").sort().join("") == target) return target.length;
    
  var distances = {};
  let chars = target.split("").sort().join("");
  let queue = [["", chars, 0]];
  //let priorityQueue = new PriorityQueue([["", chars, 0]]);

  while(queue.length){
    let dq = queue.shift();
    //console.log(dq)
    let current = dq[0]; let other = dq[1]; let distance = dq[2];
    distances[current] = distance;

    if(current == target) return distances[target];

    let newStates = [];

    if(other.length > 0){
      operation = add(current, other);
      newStates.push([operation[0], operation[1], distance+1]);
    }
    if(current.length > 1){
      newStates.push([swap(current), other, distance+1]);
      if(current.length > 2){
        newStates.push([rotate(current), other, distance+1]);
      }
    }

    newStates.forEach(newState => {
      if(!distances[newState[0]] || distances[newState[0]] > newState[2]){
        queue.push(newState);
      }
    })
    queue.sort((a,b) => {a[2] - b[2]});
  }
  //return distances[target];
}

//console.log(solve("AEDBC")) BUGGED WITH RETURN AT BOTTOM
console.log(solve("ABCDEFHGJKI"))

//SOLUTION FAILS ON TIME FOR LONGER/MORE COMPLEX CASES