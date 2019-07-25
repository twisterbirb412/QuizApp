`use strict`;

//Can you name the bird?

QUIZDATA = [

    //Question1
    {
    image: `https://images.wildaboutbirds.com/backyard-birds/bluejay.jpg`,
    answer1: `Cardinal`,
    answer2: `Bluejay__correct`,
    answer3: `Kingfisher`,
    answer4: `White-breasted nuthatch`
    },
    //Question2
    {
    image: `https://live.staticflickr.com/2911/32250438734_05bb5959cd.jpg`,
    answer1: `White-Breasted Nuthatch__correct`,
    answer2: `Tufted Titmouse`,
    answer3: `Black capped chickadee`,
    answer4: `Mockingbird`
    },
    
    //Question3
    {
    image: `https://live.staticflickr.com/4706/38902175905_182fdf1560.jpg`,
    answer1: `Pine thrush`,
    answer2: `Black-capped chickadee`,
    answer3: `Carolina chickadee__correct`,
    answer4: `English Sparrow`
    },
    
    //Question4
    {
    image: `http://jaysbirdbarn.com/wp-content/uploads/2016/11/jamesmorrismourningdove.jpg`,
    answer1: `Mockingbird`,
    answer2: `Mourning dove__correct`,
    answer3: `Tufted titmouse`,
    answer4: `English sparrow`
    },
    
    //Question5
    {
    image: `http://dreamstop.com/wp-content/uploads/2016/08/Redwing-Blackbird.jpg`,
    answer1: `Cardinal`,
    answer2: `Starling`,
    answer3: `Red-winged blackbird__correct`,
    answer4: `Grackle`
    },
    
    //Question6
    {
    image: `https://www.audubon.org/sites/default/files/styles/grid_gallery_lightbox/public/Pileated_Woodpecker_m57-4-021_l_1.jpg?itok=KS3GHSUB`,
    answer1: `Downy woodpecker`,
    answer2: `Pileated woodpecker__correct`,
    answer3: `Red-bellied woodpecker`,
    answer4: `Ivory billed woodpecker`
    },
    
    //Question7
    {
    image: `https://www.allaboutbirds.org/guide/assets/photo/63667351-1900px.jpg?__hstc=46425656.2d3fcf2f99a265337744294b740e0787.1562198400035.1562198400036.1562198400037.1&__hssc=46425656.1.1562198400038&__hsfp=1817143912`,
    answer1: `Cardinal__correct`,
    answer2: `English sparrow`,
    answer3: `Mockingbird`,
    answer4: `Robin`
    },
    
    //Question8
    {
    image: `https://www.bl.uk/britishlibrary/~/media/bl/global/language%20of%20birds/mockingbird-thinkstockphotos-533904476.jpg`,
    answer1: `Bluejay`,
    answer2: `Starling`,
    answer3: `Mockingbird__correct`,
    answer4: `Killdeer`
    },
    
    //Question9
    {
    image: `https://www.audubon.org/sites/default/files/styles/grid_gallery_lightbox/public/Tufted_Titmouse_m17-67-821_l_1.jpg?itok=Nz-OBrmi`,
    answer1: `English sparrow`,
    answer2: `Starling`,
    answer3: `Tufted titmouse__correct`,
    answer4: `Black-capped chickadee`
    },
    
    //Question10
    {
    image: `http://4.bp.blogspot.com/-QZhybW74CwY/Tj59_Bhn6-I/AAAAAAAAAWI/LJxv-RjkZ5o/s1600/killdeer1.JPG`,
    answer1: `Sandpiper`,
    answer2: `Pine thrush`,
    answer3: `Killdeer__correct`,
    answer4: `English sparrow`
    }
    ]
    

//need starting array to store quiz data

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

function restartButtonPress() {
    //listen for when restart button press
    //startQuiz();
}

function buttonSubmitQuestion() {
    $(".main-container").on("click", "button.submit", function(event) {
        event.preventDefault();

        assessAnswer();
        toggleSubmitToContinue();
        

    });

    //happens when user hits Submit on question
    //user must select an answer before triggering next events
    //needs to trigger...
        //event that adds classes to the birdtype in the label
        //based on what the array says the answer is
        //stores variable that contains user answer
        //showResults();
}

function buttonContinueQuiz() {
    $(".main-container").on("click", "button.continue", function(event) {
        event.preventDefault();

        nextQuestion();
    
        //need to assess whether it is the last question of the quiz

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
; 
        addText = `
        <input type="radio" name="birdType" value="` + questionArray[i].valueText + 
        `"><label class="birdTypeLabel" id='` + [i] + `'>` + questionArray[i].plainText + 
        `</label><br>`;

        htmlText = (htmlText + addText);
    }

    $(htmlText).append(`</form>`);

    $(".quiz-content").append(htmlText); 
}

function clearVariables(){
    //resets question count and score variables
}

function createCountContainer() {
    let htmlText = `
    <div class="count-container question">
    </div>
    <div class="count-container score">
    </div>
    `
    $('.main-container').append(htmlText);
}

function populateQuestionCountContainer(count) {
    $('.question').empty();
    htmlText = 'Question ';
    $('.question').append(htmlText + count);
}

function populateScoreCountCountainer(score, count) {
    $('.score').empty();
    $('.score').append('You scored ' + score+ ' out of '+ count +' questions correctly!');
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
    `" alt="placeholder text">`;

    $('.img-container').append(htmlText);
}

function clearQuizResults(){
    $('.quiz-results').empty();
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

function continueQuiz() {
    nextQuestion();
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

function runQuizApp() {
    startButtonPress();
    restartButtonPress();
    buttonSubmitQuestion();
    buttonContinueQuiz();

    
}

$(runQuizApp);