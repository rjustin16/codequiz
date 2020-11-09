const startBtn = document.querySelector("#start")
const startPrompt = document.querySelector("#start-prompt")
const questionContainer = document.querySelector("#questions")
const questionText = document.querySelector("#question-text")
const answersDiv = document.querySelector("#answers")


const questions = [
    {
        text: "is the sky blue",
        answers: ["true", "false"],
        correctIndex: 0,
    },
    {
        text: "are dogs the best?",
        answers: ["no", "yes"],
        correctIndex: 1,
    },
    {
        text: "what color is the sun?",
        answers: ["green", "yellow"],
        correctIndex: 0,
    },
    {
        text: "do you like burritos?",
        answers: ["no", "yes"],
        correctIndex: 1,
    },
    {
        text: "when is my bday?",
        answers: ["oct", "nov"],
        correctIndex: 0,
    },
];
let questionIndex = 0;



startBtn.addEventListener("click", handleStartClick)


function handleStartClick(e){

startPrompt.style.display = "none";
questionContainer.style.display = "block";

renderQuestion();
}
const currentQuestion = questions[questionIndex]
questionText.textContent = currentQuestion.text;
for (let i= 0; i < currentQuestion.answers.length; i++){
    const answer = currentQuestion.answers[i];
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = answer;
    answersDiv.appendChild(btn)

};

answersDiv.addEventListener('click', handleAnswer)


function handleAnswer(e){
    e.preventDefault();

    if (!e.target.matches('button'))return;
    const userAnswer = e.target.textContent;
    const question = questions[questionIndex];
    const correctAnswer = question.answers[question.correctIndex];
    if(userAnswer === correctAnswer){
        console.log("that was right")
    }else{
        console.log('that was wrong')
    }
    questionIndex++;
    renderQuestion();
};

function renderQuestion() {
    const currentQuestion = questions[questionIndex]
questionText.textContent = currentQuestion.text;
answersDiv.innerHTML = "";
for (let i= 0; i < currentQuestion.answers.length; i++){
    const answer = currentQuestion.answers[i];
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = answer;
    answersDiv.appendChild(btn)
}
};
