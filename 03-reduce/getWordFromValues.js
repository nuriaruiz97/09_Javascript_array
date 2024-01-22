/**
 * Given 'VALUES' array, define function 'getWordFromValues' to return a string of all those numbers.
 *
 * expected: '123'
 */

const VALUES = [1, 2, 3];

export const getWordFromValues = (values) => {
  const stringNumbers = values.reduce((accumulated, actualValue) => {
    return accumulated + actualValue.toString();
  }, "");

  return stringNumbers;
};
console.log(getWordFromValues(VALUES));
