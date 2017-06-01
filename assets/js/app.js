//Document ready function
//$(document).ready(function() {

//Global Variables
//========================================================

var questionsCorrect = 0;
var questionsWrong = 0;
var questionsUnanswered = 0;
//var audio = new Audio("LINK AN AUDIO FILE HERE");

//Function
//========================================================

//Hides score section 
  $("#scoreSection").hide();

//Hides question section
$("#questionSection").hide();


//Shows question section and timer when start button is clicked
$("#startButton").click(function(){
    $("#questionSection").show();
});


//Timer counts down 90 seconds
    //  Sets timer to 90 seconds.
    var timer = 90;

    //  Variable that will hold interval ID when we execute the "run" function
    var intervalId;


    //  The run function sets an interval that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }
    run();

    //  The decrement function.
    function decrement() {

      //  Decreases timer by one second.
      timer--;

      //  Shows the time in the #timer tag.
      $("#timer").html("Time remaining: " + timer);

      //  Once number hits zero...
      if (timer === 0) {

        //  The timer stops with the stop function.
        stop();     

          //Shows score and hides question section when time is up
          alert("Time's up!")
          $("#scoreSection").show();
          $("#questionSection").hide(); 
          $("#correctAnswers").html("Correct Answers: " + questionsCorrect);
          $("#incorrectAnswers").html("Incorrect Answers: " + questionsWrong);
          $("#unanswered").html("Unanswered: " + questionsUnanswered);
  
      }
    }

    //  The stop function
    function stop() {
      //  Clears our intervalId
      clearInterval(intervalId);
    }
//When submit button is pressed, questions disappear and score appears
$("#submitButton").click(function(){
	
	$("#scoreSection").show();
    $("#questionSection").hide();


//checks answers for question1 and updates score
if ($('[id="ans1"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans2"]').is(':checked')) {
questionsCorrect ++

};
if ($('[id="ans3"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans4"]').is(':checked')) {
questionsWrong ++
};


//checks answers for question2 and updates score
if ($('[id="ans5"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans6"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans7"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans8"]').is(':checked')) {
questionsCorrect ++
};

//checks answers for question3 and updates score
if ($('[id="ans9"]').is(':checked')) {
questionsCorrect ++
};
if ($('[id="ans10"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans11"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans12"]').is(':checked')) {
questionsWrong ++
};

//checks answers for question4 and updates score
if ($('[id="ans13"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans14"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans15"]').is(':checked')) {
questionsCorrect ++
};
if ($('[id="ans16"]').is(':checked')) {
questionsWrong ++
};


//checks answers for question5 and updates score
if ($('[id="ans17"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans18"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans19"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans20"]').is(':checked')) {
questionsCorrect ++
};

//checks answers for question6 and updates score
if ($('[id="ans21"]').is(':checked')) {
questionsCorrect ++
};
if ($('[id="ans22"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans23"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans24"]').is(':checked')) {
questionsWrong ++
};

//checks answers for question7 and updates score
if ($('[id="ans25"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans26"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans27"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans28"]').is(':checked')) {
questionsCorrect ++
};


//checks answers for question8 and updates score
if ($('[id="ans29"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans30"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans31"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans32"]').is(':checked')) {
questionsCorrect ++
};

//checks answers for question9 and updates score
if ($('[id="ans33"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans34"]').is(':checked')) {
questionsCorrect ++
};
if ($('[id="ans35"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans36"]').is(':checked')) {
questionsWrong ++
};

//checks answers for question10 and updates score
if ($('[id="ans37"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans38"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans39"]').is(':checked')) {
questionsWrong ++
};
if ($('[id="ans40"]').is(':checked')) {
questionsCorrect ++
};

$("#correctAnswers").html("Correct Answers: " + questionsCorrect);
$("#incorrectAnswers").html("Incorrect Answers: " + questionsWrong);
$("#unanswered").html("Unanswered: " + questionsUnanswered);

});



//Process
//========================================================














