`use strict`;

//need starting array to store quiz data

//need variable to store question count and score count
//need variable that stores submitted answer

//The starting screen 
//should have a button that users can click to start the quiz.

//button event listeners
function startButtonPress() {
    //event listener for start button
}

function restartButtonPress() {

}

function submitQuestion() {
    //happens when user hits Submit on question
    //user must select an answer before triggering next events
    //needs to trigger...
        //event that adds classes to the birdtype in the label
        //based on what the array says the answer is
        //stores variable that contains user answer
        showResults();
}

//initializing quiz
function startQuiz() {
    //restarts the quiz at question 1
    //changes second class of 'bookend-screen' to 'quiz-container'
    resetCountAndScore();
    createImageContainer();
    createQuizContainer();
    createQuestionResults();
    createQuizForm();
    nextQuestion();
    nextImage();
}

function resetCountAndScore() {
    //resets quesiton count variable
    //resets score count variable
}

function createImageContainer(){
    //creates div class 'img-container' inside main-container
}

function createQuizContainer() {
    //creates div class quiz-container
}

function createQuestionResults() {
    //creates div class question-results
}

function createQuizForm() {
    //adds html text to quiz form to show quiz
}

//----action functions----------------

function clearQuizForm() {
    //clears out form content so that there isn't multiple
    //question data
}

function nextQuestion() {
    clearQuizForm();
    //pulls array data to next question
    //adds html code to quiz form to create answer data
}

function clearImageContainer() {
    //clears out Image Container text
}

function nextImage() {
    clearImageContainer();
    //pulls image from array and puts it in image container
}


//------after answer is submitted-------------

function showResults() {
    toggleLabelClasses();
    toggleSubmittedAnswer();
}

function toggleLabelClasses() {
    //pulls array data that shows whether answers are correct
    //adds that info to birdType class - based on value
}

function toggleSubmittedAnswer() {
    //calls variable that stores the user's answer
    //adds class 'selected' to the label class

}