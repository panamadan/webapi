
var btn = document.getElementById("start-button")
btn.onclick = function startGame() {
    $( "#startCard" ).hide()
    $("#allQuestions").removeClass("invisible");
    var choicesArea = $("#choices");
 
    var currentQuestion = questions[0]
    $("#questions").text(currentQuestion.title);
 for (let i = 0; i < currentQuestion.choices.length; i++) {
     var choiceBtn = $("<button>");
     choiceBtn.text(currentQuestion.choices[i]);
     choicesArea.append(choiceBtn);
     
 }

}
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
    
    // add more
  ];