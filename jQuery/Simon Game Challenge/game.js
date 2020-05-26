$(document).ready(function() {

  // VARIABLES
  var buttonColours = ["red", "blue", "green", "yellow"];
  var randomChosenColour;
  var gamePattern = [];
  var userChosenButton = "";
  var userClickedPattern = [];
  var level = 0;
  var clicks = 0;

  var redAudio = new Audio("sounds/red.mp3");
  var blueAudio = new Audio("sounds/blue.mp3");
  var greenAudio = new Audio("sounds/green.mp3");
  var yellowAudio = new Audio("sounds/yellow.mp3");
  var wrongAudio = new Audio("sounds/wrong.mp3");

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
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    level++;
    $("h1").text("Level " + level);


    // Select the next random colour
    randomChosenColour = buttonColours[randomNumber];


    // Add the colour to the sequence array (at the end)
    gamePattern.push("#" + randomChosenColour);

    // Fade that colour in and out
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    // Play the sound for that colour
    makeSound(randomChosenColour);

  }

  function checkAnswer(currentClicks) {
    if (userClickedPattern[currentClicks] === gamePattern[currentClicks]) {
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function (){
          nextSequence()}
          , 1000);
      }
    } else {
        wrongAudio.load();
        wrongAudio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over")
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        level = 0;
    }
  }

  $(document).keypress(function(event) {

    if (level == 0) {
      gamePattern = [];
      nextSequence();
    }

    // TESTING
    // console.log(event.key);
    // console.log(nextSequence());
    // console.log("#" + randomChosenColour);
  });

  $(".btn").click(function(button) {

    userChosenButton = button.currentTarget.id;
    userClickedPattern.push("#" + userChosenButton);
    makeSound(userChosenButton);
    animatePress(userChosenButton);
    checkAnswer(userClickedPattern.length - 1);

    // TESTING
    // console.log(button.currentTarget.id);
    // console.log(userClickedPattern);
  });

  function animatePress(colour) {
    $("#" + colour).addClass("pressed");

    setTimeout(function() {
      $("#" + colour).removeClass("pressed")
    }, 100);
  }

});
