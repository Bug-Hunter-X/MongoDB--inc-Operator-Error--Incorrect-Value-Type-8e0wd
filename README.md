# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB: providing a string value instead of a number. The `$inc` operator is designed to increment a numeric field by a specified value.  Attempting to increment with a string value will result in an error.

## Bug Report

The provided JavaScript code shows the incorrect usage of the `$inc` operator.

## Solution

The solution involves ensuring that the value passed to the `$inc` operator is a number, not a string.
