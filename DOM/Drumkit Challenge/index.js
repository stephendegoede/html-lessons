var w = new Audio("sounds/crash.mp3");
var a = new Audio("sounds/kick-bass.mp3");
var s = new Audio("sounds/snare.mp3");
var d = new Audio("sounds/tom-1.mp3");
var j = new Audio("sounds/tom-2.mp3");
var k = new Audio("sounds/tom-3.mp3");
var l = new Audio("sounds/tom-4.mp3");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound (buttonInnerHTML);
    buttonAnimation (buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event){
  var keyboardPressed = event.key;
  makeSound (event.key);
  buttonAnimation (event.key);
})

function buttonAnimation (currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add ("pressed");
  // delay (1);
  setTimeout (function (){
    activeButton.classList.remove ("pressed")
  }, 100);
}


function makeSound (key){
  switch (key) {
    case "w":
      w.play();
      break;

    case "a":
      a.play();
      break;

    case "s":
      s.play();
      break;

    case "d":
      d.play();
      break;

    case "j":
      j.play();
      break;

    case "k":
      k.play();
      break;

    case "l":
      l.play();
      break;

    default:

  }
}
