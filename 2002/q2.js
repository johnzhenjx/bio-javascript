let input = "2(3(4(io)b)b)b"
let operations = ["b", "i", "o"];
let instructions = [];

function parseInput(input){
    if(input.length==0) return;
    if(operations.includes(input[0])){
        instructions.push(input[0]);
        parseInput(input.substr(1));
    }
    else if(!isNaN(input[0])){
        if(input[1] == "("){
            for(let i=0; i<input[0]; i++){
                parseInput(input.substr(2, input.lastIndexOf(")")));
            }
            parseInput(input.substr(input.lastIndexOf(")")+1));
        }
        else {
            for(let i=0; i<input[0]; i++) instructions.push(input[1])
            parseInput(input.substr(2));
        }
    }
}

parseInput(input);

let cards = [1,2,3,4,5,6,7,8];
instructions.forEach(instruction => {
    if(instruction == "b") cards.push(cards.shift());
    else if(instruction == "i") cards = [cards[4], cards[0], cards[5], cards[1], cards[6], cards[2], cards[7], cards[3]];
    else cards = [cards[0], cards[4], cards[1], cards[5], cards[2], cards[6], cards[3], cards[7]];
})
console.log(cards);