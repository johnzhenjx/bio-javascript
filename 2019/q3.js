let inputarr = prompt("").split(" ");
let n = parseInt(inputarr[0]);
let start = inputarr[1].split("");

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWYXYZ".split("");


function findValid(current, remaining){
  let res = [];
  
  for(let i=0; i<remaining.length; i++){
    let toAdd = remaining[i];

    let valid = true;    

    let smallest = null;
    for(let char of current){
      if(smallest == null || ALPHABET.indexOf(char) < ALPHABET.indexOf(smallest)) smallest = char;
      else if(ALPHABET.indexOf(toAdd) > ALPHABET.indexOf(char) && ALPHABET.indexOf(char) > ALPHABET.indexOf(smallest)) {
        valid = false;
        break;
      }
    }

    if(valid){
      let newRemaining = [...remaining];
      newRemaining.splice(i, 1);
      res.push([current+toAdd, newRemaining]);
    }
  }

  return res;
}

function solve(n, start){
  let res = 0;
  
  let chars = ALPHABET.slice(0, n);
  start.forEach(char => {
    chars.splice(chars.indexOf(char), 1)
  })

  let queue = [[start.join(""), chars]]; // [current, remaining]
  while(queue.length){
    let currentArr = queue.shift();
    //console.log(currentArr)

    let current = currentArr[0]; let remaining = currentArr[1];
    if(remaining.length == 0) res++;

    //FIND VALID ADDITIONS
    let validArr = [];
    for(let i=0; i<remaining.length; i++){
      let toAdd = remaining[i];
  
      let valid = true;    
  
      let smallest = null;
      for(let char of current){
        if(smallest == null || ALPHABET.indexOf(char) < ALPHABET.indexOf(smallest)) smallest = char;
        else if(ALPHABET.indexOf(toAdd) > ALPHABET.indexOf(char) && ALPHABET.indexOf(char) > ALPHABET.indexOf(smallest)) {
          valid = false;
          break;
        }
      }
  
      if(valid){
        let newRemaining = [...remaining];
        newRemaining.splice(i, 1);
        validArr.push([current+toAdd, newRemaining]);
      }
    }

    //console.log(validArr)
    validArr.forEach(toQueue => queue.push(toQueue));
  }

  return res;
}

console.log(solve(n, start))

//WORKS FOR ALL SOLUTIONS, RUNS OVER TIME LIMIT FOR INPUTS OVER 12 CHARACTERS LONG