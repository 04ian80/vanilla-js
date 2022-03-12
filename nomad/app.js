const age = 23;
function calculateFrAge(ageOfKr) {
  return ageOfKr - 2;
}

const frAge = calculateFrAge(age);
console.log(frAge);

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
  times: function (a, b) {
    return a * b;
  },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 1);
const divideResult = calculator.divide(36, minusResult);
const powerResult = calculator.power(minusResult, 2);
const timesResult = calculator.times(divideResult, powerResult);
