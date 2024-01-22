/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction I WILL ASUME I NEED TO USE REDUCE INSTEAD OF FOR LOOP
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

export const sumNumbersFromInitialValue = (initialValue, numbers) => {
  return numbers.reduce((sum, number) => sum + number, initialValue);
};
