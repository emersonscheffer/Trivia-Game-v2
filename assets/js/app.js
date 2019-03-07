// creating questions database
var questions = [
    question1 = {
        q: "How many days in a leap year?",
        a1: 345,
        a2: 365,
        a3: 346,
        a4: 366,
        correct: 4
    },
    question2 = {
        q: "Wonderwall is a song by the british band called",
        a1: "The Verve",
        a2: "Radiohead",
        a3: "Oasis",
        a4: "The Beatles",
        correct: 3
    },
    question3 = {
        q: "Keanu Reeves did not played a role in",
        a1: "The Matrix",
        a2: "John Wick",
        a3: "Heat",
        a4: "Constantine",
        correct: 3
    },
    question4 = {
        q: "The city of Machu Picchu is located in ",
        a1: "Brazil",
        a2: "Peru",
        a3: "Argentina",
        a4: "Bolivia",
        correct: 2
    },
    question5 = {
        q: "Shaquille O'Neal made his sport's career playing ",
        a1: "Football",
        a2: "Basketball",
        a3: "Soccer",
        a4: "Golf",
        correct: 2
    },
    question6 = {
        q: "The value of Pi everybody knows. What's the value of e",
        a1: "3.1415165454",
        a2: "2.61828182846",
        a3: "2.71828182846",
        a4: "3.71828182846",
        correct: 3
    },
    question7 = {
        q: "What country is not part of the UK",
        a1: "Wales",
        a2: "Ireland",
        a3: "Scotland",
        a4: "England",
        correct: 2
    },
    question8 = {
        q: "What is 325.75",
        a1: "65.15 * 5",
        a2: "64.03 * 6",
        a3: "32.57 * 100",
        a4: "none of the above",
        correct: 1
    },
];

var counter = 0;
var answer = 0;
var correctAnswer = 0;
var incorrectAnswers = 0;
// hide questions
$('#questionArticle').css('display', 'none');
$('#scoreBoard').css('display', 'none');
// start the game and hide screens
$('.btnStart').on('click', function () {
    $('#start').css('display', 'none');
    $('#scoreBoard').css('display', 'none');
    $('#questionArticle').css('display', 'block');

    //restart the counters
    counter = 0;
    answer = 0;
    correctAnswer = 0;
    incorrectAnswers = 0;


    $('#question').text(questions[counter].q);
    $('#a1').text(questions[counter].a1);
    $('#a2').text(questions[counter].a2);
    $('#a3').text(questions[counter].a3);
    $('#a4').text(questions[counter].a4);

})


function checkAnswer() {

    if (answer === questions[counter].correct) {

        correctAnswer++;

        console.log(correctAnswer + " correct");
    } else {

        incorrectAnswers++;

        console.log(incorrectAnswers + "wrong");
    }

    counter++;

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



    $('#questionArticle').css('display', 'none');
    $('#scoreBoard').css('display', 'block');
}

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