const calculator = require("./calculator");

test("adds two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(-1, 2)).toBe(1);
});

test("subtracts two numbers", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("multiplies two numbers", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.multiply(-2, 3)).toBe(-6);
});

test("divides two numbers", () => {
  expect(calculator.divide(6, 3)).toBe(2);
  expect(calculator.divide(6, 0)).toBe(Infinity); // or handle division by zero case
});
