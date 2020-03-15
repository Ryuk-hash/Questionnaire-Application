const quiz = document.getElementById('quiz');
const submit = document.getElementById('submit');
const next = document.querySelector('.next-button');
const quesEl = document.getElementById('question');
const result = document.querySelector('#result');

let currentQuestionNumber = 0;
let score = 0;
let totalQuestions=questions.length;

let opt1=document.getElementById('opt1');
let opt2=document.getElementById('opt2');
let opt3=document.getElementById('opt3');
let opt4=document.getElementById('opt4');

loadAllEventListeners();

function loadAllEventListeners() {

   submit.style.display="none";
   result.style.display='none';
   document.addEventListener('DOMContentLoaded', launchWebApp(currentQuestionNumber));
   next.addEventListener('click', nextQuestion);
   submit.addEventListener('click', displayResult);

};

function launchWebApp(index) {
   var q = questions[index];

   quesEl.textContent = (index+1) + '. ' + q.question;

   opt1.textContent = q.option1;
   opt2.textContent = q.option2;
   opt3.textContent = q.option3;
   opt4.textContent = q.option4;

};

function nextQuestion() {
   var selectedOption=document.querySelector('input[type=radio]:checked');
   if (!selectedOption) {
      alert("Please select an answer!");
      return;
   }

   var answer = questions[currentQuestionNumber][selectedOption.value];
   if(questions[currentQuestionNumber].answer == answer) {
      score+=1;
   }
   selectedOption.checked = false;
   currentQuestionNumber += 1;

   if (currentQuestionNumber == totalQuestions-1) {
      submit.style.display="block";
      next.style.display="none";
   } 
   if (currentQuestionNumber == totalQuestions) {
      displayResult();
      return;
   }
   launchWebApp(currentQuestionNumber);
}

function displayResult() {
   var selectedOption=document.querySelector('input[type=radio]:checked').value;

   if (!selectedOption) {
      alert("Please select an answer!");
      return;
   }

   var answer = questions[currentQuestionNumber][selectedOption];

   if(questions[currentQuestionNumber].answer == answer) {
      score+=1;
   }   
   submit.style.display='none';
   quiz.style.display = 'none';
   result.style.display = 'block';
   
   result.textContent = 'Your Score: ' + score;
}

