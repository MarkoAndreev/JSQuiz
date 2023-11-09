var questionEl = document.getElementById("question");
var startEl = document.getElementById("start-button");
var answerOneEl = document.getElementById("answer-one");
var answerTwoEl = document.getElementById("answer-two");
var answerThreeEl = document.getElementById("answer-three");
var answerFourEl = document.getElementById("answer-four");
var highscoreButtonEl = document.getElementById("highscores-button");
var scoreEl = document.getElementById("score");
var timeEl = document.getElementById("time");
var answerStatusEl = document.getElementById("answer-status");

var score = 0;

var timeLeft = 120;
var minusTime = 0;

answerOneEl.style.display = "none";
answerTwoEl.style.display = "none";
answerThreeEl.style.display = "none";
answerFourEl.style.display = "none";

var questionOne = {
  question: "How do you declare a variable?",
  answers: ["Var", "Let", "Const", "Hi"],
  correctAnswer: 0,
};

var questionTwo = {
  question: 'What will the console display for console.log("Hello World!")',
  answers: ["NAN", "Hello World!", "Null", "String"],
  correctAnswer: 1,
};

var questionThree = {
  question: "Whats the answer to the following operation: 5 * 5 % 0",
  answers: ["NAN", "25", "0", "20"],
  correctAnswer: 0,
};

var questionFour = {
  question: "Inside which HTML element do we put the JavaScript?",
  answers: ["<html>", "<script>", "<stylesheet>", "<javascript>"],
  correctAnswer: 1,
};

var questionFive = {
  question: "Where in the HTML Doc do we link the JavaScript Script?",
  answers: ["<body>", "<main>", "<nav>", "<head>"],
  correctAnswer: 0,
};

var questionSix = {
  question: 'How do you write "Hello World" in an alert box?',
  answers: [
    'message("Hello World")',
    'alert("Hello World")',
    'messageAlert("Hello World")',
    'alertMessage("Hello World")',
  ],
  correctAnswer: 1,
};

var allQuestions = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
  questionSix,
];

var qIndex = 0;

function setTime() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = "Time :" + timeLeft;

    if (timeLeft === 0 || qIndex === allQuestions.length) {
      clearInterval(timeInterval);
      timeEl.textContent = "Time: 0";
      gameOver();
      addScore();
    }
  }, 1000);
}

function checkAnswer(selectedA) {
  var currentQ = allQuestions[qIndex];
  if (selectedA === currentQ.correctAnswer) {
    score += timeLeft;
  } else {
    timeLeft -= 10;
  }

  qIndex++;
  console.log(qIndex);
  scoreEl.textContent = "Score:" + score;

  if (timeLeft === 0 || qIndex === allQuestions.length) {
    addScore();
  } else {
    startGame();
  }
}

function gameOver() {
  questionEl.textContent = "Game Over!";
  answerOneEl.style.display = "none";
  answerTwoEl.style.display = "none";
  answerThreeEl.style.display = "none";
  answerFourEl.style.display = "none";
}

function addScore() {
  var highscores = {};

  if (JSON.parse(localStorage.getItem(highscores)) !== null) {
    highscores = JSON.parse(localStorage.getItem("highscores"));
  }

  if (window.confirm("Would you like to add your High Score?")) {
    var name = prompt("What are your initials?");
    highscores[name] = score;
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }
}

function eventListenerAdd() {
  answerOneEl.addEventListener("click", function (event) {
    event.stopPropagation();
    checkAnswer(0);
  });
  answerTwoEl.addEventListener("click", function (event) {
    event.stopPropagation();
    checkAnswer(1);
  });
  answerThreeEl.addEventListener("click", function (event) {
    event.stopPropagation();
    checkAnswer(2);
  });
  answerFourEl.addEventListener("click", function (event) {
    event.stopPropagation();
    checkAnswer(3);
  });
}

function startGame() {
  startEl.style.display = "none";

  if (qIndex < allQuestions.length && timeLeft > 0) {
    var currentQ = allQuestions[qIndex];
    questionEl.textContent = currentQ.question;

    answerOneEl.textContent = currentQ.answers[0];
    answerOneEl.style.display = "block";

    answerTwoEl.textContent = currentQ.answers[1];
    answerTwoEl.style.display = "block";

    answerThreeEl.textContent = currentQ.answers[2];
    answerThreeEl.style.display = "block";

    answerFourEl.textContent = currentQ.answers[3];
    answerFourEl.style.display = "block";
  } else {
    gameOver();
  }
}

startEl.addEventListener("click", function () {
  startGame();
  setTime();
  eventListenerAdd();
});

highscoreButtonEl.addEventListener("click", function () {
    console.log('hello')
  var highscores = JSON.parse(localStorage.getItem("highscores"));

  if (highscores !== null && Object.keys(highscores).length > 0) {
    var message = "High Scores:\n\n";

    for (var name in highscores) {
      var score = highscores[name];
      message += name + ": " + score + "\n";
    }
    alert(message);
  } else {
    alert("No High Scores available");
  }
});
