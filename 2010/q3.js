//FAILS ON TIME FOR LAST INPUT

let input = `3 13
241 181 31`.split("\n"); 
const target = parseInt(input[0].split(" ")[1]);
const capacities = input[1].split(" ").map(x => parseInt(x));
//console.log(target, capacities);

const pours = [0,0,
  ["01", "10"],//2
  ["01", "02", "10", "12", "20", "21"],//3
]

console.log(solve(target, capacities));

function solve(target, capacities){
  if(capacities.length==1){
    if(target == 0) return 0;
    if(target == capacities[0]) return 1;
  }

  let distances = {}; distances[capacities.length == 2 ? "0 0" : "0 0 0"] = 0;
  let queue = [capacities.length == 2 ? [0,0] : [0,0,0]];

  while(queue.length){
    let current = queue.shift();
    if(current.includes(target)) return distances[current.join(" ")];

    let toCheck = [];
    //fill + empty
    for(i=0; i<current.length; i++){
      if(current[i] < capacities[i]){
        let filledState = [...current];
        filledState[i] = capacities[i];
        toCheck.push(filledState);
        //console.log("fill", filledState)
      }
      if(current[i] > 0){
        let emptyState = [...current];
        emptyState[i] = 0;
        toCheck.push(emptyState);
        //console.log("empty", emptyState)
      }
    }
    //pouring
    pours[capacities.length].forEach(pour => {
      //pour[0] decrease, pour[1] increase
      let amount = Math.min(current[pour[0]], capacities[pour[1]]-current[pour[1]]);
      let pourState = [...current];
      pourState[pour[0]] -= amount; pourState[pour[1]] += amount;
      toCheck.push(pourState);
      //console.log("pour", pour, pourState)
    })

    toCheck.forEach(state => {
      if(!distances[state.join(" ")]){
        distances[state.join(" ")] = distances[current.join(" ")] + 1;
        queue.push(state);
      }
    })
  }
}
