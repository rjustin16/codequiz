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
        text: "is the sky blue",
        answers: ["true", "false"],
        correctIndex: 1,
    },
    {
        text: "is the sky blue",
        answers: ["true", "false"],
        correctIndex: 0,
    },
    {
        text: "is the sky blue",
        answers: ["true", "false"],
        correctIndex: 1,
    },
    {
        text: "is the sky blue",
        answers: ["true", "false"],
        correctIndex: 0,
    },
];
let questionIndex = 0;



startBtn.addEventListener("click", function(e){

startPrompt.style.display = "none";
questionContainer.style.display = "block";

const currentQuestion = questions[questionIndex]
questionText.textContent = currentQuestion.text;
for (let i= 0; i < currentQuestion.answers.length; i++){
    const answer = currentQuestion.answers[i];
    const btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = answer;
    answersDiv.appendChild(btn);

}
});

answersDiv.addEventListener('click', function(e){
    e.preventDefault();

    if (!e.target.matches('button'))return;
    const userAnswer = e.target.textContent;
    const question = question[questionIndex];
    const correctAnswer = question.answers[question.correctIndex];
    if(userAnswer === correctAnswer){
        console.log("that was right")
    }else{
        console.log('that was wrong')
    }


    console.log(e.target);
});