function fibonacciGenerator(n) {
  var first = 0;
  var second = 1;
  var fib = 0;
  var sequence = [];

  for (var i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    }

    if (i == 1) {
      sequence.push(1);
    }

    if (i > 1) {
      fib = first + second;
      first = second;
      second = fib;
      sequence.push(fib);
    }
  }

  return sequence;
}
