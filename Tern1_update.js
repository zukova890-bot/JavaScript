console.log(`1 файл`)

let a = Math.floor(Math.random()*100);
console.log(`Исходное а = ${a}`);

const cond1 = a > 10 ? a: a*2;
const cond2 = cond1 > 5;
const cond3 = a < 3 ? 1: 2*(a-2);
const cond4 = cond3 > 4;
const cond5 = a % 2 === 0;
const resultCalculate = (2*a)+1;

// через if else
let result1 = 0
if (cond2) {
    result1 = resultCalculate;
} else if (cond4) {
    result1 = 5;
} else if (cond5) {
    result1 = 6;
} else {
    result1 = 7;
}

console.log(`Результ через if else : ${result1}`);

// через switch
let result2 = 0
switch (true) {
    case cond2:
        result2 = resultCalculate;
        break;
    case  cond4:
        result2 = 5;
        break;
    case cond5:
        result2 = 6;
        break;
    default:
        result2 = 7;
}

console.log(`Результат через switch case: ${result2}`);