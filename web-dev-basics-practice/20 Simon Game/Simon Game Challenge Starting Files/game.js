//alert("ok");
var newEmptyPattern = [];
var userChoosenPattern = [];
///////
function audiosound(name) {
  switch (name) {
    case "green":
      var gr_aud = new Audio("./sounds/green.mp3");
      gr_aud.play();
      break;
    case "blue":
      var bl_aud = new Audio("./sounds/blue.mp3");
      bl_aud.play();
      break;
    case green:
      var red_aud = new Audio("./sounds/red.mp3");
      red_aud.play();
      break;
    case green:
      var yellow_aud = new Audio("./sounds/yellow.mp3");
      yellow_aud.play();
      break;
    default:
      console.log("wrong button");
      break;
  }
}
///////////////////
function animateClass(btnanimate) {
  $(".btn").on("click", function (event) {
    var animatedBtn = this.ev;
    document.querySelector("." + animatedBtn).classList.add(".pressed");
    setTimeout(() => {
      document.querySelector("." + animatedBtn).classList.remove(".pressed");
    }, 10);
  });
}

//////////////////////////
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3);
  var colorButtons = ["green", "red", "yellow", "blue"];
  var randomColorChoosen = colorButtons[randomNumber];
  newEmptyPattern.push(randomColorChoosen);
  $(randomColorChoosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  audiosound(randomColorChoosen);
}

///////////////////////
function userAction() {
  $(".btn").on("click", function (ev) {
    var userChoosenColor = this.ev;
    var idChoosenButton = "#" + userChoosenColor;
    userChoosenPattern.push(userChoosenColor);
    audiosound(userChoosenColor);
    animateClass(userChoosenColor);
  });
}
/////////////////////////////
function checkAnswer() {
  var indexOfUserPattern = userChoosenPattern.length - 1;
  var indexOfRandomPattern =
    newEmptyPattern.length - (itemsInArray - levelMeasure);
  if (
    userChoosenPattern[indexOfUserPattern] ==
    newEmptyPattern[indexOfRandomPattern]
  ) {
    bbool = true;
    while (userChoosenPattern.length > 0) {
      userChoosenPattern.pop();
    }
  } else {
    bbool = false;
    while (userChoosenPattern.length > 0) {
      userChoosenPattern.pop();
    }
    while (newEmptyPattern.length > 0) {
      newEmptyPattern.pop();
    }
    $("h1").text("Game Over!");
  }
}

//////////////////////////////
for (let x = 1; x < x + 1; x++) {
  $("h1").text("Press Any key to to Start");

  $("document").on("keypress", function () {
    var currentLevel = 1;
    var bbool = true;
    while (bbool) {
      $("h1").text("Level " + currentLevel);
    setTimeout(
      nextSequence()
    ,1000)
      var itemsInArray = newEmptyPattern.length;
      for (var levelMeasure = 0; levelMeasure < currentLevel; levelMeasure++) {
        userAction();
        checkAnswer();
      }
      currentLevel = currentLevel + 1;

    }
  });
}
//$(".btn").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//alert("ok");
