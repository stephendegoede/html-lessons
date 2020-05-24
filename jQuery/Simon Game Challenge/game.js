$(document).ready(function() {

  // VARIABLES
  var buttonColours = ["red", "blue", "green", "yellow"];
  var randomChosenColour;
  var gamePattern = [];

  var redAudio = new Audio("sounds/red.mp3");
  var blueAudio = new Audio("sounds/blue.mp3");
  var greenAudio = new Audio("sounds/green.mp3");
  var yellowAudio = new Audio("sounds/yellow.mp3");

  // FUNCTIONS

  function makeSound(colour) {
    switch (colour) {
      case "red":
        redAudio.load();
        redAudio.play();
        break;

      case "blue":
        blueAudio.load();
        blueAudio.play();
        break;

      case "green":
        greenAudio.load();
        greenAudio.play();
        break;

      case "yellow":
        yellowAudio.load();
        yellowAudio.play();
        break;

      default:

    }
  }

  function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;

  }

  $(document).keypress(function(event) {


    if (event.key == "a" || event.key == "A") {
      // Select the next random colour
      randomChosenColour = buttonColours[nextSequence()];

      // Add the colour to the sequence array (at the end)
      gamePattern.push("#" + randomChosenColour);

      // Fade that colour in and out
      $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

      // Play the sound for that colour
      makeSound(randomChosenColour);
    }


    // TESTING AREA
    console.log(event.key);
    console.log(nextSequence());
    console.log("#" + randomChosenColour);



  });
});
