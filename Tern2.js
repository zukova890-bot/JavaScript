console.log(``)
console.log(`2 файл`)

// через if else
function ifmanyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  let result1 = ''

  if (a > 10) {
    result1 = 'a is bigger than 10';
  } else if (a === 5) {
    result1 = 'a is less than or equal to 10 an example of a special case';
  } else {
    result1 = 'a is less than or equal to 10 ';
  }

  if (a === 15) {
    result1 = result1 + 'but a is not 15';
  }

  if (a > 5) {
    result1 = result1 + 'and a is greater than 5';
  } else {
    result1 = result1 + 'and a is less than or equal to 5 ';
  }

  if (a % 2 === 1) {
    result1 = result1 + ' and a is odd';
  } else {
    result1 = result1 + ' and a is even '
  }

  console.log(`Результат через if else: ${result1}`);
  return result1;
}

// через switch case

function switchmanyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  let result2 = ''

  switch (true) {
    case a > 10:
      result2 = 'a is bigger than 10';
      break;
    case a === 5:
      result2 = 'a is less than or equal to 10 an example of a special case';
      break;
    default:
      result2 = 'a is less than or equal to 10 ';
  }

  switch (a) {
    case 15:
      result2 = result2 + 'but a is not 15';
      break;
    default:
      break;
  }

  switch (true) {
    case a > 5:
      result2 = result2 + 'and a is greater than 5';
      break;
    default:
      result2 = result2 + 'and a is less than or equal to 5 ';
  }

  switch (a % 2) {
    case 1:
      result2 = result2 + ' and a is odd';
      break;
    case 0:
      result2 = result2 + ' and a is even ';
  }

  console.log(`Результат через switch case: ${result2}`);
  return result2;
}

ifmanyChecks();
switchmanyChecks();

