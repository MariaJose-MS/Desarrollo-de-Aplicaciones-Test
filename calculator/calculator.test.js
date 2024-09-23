const {divide, multiply} = require('./calculator');

/* Task 1*/
//test for the divide function
test("divides 10 / 2 to equal 5", () =>{
  expect(divide(10, 2)).toBe(5);
});

test("divides -10 / 2 to equal -5", () =>{
  expect(divide(-10, 2)).toBe(-5);
});

//test for the multiply function
test("multiply 5 * 2 to equal 10", () =>{
  expect(multiply(5, 2)).toBe(10);
});

test("multiply 5 / -2 to equal -10", () =>{
  expect(multiply(5, -2)).toBe(-10);
});

/* Task 3*/
test("Not possible to divide by 0", () => {
  const results = divide(5, 0);
  expect(results).toBe("Not possible to divide by 0");
})
