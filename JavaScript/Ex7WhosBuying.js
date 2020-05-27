function whosPaying(names) {

  var person = Math.floor(Math.random() * names.length);
  var paying = names[person];
  var message = paying + " is going to buy lunch today!";
  return message;

}
