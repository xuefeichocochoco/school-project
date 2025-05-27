function multiply(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Inputs must be integers');
  }

  const result = a * b;
  console.log(`Result of ${a} and ${b}: ${result}`);
}

multiply(2, 3);
