
var btn = document.getElementById("start-button")
btn.onclick = function startGame() {
    $("#startCard").hide()
    $("#allQuestions").removeClass("invisible");
    var choicesArea = $("#choices");

    // var count = 75;

    // var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    // function timer() {
    //     count = count - 1;
    //     if (count <= 0) {
    //         clearInterval(counter);
            
    //         return;
        }

        //Do code for showing the number of seconds here
    // }

    var currentQuestion = questions[0]
    $("#questions").text(currentQuestion.title);
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var choiceBtn = $("<button>");
        choiceBtn.text(currentQuestion.choices[i]);
        choicesArea.append(choiceBtn);

    }

// }
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        title: "Arrays in javascrpit can be used to store _____.",
        choices: ["number and string", "other arrays", "boolean", "all of the above"],
        answer: "all of the above"
    }
];
// localstorage to use to store answer
// $('#anwers').html("answer");
// localStorage.content = $('#answer').html();
// $('#answer').html(localStorage.content);
// localstore initals as well