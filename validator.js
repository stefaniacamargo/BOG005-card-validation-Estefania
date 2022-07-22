/**
 * @param {string} cardNumber
 * @returns {boolean}
 */
  export function validator(cardNumber) {
  const numberList = cardNumber.split("");
  for (let index = 0; index < numberList.length; index += 2) {
    const double = numberList[index] * 2;
    if (double > 9) {
      let sum = 0;
      double
        .toString()
        .split("")
        .forEach(function (number) {
          sum += parseInt(number);
        });
      numberList[index] = sum;
    } else {
      numberList[index] = double;
    }
  }

  let totalSum = 0;
  numberList.forEach(function (number) {
    totalSum += parseInt(number);
  });

  if (totalSum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

/**
 *
 * @param {string} cardNumber
 * @returns {string}
 */
export function maskify(cardNumber) {
  if (cardNumber.length > 4) {
    const numberList = cardNumber.split("");
    for (let index = 0; index < numberList.length - 4; index++) {
      numberList[index] = "#";
    }
    return numberList.join("");
  } else {
    return cardNumber;
  }
}
