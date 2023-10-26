var questionEl = document.getElementById('question')
var startEl = document.getElementById('start-button')
var answerOneEl = document.getElementById('answer-one')
var answerTwoEL = document.getElementById('answer_two')
var answerThreeEl = document.getElementById('answer-three')
var answerFourEl = document.getElementById('answer-four')
var highscoreButtonEl = document.getElementById('highscores-button')
var scoreEl = document.getElementById('score')
var timeEl = document.getElementById('time')

var score = 0

var timeLeft = 120
var minusTime = 0

var questionOne = {
    question: 'How do you declare a variable?',
    answers: ['Var', 'Let', 'Const', 'Hi'],
    correntAnswer: 0
}

var questionTwo = {
    question: 'What will the console display for console.log("Hello World!")',
    answers: ['NAN', 'Hello World!', 'Null', 'String'],
    correntAnswer: 1
}

var questionThree = {
    question: 'Whats the answer to the following operation: 5 * 5 % 0',
    answers: ['NAN', '25', '0', '20'],
    correntAnswer: 0
}

var questionFour = {
    question: '',
    answers: ['', '', '', ''],
    correntAnswer: 0
}

var questionFive = {
    question: '',
    answers: ['', '', '', ''],
    correntAnswer: 0
}

var questionSix = {
    question: '',
    answers: ['', '', '', ''],
    correntAnswer: 0
}

var questionSeven = {
    question: '',
    answers: ['', '', '', ''],
    correntAnswer: 0
}

var questionEight = {
    question: '',
    answers: ['', '', '', ''],
    correntAnswer: 0
}

var questionNine = {
    question: '',
    answers: ['', '', '', ''],
    correntAnswer: 0
}

var questionTen = {
    question: '',
    answers: ['', '', '', ''],
    correntAnswer: 0
}