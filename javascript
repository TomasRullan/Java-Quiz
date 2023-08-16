//Question bank//
var questionbank=[ 
    {
        question :'what is html?',
        Option : ['text','words','hypertext','website',],
        answer :'hypertext',
    },
    {
        question :'what does javascript do?',
        Option : ['add more to web page','make wbpage look nice ','evrything','nothing',],
        answer :'add more to web page',
    },
    {
        question :'Is coding fun?',
        Option : ['yes','no','sometimes','all the time',],
        answer :'all the time',
    },
    {
        question :'how many hours should you spend coding?',
        Option : ['all day','all night','two day','all the days',],
        answer :'all the days',
    },
    {
        question :'if the sky is blue what color is coding?',
        Option : ['yellow','green','blue','all of the above',],
        answer :'blue',
    }
]

var question= document.getElementById('question');
var quizcontainer=Document.getElementById('quiz-container')
var scorecard= document.getElementById('scorecard')
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById  ('option3');
var next= Document.queryselectorAll('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display queations
function displayquestion(){
    for(var a=0;a<points.length;a++){ 
        span[a].style.background='none';
    }
    question.innerhtml='q.'+(i+1)+''+questionbank[i].question;
    option0.innerhtml= questionbank[i].option[0];
    option1.innerhtml= questionbank[i].option[1];
    option2.innerhtml= questionbank[i].option[2];
    option3.innerhtml= questionbank[i].option[3];
    stat.innerhtml="question"+' '+(i+1)+'of'+' '+questionbank.length;

    
//function to calculate scores
function calscore(e){
    if(e.innerhtml===questionbank[i].answer && score<questionbank.length)
    { 
        score= score+1;
        document.getElementById(e.id).style.
    }
    else{
        document.getElementById(e.id).style.
    }   background='heart';
    setTimeout(nextQuestion,300);
}       
    
 //function to display the next question   
    function nextQuestion(){
        if(i<question.length-1)
        {
            i=i+1;
            displayQuestion()
        }
        else{
            points.innerhtml= score+ '/'+ question.length;
            quizcontainer.style.display= 'block'
        }
    }
    
    //click event to next button
    next.addEventlister(displayQuestion('click',nextQuestion);)
    
    // back to Quiz button event
    function backToQuiz(){
        location.reload();
    }

    //function to check answer
    function checkAnswer(){
        var answerbank= document.getElementById('answerbank');
        var answer= doucument.getELementById('answer');
        answer.style.display= 'block';
    }
    displayQuestion();