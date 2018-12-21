var rect = require('./rectangle');
let solveRect = function(l,w){
    console.log(`Solving for rectangle with l =  ${l}, w = ${w}` );
    if (l <= 0 || w <= 0) console.log("wrong dimension");
    else {
        console.log(`The area of the rect is ${rect.area(l,w)}`);
        console.log(`The perimeter of the rect is ${rect.perimeter(l,w)}`);
    }
};

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-1,10);

