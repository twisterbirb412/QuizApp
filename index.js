`use strict`;

//need variable to store question count and score count
//need variable that stores submitted answer
let questCount = 0;
let scoreCount = 0;
let questionArray = [];

//The starting screen 
//should have a button that users can click to start the quiz.

//-----button event listeners----------------
function startButtonPress() {
    $(".main-container").on("click", ".start", function(event) {
        event.preventDefault();
        startQuiz();
    });
}

function buttonSubmitQuestion() {
    $(".main-container").on("click", "button.submit", function(event) {
        event.preventDefault();

        if (answerSubmitted() === true) {
            assessAnswer();
            toggleSubmitToContinue();
        }
        else {
            window.alert("You must select an answer before continuing.");
        }  
    });
}

function buttonContinueQuiz() {
    $(".main-container").on("click", "button.continue", function(event) {
        event.preventDefault();

        toggleShowScore();

        if (questCount === 3) {
            endOfQuiz();
        }
        else {
            nextQuestion();
        }
    });
}

//-----initializing quiz-----------------------

function clearMainContainer() {
    $(".main-container").empty();

}

function resetCountAndScore() {
    questCount = 0;
    scoreCount = 0;
}

function clearCountContainers() {
    $('.count-container').empty();
}

function createImageContainer(){
    //creates div class 'img-container' inside main-container
    let htmlText = `<div class="img-container"></div>`
    $(".main-container").append(htmlText);
}

function createQuizContainer() {
    let htmlText = `<div class="quiz-content"></div>`
    $(".main-container").append(htmlText);
}

function createQuestionResults() {
    let htmlText = `<div class="quiz-results"><p>  </p></div>`
    $(".main-container").append(htmlText);
}

function createQuestionArray() {
    let questArray = QUIZDATA[(questCount - 1)];
    let plainTextVar = "";
    let valueVar = "";
    let returnArray = {};

    for (let i = 1; i < 5;  i++) {
        returnArray.length = 0;
        let correctAns = false;
        let iterateVar = 'answer' + String(i);
        let answerX = questArray[iterateVar];
        returnArray = {};

        //need to check to see if correct answer
            //if correct, need to splice the answer

        if (String(answerX.slice(-9)) === "__correct") {
            plainTextVar = String(answerX.slice(0,-9));
            correctAns = true;
        }
        else {   
            plainTextVar = answerX;
            correctAns = false;
        }

        valueVar = plainTextVar.replace(" ", "_");

        returnArray.plainText = plainTextVar;
        returnArray.valueText = valueVar;
        returnArray.booleanAnswer = correctAns;

        questionArray.push(returnArray);
    }

    console.log(questionArray);

}

function createQuizForm() {
    let addText = "";
    let htmlText = `                
    <form role="form" class="quiz-form">
    <label>Which bird is this?</label><br>`;

    for (let i = 0; i < 4; i++) {

        if (i === 0) {
            addText = `
            <input type="radio" name="birdType" value="` + questionArray[i].valueText + 
            `" required /><label class="birdTypeLabel" id='` + [i] + `'>` + questionArray[i].plainText + 
            `</label><br>`;
        }
      else {
        addText = `
        <input type="radio" name="birdType" value="` + questionArray[i].valueText + 
        `"/><label class="birdTypeLabel" id='` + [i] + `'>` + questionArray[i].plainText + 
        `</label><br>`;
        }

        htmlText = (htmlText + addText);
    }

    $(htmlText).append(`</form>`);

    $(".quiz-content").append(htmlText); 
}

function clearVariables(){
    //resets question count and score variables
}

function populateQuestionCountContainer(count) {
    $('.question').empty();
    htmlText = 'Question ';
    $('.question').append(htmlText + count);
}

function populateScoreCountCountainer(score, count) {
    $('.score').empty();
    $('.score').append(`You've scored ` + score+ ' out of '+ count +' questions correctly!');
}

function startQuiz() {
    //restarts the quiz at question 1
    //changes second class of 'bookend-screen' to 'quiz-container'
    clearMainContainer();
    resetCountAndScore();
    createImageContainer();    
    createQuestionResults();
    createQuizContainer();
    clearVariables();
    nextQuestion();
    toggleMainContainerToBookend();
}

//----action functions----------------

function clearQuizContent() {
    $('.quiz-content').empty();
}

