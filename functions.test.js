const {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide
} = require("./functions.js");

test("should return 2", () => {
  expect(returnTwo()).toEqual(2);
});

test("should return 'Hello, ' followed by input name", () => {
  expect(greeting("James")).toEqual("Hello, James.");
  expect(greeting("Jill")).toEqual("Hello, Jill.");
});

describe("Math functions", () => {
  test("should return the value of both numbers added", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(5, 9)).toEqual(14);
  });

  test("should return the value of num1 minus num2", () => {
    expect(subtract(1, 2)).toEqual(-1);
    expect(subtract(5, 9)).toEqual(-4);
  });

  test("should return the value of both numbers multiplied", () => {
    expect(multiply(1, 2)).toEqual(2);
    expect(multiply(5, 9)).toEqual(45);
  });

  test("should return the value of num1 divided by num2", () => {
    expect(divide(25, 5)).toEqual(5);
    expect(divide(12, 4)).toEqual(3);
  });
});
