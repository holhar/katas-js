const calculateAge = require("./howOldWillIBeIn2099");

require("./howOldWillIBeIn2099");

test("Result should be 4", () => {
  expect(calculateAge(2012, 2016)).toBe("You are 4 years old.");
});

test("Result should be 27", () => {
  expect(calculateAge(1989, 2016)).toBe("You are 27 years old.");
});

test("Result should be 90", () => {
  expect(calculateAge(2000, 2090)).toBe("You are 90 years old.");
});

test("Result should be -10", () => {
  expect(calculateAge(2000, 1990)).toBe("You will be born in 10 years.");
});

test("Result should be 0", () => {
  expect(calculateAge(3400, 3400)).toBe("You were born this very year!");
});

test("Result should be 2000", () => {
  expect(calculateAge(900, 2900)).toBe("You are 2000 years old.");
});

test("Result should be -20", () => {
  expect(calculateAge(2010, 1990)).toBe("You will be born in 20 years.");
});

test("Result should be -510", () => {
  expect(calculateAge(2010, 1500)).toBe("You will be born in 510 years.");
});

test("Result should be 1", () => {
  expect(calculateAge(2011, 2012)).toBe("You are 1 year old.");
});

test("Result should be -1", () => {
  expect(calculateAge(2000, 1999)).toBe("You will be born in 1 year.");
});
