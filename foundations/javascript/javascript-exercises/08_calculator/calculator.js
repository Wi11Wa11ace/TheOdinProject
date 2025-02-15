const add = function(a ,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentNum) => {
    return total + currentNum;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentNum) => {
    return total * currentNum;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a == 0) {return 1;};

	let newArray = [];
  while (a > 0) {
    newArray.push(a);
    a--;
  };

  return newArray.reduce((total, currentNum) => {
    return total * currentNum;
  });
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
