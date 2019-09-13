const startQuiz = document.getElementById('startQuiz');
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const counter = document.getElementById('counter');
const timerBar = document.getElementById('timerBar');

const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const progress = document.getElementById('progress');
const scoreContainer = document.getElementById('scoreContainer');


let questions = [

    {
        question : "When did the Second World War end?",
        choiceA : "1850",
        choiceB : "1945",
        choiceC : "1905",
        choiceD : "1948",
        correct: "B"
    },
    {
        question : "What is the smallest bone in the body?",
        choiceA : "Ear",
        choiceB : "Nose",
        choiceC : "Toe",
        choiceD : "Finger",
        correct: "A"
    },
    {
        question : "Which is the only mammal that can't jump?",
        choiceA : "Sloth",
        choiceB : "Leapord",
        choiceC : "Polar Bear",
        choiceD : "Elephant",
        correct: "D"
    },
    {
        question : "Which is the largest Ocean?",
        choiceA : "Indian Ocean",
        choiceB : "Pacific Ocean",
        choiceC : "Atlantic Ocean",
        choiceD : "Arctic Ocean",
        correct: "B"
    },

    {
        question : "How many dots does a dice have?",
        choiceA : "50",
        choiceB : "42",
        choiceC : "44",
        choiceD : "40",
        correct: "B"
    }

]

const lastQuestion = questions.length -1
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const barWidth = 150;
const barUnit = barWidth / questionTime;
let score = 0;

startQuestion = () => {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "<p>"
choiceA.innerHTML = q.choiceA;
choiceB.innerHTML = q.choiceB;
choiceC.innerHTML = q.choiceC;
choiceD.innerHTML = q.choiceD;
}



startGame = () => {
    startQuiz.style.display = "none";
    startQuestion();
    quiz.style.display = "block";
    nextQuestion();
    timer = setInterval(nextQuestion, 1000);
}
startQuiz.addEventListener('click', startGame)



nextQuestion = () => {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timerBar.style.width = count * barUnit + "px";
        count++;
    } else {
        count = 0
        if (runningQuestion < lastQuestion){
            runningQuestion++;
            startQuestion();
        
        } else {
            clearInterval(timer)
            finalScore();
        }
    }
}

checkAnswer = (answer) => {
    if (answer == questions[runningQuestion].correct){
        score++
        console.log(score)
        progress.innerHTML = "<p>" +score+ " / 5 </p>"
        progress.innerHTML = "<p>" +score+ " / 5 </p>"
    } 

    count = 0;
    if( runningQuestion < lastQuestion){
        runningQuestion++;
        startQuestion()
    } else {
        clearInterval(timer);
        finalScore();
        
    }
}


finalScore = () => {
    quiz.style.display = "none";
    scoreContainer.style.display = "block";
    scoreContainer.innerHTML = "<p> You scored : </p>"
    scoreContainer.innerHTML += "<p>"+ score + "/ 5</p>"
}
