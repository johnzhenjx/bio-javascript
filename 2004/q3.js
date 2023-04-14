const ALPHA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
const MORSE = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

let input = "typewriter";
let morseStr = input.split("").map(char => MORSE[ALPHA.indexOf(char)]).join("");

function solve(morseStr){
    let words = [];
    recurse();
    return words;
    
    function recurse(remaining = morseStr, translation = ""){
        if(translation.length > input.length) return;
        if(remaining.length==0 && translation.length == input.length) return words.push(translation);
        
        for(let i=0; i<MORSE.length; i++){
            if(remaining.substr(0, MORSE[i].length) == MORSE[i]) recurse(remaining.substr(MORSE[i].length), translation+ALPHA[i]);
        }
    }
}
