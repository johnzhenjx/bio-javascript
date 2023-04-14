let initial = "DAE";
let n = 29;
let p = 1;

console.log(solve(initial, n, p))

function solve(str, n, p){
    for(let i=0; i<n; i++){
        let temp = "";
        [...str].forEach(char => {
            if(char == "A") temp += "B";
            else if(char == "B") temp += "AB";
            else if(char == "C") temp += "BC";
            else if(char == "D") temp += "DC";
            else if(char == "E") temp += "EE";
        })
        str = temp;
    }

    let sliced = str.slice(0, p);
    let occurences = sliced.split("").reduce((map, char) => {
        map[char] = (map[char] || 0) + 1;
        return map;
    }, {})

    occurences
    console.log(occurences)
}

//PASSES FOR EVERY CASE EXCEPT LAST ONE