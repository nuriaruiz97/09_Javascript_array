/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

export const capitalizeMates = (MATES) => {
  const mapedArray = MATES.map((name) => {
    const currentName =
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return currentName;
  });

  return mapedArray;
};
