//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
let currentScore = document.querySelector(".current-score");
let numberOfQuestions = 10; // Default number of questions
let questionInput = document.getElementById("question-input");
let difficultySelect = document.getElementById("difficulty");
let tenseSelect = document.getElementById("tense");
let quizQuestions = [];

//Add this with your other variable declarations at the top
let quitButton = document.getElementById("quit-button");

//Replace the existing nextBtn event listener with this:
nextBtn.addEventListener("click", () => {
    questionCount += 1;
    if (questionCount == numberOfQuestions) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        // Update the score display
        document.getElementById("score-value").textContent = `${scoreCount} out of ${numberOfQuestions}`;
    } else {
        countOfQuestion.innerHTML = questionCount + 1 + " of " + numberOfQuestions + " Question";
        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
});

//Add this new event listener for the "Start New Quiz" button
document.getElementById("return-to-start").addEventListener("click", () => {
    // Hide the score container and show the start screen   
    scoreContainer.classList.add("hide");
    startScreen.classList.remove("hide");
    
    // Reset quiz state
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    
    // Clear the quiz container
    quizContainer.innerHTML = "";
    
    // Reset the current score display
    currentScore.innerHTML = "Score: 0";
});

//Add this event listener for the quit button
quitButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to quit the quiz? Your progress will be lost.")) {
        // Hide the quiz display
        displayContainer.classList.add("hide");
        // Show the start screen
        startScreen.classList.remove("hide");
        // Reset quiz state
        questionCount = 0;
        scoreCount = 0;
        count = 11;
        clearInterval(countdown);
        // Clear the quiz container
        quizContainer.innerHTML = "";
        // Reset the current score display
        currentScore.innerHTML = "Score: 0";
    }
});

//Remove or comment out the existing restart event listener, as it's no longer needed
//restart.addEventListener("click", () => { ... });

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    quizContainer.innerHTML = ""; // Clear existing questions
    quizQuestions = []; // Reset quiz questions
    let selectedTense = tenseSelect.value;
    let selectedDifficulty = difficultySelect.value;
    
    // Get questions for the selected difficulty and tense
    let availableQuestions = getQuestionsForDifficulty(selectedDifficulty, selectedTense);

    //generate quiz
    for (let i = 0; i < numberOfQuestions; i++) {
        let questionIndex = Math.floor(Math.random() * availableQuestions.length);
        let questionData = JSON.parse(JSON.stringify(availableQuestions[questionIndex]));
        
        // Shuffle the options
        questionData.options = shuffleArray(questionData.options);
        
        quizQuestions.push(questionData); // Store the question data
        
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = (i + 1) + " of " + numberOfQuestions + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = `Conjugate "${questionData.verb}" for "${questionData.pronoun}"`;
        div.appendChild(question_DIV);
        //options
        questionData.options.forEach(option => {
            let button = document.createElement("button");
            button.classList.add("option-div");
            button.onclick = function() { checker(this); };
            button.textContent = option;
            div.appendChild(button);
        });
        quizContainer.appendChild(div);
    }
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    let questionData = quizQuestions[questionCount];

    if (userSolution === questionData.correct) {
        userOption.classList.add("correct");
        scoreCount++;
        currentScore.innerHTML = `Score: ${scoreCount}`;
    } else {
        userOption.classList.add("incorrect");
        options.forEach((element) => {
            if (element.innerText == questionData.correct) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });

    // Set a timeout to move to the next question after 0.5 seconds (500 milliseconds)
    setTimeout(moveToNextQuestion, 500);
}

function moveToNextQuestion() {
    questionCount++;
    if (questionCount == numberOfQuestions) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        document.getElementById("score-value").textContent = `${scoreCount} out of ${numberOfQuestions}`;
    } else {
        countOfQuestion.innerHTML = questionCount + 1 + " of " + numberOfQuestions + " Question";
        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
    
    // Show the quit button
    quitButton.style.display = "block";
    
    // Update the question count display
    countOfQuestion.innerHTML = "1 of " + numberOfQuestions + " Question";
}

//when user click on start button
startButton.addEventListener("click", () => {
    let userInput = parseInt(questionInput.value);
    numberOfQuestions = userInput > 0 ? userInput : 10; // Use default 10 if input is invalid
    
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    // Hide the quit button initially
    quitButton.style.display = "none";
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};

document.addEventListener('DOMContentLoaded', function() {
    const difficultySelect = document.getElementById('difficulty');
    
    difficultySelect.addEventListener('change', function() {
        const availableDifficulties = verbDatabase.reduce((acc, verb) => {
            verb.tags.forEach(tag => acc.add(tag));
            return acc;
        }, new Set());

        if (!availableDifficulties.has(this.value)) {
            alert('This difficulty level is coming soon!');
            this.value = 'most_common_20'; // Reset to default
        }
    });
});
