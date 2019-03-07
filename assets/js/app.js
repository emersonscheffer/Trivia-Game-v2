// creating questions database
var questions = [
    question1 = {
        q: "How many days in a leap year?",
        a1: 345,
        a2: 365,
        a3: 346,
        a4: 366,
        correct: 4,
        image: "year",
        correctAnswer: 366
    },
    question2 = {
        q: "Wonderwall is a song by the british band called",
        a1: "The Verve",
        a2: "Radiohead",
        a3: "Oasis",
        a4: "The Beatles",
        correct: 3,
        image: "oasis",
        correctAnswer: "Oasis"
    },
    question3 = {
        q: "Keanu Reeves did not played a role in",
        a1: "The Matrix",
        a2: "John Wick",
        a3: "Heat",
        a4: "Constantine",
        correctAnswer: "Heat",
        image: "keanu reeves",
        correct: 3
    },
    question4 = {
        q: "The city of Machu Picchu is located in ",
        a1: "Brazil",
        a2: "Peru",
        a3: "Argentina",
        a4: "Bolivia",
        image: "peru",
        correctAnswer: "Peru",
        correct: 2
    },
    question5 = {
        q: "Shaquille O'Neal made his sport's career playing ",
        a1: "Football",
        a2: "Basketball",
        a3: "Soccer",
        a4: "Golf",
        image: "shaquille o'neal",
        correctAnswer: "Basketball",
        correct: 2
    },
    question6 = {
        q: "The value of Pi everybody knows. What's the value of e",
        a1: "3.1415165454",
        a2: "2.61828182846",
        a3: "2.71828182846",
        a4: "3.71828182846",
        image: "mathematics",
        correctAnswer: "2.71828182846",
        correct: 3
    },
    question7 = {
        q: "What country is not part of the UK",
        a1: "Wales",
        a2: "Ireland",
        a3: "Scotland",
        a4: "England",
        image: "uk",
        correctAnswer: "Ireland",
        correct: 2
    },
    question8 = {
        q: "What is 325.75",
        a1: "65.15 * 5",
        a2: "64.03 * 6",
        a3: "32.57 * 100",
        a4: "none of the above",
        image: "mathematics",
        correctAnswer: "65.15 * 5",
        correct: 1
    },
];

var counter = 0;
var answer = 0;
var unanswered = 0;
var correctAnswer = 0;
var incorrectAnswers = 0;
var timerCD = 10;

//timer section
//var timerFunction;
var intervalTimer;

function timerFunction() {
    intervalTimer = setInterval(function () {
        if (timerCD < 0) {
            outTimeFunction();
            clearInterval(intervalTimer);
        } else {
            $('.timerCountDown').text(timerCD);
            timerCD--;
        }

    }, 1000);
}



// start screen
$('#correctAnswerArticle').css('display', 'none');
$('#questionArticle').css('display', 'none');
$('#scoreBoard').css('display', 'none');
$('#start').css('display', 'block');

// start the game and hide screens
$('.btnStart').on('click', function () {
    $('#correctAnswerArticle').css('display', 'none');
    $('#questionArticle').css('display', 'block');
    $('#scoreBoard').css('display', 'none');
    $('#start').css('display', 'none');

    //restart the counters
    timerCD = 10;
    counter = 0;
    answer = 0;
    correctAnswer = 0;
    incorrectAnswers = 0;
    unanswered = 0;

    timerFunction();

    $('#question').text(questions[counter].q);
    $('#a1').text(questions[counter].a1);
    $('#a2').text(questions[counter].a2);
    $('#a3').text(questions[counter].a3);
    $('#a4').text(questions[counter].a4);

})


var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";


//validating answers
// timer number 2
var timerShowingScreen;

function outTimeFunction() {

    counter++;
    unanswered++;

    if (counter < questions.length) {

        $('#correctAnswerArticle').css('display', 'block');
        $('#questionArticle').css('display', 'none');
        $('#scoreBoard').css('display', 'none');
        $('#start').css('display', 'none');

        $('.answerResult').text("Out of Time!");
        $('.correting').text("The correct answer was: " + questions[counter - 1].correctAnswer);


        queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + questions[counter - 1].image;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var imageUrl = response.data.image_original_url;

            var imageHolder = $("<img>");

            imageHolder.attr("src", imageUrl);
            imageHolder.attr("alt", "cat image");
            imageHolder.css('width', '300px');

            $("#images").html(imageHolder);

        });

        timerCD = 10;

        timerShowingScreen = setInterval(function () {

                changeQuestion();
                timerFunction();

                $('#correctAnswerArticle').css('display', 'none');
                $('#questionArticle').css('display', 'block');
                $('#scoreBoard').css('display', 'none');
                $('#start').css('display', 'none');

                clearInterval(timerShowingScreen);
            },
            5000);

    } else {
        scoreBoard();
    }
}

