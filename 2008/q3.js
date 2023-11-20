let start = "7612543";

function moveToIndex(arr, oldIndex, newIndex){
  if(oldIndex < 0) oldIndex += arr.length;
  if(newIndex < 0) newIndex += arr.length;
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);  
  return arr;
}

function a(str){ return moveToIndex(str.split(""), 0, 3).join("");  }
function b(str){ return moveToIndex(str.split(""), -1, 3).join(""); }
function c(str){ return moveToIndex(str.split(""), 3, 0).join("");  }
function d(str){ return moveToIndex(str.split(""), 3, -1).join(""); }

let operations = [a, b, c, d];

function bfs(start, target){
  let distances = {}; distances[start] = 0;
  let queue = [start];

  while (queue.length){
    let current = queue.shift();
    if (current == target) return distances[current];

    operations.forEach((operation) => {
      let next = operation(current);
      if (!distances[next]){
        queue.push(next);
        distances[next] = distances[current] + 1;
      }
    });
  }
}

console.log(bfs(start, "1234567"));
