const startBtn = document.querySelector("#start");
const startPrompt = document.querySelector("#start-prompt");
const questionContainer = document.querySelector("#questions");
const questionText = document.querySelector("#question-text");
const answersDiv = document.querySelector("#answers");
const timeEl = document.querySelector("#time");
const scoreEL = document.querySelector("#score");
const scoreContainer = document.querySelector("#scorecontainer");

// questions for the quiz
const questions = [
  {
    text: "what color is the sky?",
    answers: ["blue", "green", "red", "yellow"],
    correctIndex: 0,
  },
  {
    text: "what dogs are the best?",
    answers: ["big", "small", "fluffy", "all"],
    correctIndex: 3,
  },
  {
    text: "what is the best spiderman movie?",
    answers: ["1", "2", "3", "spiderverse", "homecoming"],
    correctIndex: 2,
  },
  {
    text: "best lightsaber color",
    answers: ["green", "blue", "red", "purple"],
    correctIndex: 3,
  },
  {
    text: "best anime of all time?",
    answers: ["yu yu hakusho", "hunterxhunter", "naruto", "one piece"],
    correctIndex: 1,
  },
];
let questionIndex = 0;


// event listeners on the buttons
startBtn.addEventListener("click", handleStartClick);
answersDiv.addEventListener("click", handleAnswer);
scoreEL.addEventListener("click", renderQuestion)


// start the quiz
function handleStartClick(e) {

    // hide the start quiz display
  startPrompt.style.display = "none";
//   timer for the quiz
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("the quiz is over");
    } 

  }, 1000);
//   show the question display
  questionContainer.style.display = "block";
//   start the timer
//   setTime();
//   render next quesiton
  renderQuestion();
}

// what to do when an answer is inputed
function handleAnswer(e) {
    // stop page reload
  e.preventDefault();
//   hide score display
  scoreContainer.style.display = "none";
  if (!e.target.matches("button")) return;
//   set answer of user equal to the button selected
  const userAnswer = e.target.textContent;
//   question array
  const question = questions[questionIndex];
//   the correct anser
  const correctAnswer = question.answers[question.correctIndex];
  // if(userAnswer === correctAnswer){
  //     console.log("that was right")
  // }else{
  //     console.log('that was wrong')
  // }
  if (userAnswer === correctAnswer) {
    //  add one to the user score
    userScore++;
    console.log("that was correct");
  } else {
    console.log("that was wrong");
    secondsLeft = secondsLeft - 10;
  }
  questionIndex++;

  if (questionIndex < questions.length) {
    renderQuestion();
  } else {
    renderResults();
    secondsLeft = 0;
  }
}

// how to get to the next question
function renderQuestion() {
  const currentQuestion = questions[questionIndex];
  questionText.textContent = currentQuestion.text;
  answersDiv.innerHTML = "";
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const answer = currentQuestion.answers[i];
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary", "style", "margin:10px");
    btn.textContent = answer;
    answersDiv.appendChild(btn);
    //     if (questionIndex === questions.length){
    //         return renderResults();
    //   }
  }
}
var userScore = 0;
var score = 0;
// results of the quiz
function renderResults() {
  const results = document.createElement('p');
  results.setAttribute("class", "btn btn-primary", "style", "margin:10px");
  results.textContent = score;
  scoreContainer.style.display = "block";
  questionContainer.style.display = "none";
  score = secondsLeft + userScore
  scoreEL.innerHTML = " ";
  scoreEL.textContent = ("Your score was " + score);
    // myStopFunction();
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary", "style", "margin:10px", "justify-content:center");
    btn.textContent = "play again?";
    scoreEL.appendChild(btn);
}

// the timer for the quiz
var secondsLeft = 75;

// function setTime() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft;

//     if (secondsLeft <= 0) {
//       clearInterval(timerInterval);
//       alert("the quiz is over");
//     } 

//   }, 1000);

// function myStopFunction() {
//     clearInterval(secondsLeft);
// }
// scoreEL.textContent = ("You got " + score + "/" + secondsLeft.length);
