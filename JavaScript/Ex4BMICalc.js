function bmiCalculator(weight, height) {
  var calc = (weight / (height * height));
  calc = Math.floor(calc);
  return calc;
}
