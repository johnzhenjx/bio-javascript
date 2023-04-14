const ALPHA = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");


let input = "FFFFFFFF 512 1022".split(" ");
let plan = input[0]; let p = parseInt(input[1]); let q = parseInt(input[2]);

let rooms = ALPHA.slice(0, plan.length+2);

let complex = {};
rooms.forEach(r => {
   complex[r] = {visits: 0, adjacent: [], exitVisits: []};
}); 

let tmprooms = [...rooms]; let tmpplan = [...plan];
while(tmpplan.length){
  let validrooms = tmprooms.filter(r => {return tmpplan.indexOf(r)<0});
  let chosenRoom = validrooms[0]; 
  tmprooms.splice(tmprooms.indexOf(chosenRoom), 1);
  let chosenPlanRoom = tmpplan.shift();
  complex[chosenRoom].adjacent.push(chosenPlanRoom);
  complex[chosenPlanRoom].adjacent.push(chosenRoom);
}
complex[tmprooms[0]].adjacent.push(tmprooms[1]);
complex[tmprooms[1]].adjacent.push(tmprooms[0]);

for(let room of Object.keys(complex)){
  complex[room].adjacent.sort();
  console.log(complex[room].adjacent.join(""));
  for(let i=0; i<complex[room].adjacent.length; i++) complex[room].exitVisits.push(0);
}

let ans;
let move=1; let currRoom = "A";
while(move<=q){
  complex[currRoom].visits++;
  //odd
  if(complex[currRoom].visits % 2 == 1){
    complex[currRoom].exitVisits[0]++;
    currRoom = complex[currRoom].adjacent[0];
  }
  //even
  else {
    let firstOddExitIndex = complex[currRoom].exitVisits.indexOf(complex[currRoom].exitVisits.find(r => r%2==1));
    if(firstOddExitIndex == complex[currRoom].adjacent.length-1){
      complex[currRoom].exitVisits[firstOddExitIndex]++;
      currRoom = complex[currRoom].adjacent[firstOddExitIndex];
    }
    else {
      complex[currRoom].exitVisits[firstOddExitIndex+1]++;
      currRoom = complex[currRoom].adjacent[firstOddExitIndex+1];
    }
  }

  if(move == p) ans=currRoom;
  move++;
}
ans+=currRoom;

console.log(ans);
