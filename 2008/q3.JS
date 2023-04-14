let start = "7612543";

function moveToIndex(arr, old_index, new_index) {
  while (old_index < 0) {
    old_index += arr.length;
  }
  while (new_index < 0) {
    new_index += arr.length;
  }
  if (new_index >= arr.length) {
    var k = new_index - arr.length;
    while ((k--) + 1) {
      arr.push(undefined);
    }
  }
   arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
  return arr;
}

function a(str){ return moveToIndex(str.split(""), 0, 3).join("");  }
function b(str){ return moveToIndex(str.split(""), -1, 3).join(""); }
function c(str){ return moveToIndex(str.split(""), 3, 0).join("");  }
function d(str){ return moveToIndex(str.split(""), 3, -1).join(""); }

let operations = [a, b, c, d];

//worse, runs out of time for last few cases
function dijkstra(start, target){
  var distances = {};
  let queue = [[start, 0]];

  while(queue.length){
    let current = queue.shift();
    distances[current] = current[1];
    if(current[0] == target) return distances[current];

    operations.forEach(operation => {
      let next = operation(current[0]);
      if(!distances[next] || distances[next] > current[1]+1) queue.push([next, current[1]+1]);
    })
    queue.sort((a,b) => {a[1] - b[1]});
  }
}

function bfs(start, target) {
  let visited = [];
  let queue = [[start, 0]];

  i = 0;
  while (queue.length) {
    let current = queue.shift();
    i++;
    console.log(i, current[0]);
    if (current[0] == target) return current[1];
    visited.push(current[0]);

    operations.forEach((operation) => {
      let next = operation(current[0]);
      if (!visited.includes(next)) {
        queue.push([next, current[1] + 1]);
        visited.push(next);
      }
    });
    //queue.sort((a,b) => {a[1] - b[1]});
  }
}

console.log(bfs(start, "1234567"));