function correctAnswerFunction() {

    counter++;

    if (counter < questions.length) {

        $('#correctAnswerArticle').css('display', 'block');
        $('#questionArticle').css('display', 'none');
        $('#scoreBoard').css('display', 'none');
        $('#start').css('display', 'none');

        $('.answerResult').text("Correct !");
        $('.correting').text(" ");

        queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + questions[counter - 1].image;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var imageUrl = response.data.image_original_url;

            var imageHolder = $("<img>");

            imageHolder.attr("src", imageUrl);
            imageHolder.attr("alt", "cat image");
            imageHolder.css('width', '300px');

            $("#images").html(imageHolder);

        });

        timerShowingScreen = setInterval(function () {

                timerCD = 10;

                changeQuestion();
                timerFunction();

                $('#correctAnswerArticle').css('display', 'none');
                $('#questionArticle').css('display', 'block');
                $('#scoreBoard').css('display', 'none');
                $('#start').css('display', 'none');

                clearInterval(timerShowingScreen);
            },
            5000);
    } else {
        scoreBoard();
    }
}

function incorrectAnswerFunction() {

    counter++;

    if (counter < questions.length) {

        $('#correctAnswerArticle').css('display', 'block');
        $('#questionArticle').css('display', 'none');
        $('#scoreBoard').css('display', 'none');
        $('#start').css('display', 'none');

        $('.answerResult').text("Nope!");
        $('.correting').text("The correct answer is: " + questions[counter - 1].correctAnswer);


        queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + questions[counter - 1].image;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var imageUrl = response.data.image_original_url;

            var imageHolder = $("<img>");

            imageHolder.attr("src", imageUrl);
            imageHolder.attr("alt", "cat image");
            imageHolder.css('width', '300px');

            $("#images").html(imageHolder);

        });


        timerShowingScreen = setInterval(function () {
                timerCD = 10;

                changeQuestion();
                timerFunction();

                $('#correctAnswerArticle').css('display', 'none');
                $('#questionArticle').css('display', 'block');
                $('#scoreBoard').css('display', 'none');
                $('#start').css('display', 'none');

                clearInterval(timerShowingScreen);
            },
            5000);

    } else {
        scoreBoard();
    }
}

function checkAnswer() {
    clearInterval(intervalTimer);

    if (answer === questions[counter].correct) {
        correctAnswer++;
        correctAnswerFunction();
    } else {
        incorrectAnswers++;
        incorrectAnswerFunction();
    }
    // timerCD = 10;
    // changeQuestion();
}

//Update questions in the DOM
function changeQuestion() {

    if (counter < questions.length) {
        $('#question').text(questions[counter].q);
        $('#a1').text(questions[counter].a1);
        $('#a2').text(questions[counter].a2);
        $('#a3').text(questions[counter].a3);
        $('#a4').text(questions[counter].a4);
    } else {
        scoreBoard();
    }
}


function scoreBoard() {
    console.log("you called the scoreboard ");

    $(".correctAnswers").text("Correct Answers: " + correctAnswer);
    $(".incorrectAnswers").text("Incorrect Answers: " + incorrectAnswers);
    $(".unanswered").text("Unanswered Questions: " + unanswered);


    $('#correctAnswerArticle').css('display', 'none');
    $('#questionArticle').css('display', 'none');
    $('#scoreBoard').css('display', 'block');
    $('#start').css('display', 'none');

}


//buttons pressed
$('#btnA1').on('click', function () {
    answer = 1;
    checkAnswer();
});
$('#btnA2').on('click', function () {
    answer = 2;
    checkAnswer();
});
$('#btnA3').on('click', function () {
    answer = 3;
    checkAnswer();
});
$('#btnA4').on('click', function () {
    answer = 4;
    checkAnswer();
});

var bgCounter = 1;

setInterval(function(){

    if(bgCounter < 5){
        $('body').css('backgroundImage', 'url(./assets/imgs/bg' + bgCounter + '.jpg)');
        
    } else {
        bgCounter = 1;
    }
    bgCounter++;

}, 1000);