# Unexpected Type Coercion in JavaScript Arithmetic

This repository demonstrates a common JavaScript bug caused by loose typing and type coercion in arithmetic operations.  The bug arises when using the `+` operator with mixed data types (numbers and strings).  JavaScript's loose typing system attempts to automatically convert the types before performing the operation, often leading to unexpected string concatenation instead of numerical addition.

## Bug Description
The `foo` function is intended to add two numbers. However, due to the loose typing nature of JavaScript, when one or both arguments are strings, the `+` operator performs string concatenation rather than numerical addition.

## Solution
The solution involves explicit type checking and conversion to ensure that both arguments are numbers before performing the addition. This eliminates the ambiguity and unintended type coercion.