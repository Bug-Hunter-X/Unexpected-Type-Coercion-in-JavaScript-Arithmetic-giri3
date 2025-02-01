function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);

  // Check for NaN after conversion
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Arguments must be numbers";
  }

  return a + b;
}
console.log(foo(1, 2)); // Expected output: 3
console.log(foo(1, "2")); // Expected output: 3
console.log(foo("1", 2)); // Expected output: 3
console.log(foo("1", "2")); // Expected output: 3
console.log(foo("a",2)); //Expected output: Invalid input: Arguments must be numbers