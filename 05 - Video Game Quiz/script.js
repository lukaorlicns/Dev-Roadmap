const questions = [
    {
        question: "What item do you obtain first in Minecraft?",
        answers: ["Wood", "Cobblestone", "Bucket of water", "Emerald Block"],
        correct: 0
    },
    {
        question: "Which of these items takes up more space than 1x1?",
        answers: ["Cobblestone", "Glowstone", "Door", "Sand"],
        correct: 2
    },
    {
        question: "Which block is explosive?",
        answers: ["TNT", "Cobblestone", "Glass", "Oak Log"],
        correct: 0
    },
    {
        question: "Which block is the most valueable?",
        answers: ["Gold block", "Dirt block", "Diamond block", "Lapis block"],
        correct: 2
    }
];

const start_screen = document.getElementById("start_screen");
const question_screen = document.getElementById("question_screen");
const end_screen = document.getElementById("end_screen");

const start_button = start_screen.querySelector(".green");
const next_button = question_screen.querySelector(".green");
const start_again_button = end_screen.querySelector(".green");

const question_h2 = question_screen.querySelector("h2");
const question_p = question_screen.querySelector("p");
const answer_buttons = question_screen.querySelectorAll(".gray");
const score_p = end_screen.querySelector("p");
const score_h2 = end_screen.querySelector("h2");

let score = 0;
let current_question = 0;
let selected_answer = null;

function show_question() {
    question_h2.textContent = `Question ${current_question + 1}`;
    question_p.textContent = questions[current_question].question;

    answer_buttons.forEach((btn,index) => {
    btn.classList.remove("selected");
    btn.textContent = questions[current_question].answers[index];
});

    selected_answer = null;
}

start_button.addEventListener("click", function () {
    start_screen.style.display = "none";
    question_screen.style.display = "flex";
    show_question();
});

answer_buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
        selected_answer = index;

        answer_buttons.forEach(btn => {
    btn.classList.remove("selected");
});

button.classList.add("selected");
    });
});
next_button.addEventListener("click", function(){
    if (selected_answer === null){
        alert("Select a valid answer to proceed");
        return;
    }
    
    if (selected_answer === questions[current_question].correct){
        score++;
    }

    current_question++;
    
    if (current_question >= questions.length){
     
        score_p.textContent = `Your score is ${score}/${questions.length}`;
        end_screen.style.display = "flex";
        question_screen.style.display = "none";
        if (score<=Math.round(questions.length*0.4)){
            score_h2.textContent="Maybe try again :/";
        }
        else if(score<=Math.round(questions.length*0.7)){
            score_h2.textContent="Almost there :]";
        }
        else{
            score_h2.textContent="Amazing!";
        }
    } else {
        show_question();
    }
});

start_again_button.addEventListener("click", function() {
    score = 0;
    current_question = 0;
    end_screen.style.display = "none";
    question_screen.style.display = "flex";
    show_question();
});