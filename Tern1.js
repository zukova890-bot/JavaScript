console.log(`1 файл`)

let a = Math.floor(Math.random()*100);
console.log(`Исходное а = ${a}`);

// через if else
let result1 = 0
if ((a > 10 ? a: a*2) > 5) {
    result1 = (2*a)+1;
} else if (a < 3 ? 1: 2*(a-2) > 4) {
    result1 = 5;
} else if (a % 2 == 0) {
    result1 = 6;
} else {
    result1 = 7;
}

console.log(`Рузульт через if else : ${result1}`);

// через switch
let result2 = 0
switch (true) {
    case (a > 10 ? a: a*2) > 5:
        result2 = (2*a)+1;
        break;
    case  a < 3 ? 1: 2*(a-2) > 4:
        result2 = 5;
        break;
    case a % 2 == 0:
        result2 = 6;
        break;
    default:
        result2 = 7;
}

console.log(`Рузультат через switch case: ${result2}`);