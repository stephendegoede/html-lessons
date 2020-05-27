function isLeap(year) {

  var four = year % 4;
  var hundred = year % 100;
  var fhundred = year % 400;
  var leap = "Leap year.";
  var notleap = "Not leap year.";

  if (four === 0) {
    if (hundred === 0 && fhundred === 0) {
      return leap;
    }

    if (hundred !== 0) {
      return leap;
    } else {
      return notleap;
    }
  } else {
    return notleap;
  }
}
