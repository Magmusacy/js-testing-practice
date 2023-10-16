import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./utils";

test("Capitalize to capitalize first letter of a string", () => {
  expect(capitalize("taco")).toBe("Taco");
});

test("Reverse string reverses a string", () => {
  expect(reverseString("kajak")).toBe("kajak");
  expect(reverseString("kanye")).toBe("eynak");
  expect(reverseString("paweł")).toBe("łewap");
});

test("Calculator addition works", () => {
  expect(calculator.add(1, 69)).toBe(70);
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(1, -1)).toBe(0);
});

test("Calculator substraction works", () => {
  expect(calculator.substract(70, 1)).toBe(69);
  expect(calculator.substract(230, 130)).toBe(100);
  expect(calculator.substract(46, 23)).toBe(23);
});

test("Calculator division works", () => {
  expect(calculator.divide(1, 69)).toBe(0);
  expect(calculator.divide(2, 1)).toBe(2);
  expect(calculator.divide(1024, 512)).toBe(2);
  expect(calculator.divide(0, 2)).toBe(0);
  expect(() => calculator.divide(2, 0)).toThrow();
});

test("Calculator multiplication works", () => {
  expect(calculator.multiply(3, 23)).toBe(69);
  expect(calculator.multiply(32, 32)).toBe(1024);
  expect(calculator.multiply(1829832498, 0)).toBe(0);
});

test("Caesar cipher works with shifting by one", () => {
  expect(caesarCipher("ada", 1)).toBe("beb");
});

test("Caesar cipher works with shifting by -1", () => {
  expect(caesarCipher("beb", -1)).toBe("ada");
});

test("Caesar cipher works with shifting by a number higher than number of characters in the alphabet", () => {
  expect(caesarCipher("ada", 30)).toBe("ehe");
});

test("Caesar cipher works with shifting by a number lower than number of characters in the alphabet", () => {
  expect(caesarCipher("ada", -30)).toBe("wzw");
});

test("Caesar cipher shifts only letters", () => {
  expect(caesarCipher("Ada to sz!!!O:D)(??", 12)).toBe("Mpm fa el!!!A:P)(??");
});

test("Analysis of array [1,8,3,4,2,6] is an object with correct values", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