function nextQuestion() {
    questCount++
    questionArray.length = 0;
    clearQuizContent();
    clearQuizResults();
    createQuestionArray();
    createQuizForm();
    nextImage();
    addSubmitButton();
    populateQuestionCountContainer(questCount);
    populateScoreCountCountainer(scoreCount, questCount);
}

function clearImageContainer() {
    $('.img-container').empty();
}

function nextImage() {
    clearImageContainer();

    let htmlText = `
    <img src="` + QUIZDATA[(questCount-1)].image + 
    `" alt="`+ String(QUIZDATA[(questCount-1)].altDesc) + `">`;

    $('.img-container').append(htmlText);
}

function clearQuizResults(){
    $('.quiz-results').empty();
    $('.quiz-results').removeClass('correct-answer wrong-answer');
}

function addSubmitButton() {
    let htmlText = `
    <button type="submit" class="function-button submit">
    <span class="button-label">Submit Answer</span>
    </button>`;

    $('.quiz-content').append(htmlText);
}

function toggleSubmitToContinue() {
    $('.function-button').toggleClass('submit')
    $('.function-button').toggleClass('continue')
    $('.button-label').empty();
    $('.button-label').append('Continue');
}

//------after answer is submitted-------------

function showResults() {
    toggleSubmittedAnswer();
    assessAnswer();
}

function toggleSubmittedAnswer(value) {
    //calls variable that stores the user's answer
    //adds class 'selected' to the label class
    for (i = 0; i < 4; i++) {
        if (value === questionArray[i].valueText) {
            $('#' + i).toggleClass(' selected');
        }
    }
}

function toggleCorrectAnswer() {
    for (let i = 0; i < 4; i++) {
        if (questionArray[i].booleanAnswer === true){
            $('#' + i).toggleClass(' correct');
        }
        else {
            $('#' + i).toggleClass(' wrong');
        }
    }
}

function correctOrIncorrect() {
    let correctlyAnswered = false;
    let htmlText = "";

    for (let i = 0; i < 4; i++) {
        if ($(`#` + i).hasClass("selected") && $(`#`+ i).hasClass("correct")) {
            correctlyAnswered = true; 
        }
    }

    if (correctlyAnswered === true) {
        htmlText = `<p>Correct!</p>`;
        $('.quiz-results').append(htmlText);
        $('.quiz-results').toggleClass(' correct-answer');
        scoreCount++;
    }
    else {
        htmlText = `<p>Incorrect!</p>`;
        $('.quiz-results').append(htmlText);
        $('.quiz-results').toggleClass(' wrong-answer'); 
    }
}

function toggleShowScore() {
    $('.score').toggleClass("show");
}

function answerSubmitted() {
    let checkedAnswer = false;
    let nameValue = document.getElementsByName('birdType');

    for (let i=0; i<4; i++) {
        if (nameValue[i].checked) {
            checkedAnswer = true;
        }
    }
    return checkedAnswer;
}

function assessAnswer() {
    let radioValue = "";

    let nameValue = document.getElementsByName('birdType');
    
    for (let i=0; i<4; i++) {
        if (nameValue[i].checked) {
            radioValue = nameValue[i].value;
        }
    }

    toggleSubmittedAnswer(radioValue);
    toggleCorrectAnswer();
    correctOrIncorrect();
    toggleShowScore();
}


//-----End of Quiz---------

function toggleMainContainerToBookend() {
    $('.main-container').toggleClass('quiz-container');
    $('.main-container').toggleClass('bookend');
    //change main-container class from quiz-container to bookend-container
}

function addEndText() {
    let htmlText = `
    <h2>How well do you know your birds?</h2>` + 
    `<h1>You identified ` + scoreCount + ` out of 10 birds correctly!</h1>`;

    $('.main-container').append(htmlText);
}

function addButtonPlayAgain() {
    let htmlText = `
    <button type="submit" class="function-button start">
    <span class="button-label">Play Again?</span>
    </button>`;

    $('.main-container').append(htmlText);
}

function endOfQuiz() {
    clearMainContainer();
    clearCountContainers();
    toggleMainContainerToBookend();
    addEndText();
    addButtonPlayAgain();
}

function runQuizApp() {
    startButtonPress();
    buttonSubmitQuestion();
    buttonContinueQuiz();

    
}

$(runQuizApp);