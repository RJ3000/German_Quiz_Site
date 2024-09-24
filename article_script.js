// References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
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
let quitButton = document.getElementById("quit-button");

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Quiz Creator
function quizCreator() {
    quizContainer.innerHTML = "";
    
    // We'll always use all questions now
    availableQuestions = [...articleQuestions];

    // Shuffle the available questions
    availableQuestions = shuffleArray(availableQuestions);

    for (let i = 0; i < numberOfQuestions; i++) {
        let questionData = getNextQuestion(i);
        
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        
        let questionDiv = document.createElement("p");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `What's the correct article for "${questionData.word}" (${questionData.meaning})?`;
        div.appendChild(questionDiv);

        // Keep the order of articles consistent
        const articles = ["die", "der", "das"];
        articles.forEach(article => {
            let button = document.createElement("button");
            button.classList.add("option-div");
            button.textContent = article;
            button.onclick = () => checker(button);
            div.appendChild(button);
        });

        quizContainer.appendChild(div);
    }

    quizDisplay(questionCount);
}

function getNextQuestion(index) {
    // If we've reached the end of availableQuestions, shuffle and start over
    if (index >= availableQuestions.length) {
        availableQuestions = shuffleArray(availableQuestions);
        return availableQuestions[index % availableQuestions.length];
    }
    return availableQuestions[index];
}

// Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    let questionData = getNextQuestion(questionCount);

    if (userSolution === questionData.article) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        options.forEach((element) => {
            if (element.innerText == questionData.article) {
                element.classList.add("correct");
            }
        });
    }

    options.forEach((element) => {
        element.disabled = true;
    });

    currentScore.innerHTML = `Score: ${scoreCount}`;
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

// Function to display quiz
function quizDisplay(questionCount) {
    let quizCards = document.querySelectorAll(".container-mid");
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
}

// Timer
function timerDisplay() {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            moveToNextQuestion();
        }
    }, 1000);
}

// Function to start the quiz
function startQuiz() {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
}

// Initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
    currentScore.innerHTML = `Score: ${scoreCount}`;
    quitButton.style.display = "block";
    countOfQuestion.innerHTML = "1 of " + numberOfQuestions + " Question";
}

// Event listeners
startButton.addEventListener("click", () => {
    let userInput = parseInt(questionInput.value);
    numberOfQuestions = userInput > 0 ? userInput : 10; // Use default 10 if input is invalid
    startQuiz();
});

nextBtn.addEventListener("click", moveToNextQuestion);

quitButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to quit the quiz? Your progress will be lost.")) {
        const cheatsheet = document.getElementById('cheatsheet');
        const showCheatsheetCheckbox = document.getElementById('show-cheatsheet');

        // Hide the cheatsheet and uncheck the checkbox
        cheatsheet.classList.remove('visible');
        showCheatsheetCheckbox.checked = false;

        // Reset the quiz state
        startScreen.classList.remove("hide");
        displayContainer.classList.add("hide");
        questionCount = 0;
        scoreCount = 0;
        count = 11;
        clearInterval(countdown);
        quizContainer.innerHTML = "";
        currentScore.innerHTML = "Score: 0";
    }
});

document.getElementById("return-to-start").addEventListener("click", () => {
    const cheatsheet = document.getElementById('cheatsheet');
    const showCheatsheetCheckbox = document.getElementById('show-cheatsheet');

    // Hide the cheatsheet completely
    cheatsheet.style.display = 'none';
    showCheatsheetCheckbox.checked = false;

    scoreContainer.classList.add("hide");
    startScreen.classList.remove("hide");
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    quizContainer.innerHTML = "";
    currentScore.innerHTML = "Score: 0";
});

// Initialize the quiz when the page loads
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");

    const cheatsheet = document.getElementById('cheatsheet');
    const showCheatsheetCheckbox = document.getElementById('show-cheatsheet');

    showCheatsheetCheckbox.addEventListener('change', () => {
        if (showCheatsheetCheckbox.checked) {
            cheatsheet.classList.add('visible');
        } else {
            cheatsheet.classList.remove('visible');
        }
    });
};

function displayResult() {
    const scoreContainer = document.querySelector(".score-container");
    const userScore = document.getElementById("user-score");
    const cheatsheet = document.getElementById('cheatsheet');
    const showCheatsheetCheckbox = document.getElementById('show-cheatsheet');

    // Hide the cheatsheet completely
    cheatsheet.style.display = 'none';
    showCheatsheetCheckbox.checked = false;

    // Hide the quiz container and show the score container
    displayContainer.classList.add("hide");
    scoreContainer.classList.remove("hide");

    // Display the user's score
    userScore.innerHTML = `Your score is ${scoreCount} out of ${numberOfQuestions}`;
}