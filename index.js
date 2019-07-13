`use strict`;

//need starting array to store quiz data

//need variable to store question count and score count
//need variable that stores submitted answer

//The starting screen 
//should have a button that users can click to start the quiz.

//-----button event listeners----------------
function startButtonPress() {
    //event listener for start button
}

function restartButtonPress() {
    //listen for when restart button press
    startQuiz();
}

function buttonSubmitQuestion() {
    //happens when user hits Submit on question
    //user must select an answer before triggering next events
    //needs to trigger...
        //event that adds classes to the birdtype in the label
        //based on what the array says the answer is
        //stores variable that contains user answer
        showResults();
}

function buttonContinueQuiz() {
    //listens for when user presses continue button
    continueQuiz();
    //need to assess whether it is the last question of the quiz
}

//-----initializing quiz-----------------------

function clearMainContainer() {
    //clears all contents within main container with the
    //exception of the button

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

function clearVariables(){
    //resets question count and score variables
}

function startQuiz() {
    //restarts the quiz at question 1
    //changes second class of 'bookend-screen' to 'quiz-container'
    resetCountAndScore();
    createImageContainer();
    createQuizContainer();
    createQuestionResults();
    createQuizForm();
    clearVariables();
    nextQuestion();
    nextImage();
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
    //puts question count variable count+1
}

function clearImageContainer() {
    //clears out Image Container text
}

function nextImage() {
    clearImageContainer();
    //pulls image from array and puts it in image container
}

function clearQuestionResults(){
    //clears out text between <p> to just a space
}

function continueQuiz() {
    nextQuestion();
    nextImage();
    clearQuestionResults();
}

//------after answer is submitted-------------

function showResults() {
    toggleLabelClasses();
    toggleSubmittedAnswer();
    assessAnswer();
    submitButtonToContinue();
}

function toggleLabelClasses() {
    //pulls array data that shows whether answers are correct
    //adds that info to birdType class - based on value
}

function toggleSubmittedAnswer() {
    //calls variable that stores the user's answer
    //adds class 'selected' to the label class
}

function assessAnswer() {
    //compares whether use's submitted value is correct
    //if statement - if the user's answer is the same as the
    //value that has the value correct
        //add text to the question-results as "Your answer is correct"
    //else
        //add text to the question-results as "Your answer is incorrect!  T
        //...The correct answer is __"
}

function submitButtonToContinue(){
    //changes the label of the function-button to Continue
    //instead of Submit Answer label changes to Continue
}

//-----End of Quiz---------

function toggleMainContainerToBookend() {
    //change main-container class from quiz-container to bookend-container
}

function addEndText() {
    //add code to main-container bookend-screen
    //<h1>How well do you know your birds?</h1>
    //<h2>You identified VARIABLE out of 10 birds correctly!</h2>
}

function endOfQuiz() {
    clearMainContainerToBookend();
    addEndText();
}