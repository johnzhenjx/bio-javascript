let points = {
    A: {  
        straight: "D", 
        curved: ["E","F"],
    },
    B: {  
        straight: "C", 
        curved: ["G","H"],
    },
    C: {  
        straight: "B", 
        curved: ["I","J"],
    },
    D: {  
        straight: "A", 
        curved: ["K","L"],
    },
    E: {  
        straight: "A", 
        curved: ["M","N"],
    },
    F: {  
        straight: "A", 
        curved: ["N","M"],
    },
    G: {  
        straight: "B", 
        curved: ["O","P"],
    },
    H: {  
        straight: "B", 
        curved: ["P","Q"],
    },
    I: {  
        straight: "C", 
        curved: ["Q","R"],
    },
    J: {  
        straight: "C", 
        curved: ["R","S"],
    },
    K: {  
        straight: "D", 
        curved: ["S","T"],
    },
    L: {  
        straight: "D", 
        curved: ["T","M"],
    },
    M: {  
        straight: "U", 
        curved: ["L","E"],
    },
    N: {  
        straight: "U", 
        curved: ["E","F"],
    },
    O: {  
        straight: "V", 
        curved: ["F","G"],
    },
    P: {  
        straight: "V", 
        curved: ["G","H"],
    },
    Q: {  
        straight: "W", 
        curved: ["H","I"],
    },
    R: {  
        straight: "W", 
        curved: ["I","J"],
    },
    S: {  
        straight: "X", 
        curved: ["J","K"],
    },
    T: {  
        straight: "X", 
        curved: ["K","L"],
    },
    U: {  
        straight: "V", 
        curved: ["M","N"],
    },
    V: {  
        straight: "U", 
        curved: ["O","P"],
    },
    W: {  
        straight: "X", 
        curved: ["Q","R"],
    },
    X: {  
        straight: "W", 
        curved: ["S","T"],
    },
}

let flipflops = "GHIJKL".split("");
let start = "AE"
let n = 100;

for (let point of Object.keys(points)) {
    points[point].type = flipflops.includes(point) ? "flipflop": "lazy";
    points[point].current = points[point].curved[0];
}

let currentPoint = start[1];
let previousPoint = start[0];
for(let i=0; i<n; i++){
    //came from straight
    if(points[currentPoint].straight == previousPoint){
        previousPoint = currentPoint;
        currentPoint = points[currentPoint].current;
        if(points[previousPoint].type == "flipflop") points[previousPoint].current = points[previousPoint].current == points[previousPoint].curved[0] ? points[previousPoint].curved[1] : points[previousPoint].curved[0];
    } 
    //came from curved
    else {
        let tempPrevious = previousPoint;
        previousPoint = currentPoint;
        currentPoint = points[currentPoint].straight;
        if(points[previousPoint].type == "lazy") points[previousPoint].current = tempPrevious;
    }
}
console.log(previousPoint + currentPoint);