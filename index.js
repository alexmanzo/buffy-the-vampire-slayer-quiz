'use strict';
 
// Array containing quiz information (questions, answers, img sources)
const questionList = [
{
	question: ['What year do Buffy and the Scoobies graduate high school?'],
	answers: ['1997', '1998', '1999', '2000'],
	correctAnswer: '1999',
	img: `https://i.pinimg.com/originals/d2/7d/26/d27d26af4d5fa6dfee07a3a4723c704d.jpg`,
	alt: `maroon poster with sun image in upper right corner that reads sunnydale high '99, the future is ours!"`
},

{
	question: ["Which of these vampires has NOT drank Buffy's blood?"],
	answers: ['The Master', 'Dracula', 'Angel', 'Spike'],
	correctAnswer: 'Spike',
	img: 'http://digitalspyuk.cdnds.net/14/27/768x774/gallery_ustv-buffy-the-vampire-slayer-spike.jpg',
	alt: "Man with peroxide-bleached blonde hair facing camera wearing black leather jacket and black tshirt with arms crossed"
},

{
	question: ["What is Faith's last name?"],
	answers: ['Wilkins', 'Lehane', 'Murphy', 'Jones'],
	correctAnswer: 'Lehane',
	img: 'https://img.cinemablend.com/filter:scale/cb/a/c/9/a/e/4/ac9ae49f5acaf537580aaed346cce26f97d8559ec64b9f494eef2b76f8a75dd6.jpg?mw=600',
	alt: "dark-haird woman wearing peach tank top and dark lipstick getting ready to stake something unseen with a wooden stake"
},

{
	question: ["In which episode was Oz first introduced?"],
	answers: ['Inca Mummy Girl', 'Halloween', 'School Hard', 'The Pack'],
	correctAnswer: 'Inca Mummy Girl',
	img: 'https://vignette.wikia.nocookie.net/buffy/images/8/81/Oz_season4.png/revision/latest?cb=20120504105729',
	alt: "guy with reddish-brown hair wearing red shirt looking slightly to left"
},

{
	question: ["What is the acronym for Joyce's anti-monster group?"],
	answers: ['MAVM', 'MAO', 'SAML', 'MOO'],
	correctAnswer: 'MOO',
	img: 'http://4.bp.blogspot.com/_bUlG_hqzEP0/S-a5LcsWQcI/AAAAAAAAIoQ/in-OX3vuc6c/s1600/joyce.jpeg',
	alt: "middle-aged woman with currly light-colored hair looking at blonde girl facing away from camera"
},

{
	question: ["What vampire hosts Slayerfest '98?"],
	answers: ['Spike', 'Mr. Trick', 'Darla', 'The Master'],
	correctAnswer: 'Mr. Trick',
	img: 'https://res.cloudinary.com/teepublic/image/private/s--3LlWLRNG--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1446243104/production/designs/291253_2.jpg',
	alt: "Text logo that says slayerfest '98 in 3D grungy font"
},

{
	question: ["What is the name of the magic store owned by Giles and later Anya?"],
	answers: ['The Magic Box', 'Everday Magic', 'The Magick Shop', 'Magic, Mayhem, and More'],
	correctAnswer: 'The Magic Box',
	img: 'https://vignette.wikia.nocookie.net/buffy/images/2/22/Magic_Box.jpg/revision/latest?cb=20070329213900',
	alt: "building with purple awning that says the magic box"
},

{
	question: ["How does Buffy kill the vampire Kralik in Helpless?"],
	answers: ['Stake', 'Sword', 'Fire', 'Holy Water'],
	correctAnswer: 'Holy Water',
	img: 'https://vignette.wikia.nocookie.net/buffy/images/e/eb/Vlcsnap-9072435-1.png/revision/latest?cb=20100206013408',
	alt: "blonde girl in overalls with a cut on her forehead looking serious and holding a bottle of holy water"
},

{
	question: ["What episode follows Once More, With Feeling?"],
	answers: ['Tabula Rasa', 'Smashed', 'Life Serial', 'Doublemeat Palace'],
	correctAnswer: 'Tabula Rasa',
	img: 'https://vignette.wikia.nocookie.net/buffy/images/8/8d/Buffy62.jpg/revision/latest?cb=20150124043853',
	alt: "group of people looking at something scary and screaming"
},

{
	question: ["Which actor plays Jonathan?"],
	answers: ['Tom Lenk', 'Adam Busch', 'Alexis Denisof', 'Danny Strong'],
	correctAnswer: 'Danny Strong',
	img: 'https://vignette.wikia.nocookie.net/buffy/images/2/20/417_Superstar1.jpg/revision/latest?cb=20090117002057',
	alt: "white man in black turtlneck sitting behind desk"
}];

// Variables to keep track of location within quiz, and user score
let questionNum = 0;
let correctAnswers = 0;


// This function will pull a question from the array based on what questionNum is. If user has reached end of array, it will generate their final result.
function questionTemplate() {
	if (questionNum < questionList.length) {
		return `<div class="question-tracker score">
			<ul>
				<li>Question: <span class="questionNum">${questionNum}</span>/10</li>
				<li>Score: <span class="score">${correctAnswers}</span></li>
			</ul>
		</div>
		<h3>${questionList[questionNum].question}</h3>
		<form>
				<label for="answer-1" class="">
					<input type="radio" name="answer" id="answer-1" required>${questionList[questionNum].answers[0]}
				</label>
				<br>
				<label for="answer-2" class="">
					<input type="radio" name="answer" id="answer-2" required>${questionList[questionNum].answers[1]}
				</label>
				<br>
				<label for="answer-3" class="">
					<input type="radio" name="answer" id="answer-3" required>${questionList[questionNum].answers[2]}
				</label>
				<br>
				<label for="answer-4" class="">
					<input type="radio" name="answer" id="answer-4" required>${questionList[questionNum].answers[3]}
				</label>
				<br>
				<button class="question-submit">Submit</button>
		</form>
	</div>`
	}
	else {
		renderFinalResult();
	}
	console.log('question template ran');
}

// Changes class of selected radio button during quiz. 
function addCheckedLabelColor() {
	$('input').change(function(){
		$('input').parent().removeClass('checked');
		$('input:checked').parent().addClass('checked');
	})
	console.log('addclass ran');
}

// This function will render the question onto the page.
function renderQuestion() {
	$('.quiz-container').html(questionTemplate());
	addCheckedLabelColor();
	console.log('render question ran');
}

// This function starts the quiz.
function beginQuiz() {
	$('.quiz-container').on('click', '.start-button', function(event){
		questionTemplate();
		renderQuestion();
		increaseQuestionNum();
		console.log('begin quiz ran');
	})
}

// This function evaluates the user's answer to determine if it is correct, then runs the appropriate feedback page. 
function handleQuestionSubmit() {
	$('.quiz-container').on('click', '.question-submit', function(event){
		event.preventDefault();
		let userAnswer = $('input:checked').parent().text().trim();
		let correctAnswer = `${questionList[questionNum - 1].correctAnswer}`;
		if (userAnswer === correctAnswer){
			correctFeedbackTemplate();
			increaseScore();
		} else {
			incorrectFeedbackTemplate();
		}
	})
}

// This function generates a feedback page for incorrect answers. 
function incorrectFeedbackTemplate() {
	$('.quiz-container').html(`<div class="question-tracker score">
			<ul>
				<li>Question: <span class="questionNum">${questionNum}</span>/10</li>
				<li>Score: <span class="score">${correctAnswers}</span></li>
			</ul>
		</div>
		<h3>Sorry, that was not the correct answer!</h3>
		<p>The correct answer was: ${questionList[questionNum - 1].correctAnswer}</p>
		<img src="${questionList[questionNum - 1].img}" alt="${questionList[questionNum - 1].alt}" class="feedback-img">
		<br>
		<button type="button" class="next-question-button">Next Question</button>`);
	console.log('incorrectFeedbackTemplate ran')
}

// This function generates a feedback page for correct answers. 
function correctFeedbackTemplate() {
	// This function generates feecback based on if the user correctly answered the question
	$('.quiz-container').html(`<div class="question-tracker score">
			<ul>
				<li>Question: <span class="questionNum">${questionNum}</span>/10</li>
				<li>Score: <span class="score">${correctAnswers}</span></li>
			</ul>
		</div>
		<h3>Correct!</h3>
		<img src="${questionList[questionNum - 1].img}" alt="${questionList[questionNum - 1].alt}" class="feedback-img">
		<br>
		<button type="button" class="next-question-button">Next Question</button>`);
	console.log('correctFeedbackTemplate ran');
}

// This function renders the next question to the page and progresses the question count. 
function handleNextQuestion() {
	$('.quiz-container').on('click', '.next-question-button', function(){
		questionTemplate();
		renderQuestion();
		if (questionNum < 10){
		increaseQuestionNum();
		} 
	})
}

// Increases the question number
function increaseQuestionNum() {
		questionNum++;
		$('span.questionNum').html(questionNum);
}

//Increases score if user got a correct answer
function increaseScore() {
	correctAnswers++;
	$('span.score').html(correctAnswers);
}

//Templates for final results
function topFinalResultTemplate() {
	$('.quiz-container').html(`<h3>WOW! You did great! You got ${correctAnswers}/10 questions correct!</h3>
	<img src="https://data.whicdn.com/images/30440829/original.gif" alt="red-haired girl giving a thumbs up" class="results-img">
	<br>
	<button class="quiz-restart">Try again?</button>`);
}

function middleFinalResultTemplate() {
	$('.quiz-container').html(`<h3>You know a lot about Buffy, but you're not an expert yet! You got ${correctAnswers}/10 questions correct.</h3>
	<img src="https://data.whicdn.com/images/30440829/original.gif" alt="red-haired girl giving a thumbs up" class="results-img">
	<br>
	<button class="quiz-restart">Try again?</button>`);	
}

function bottomFinalResultTemplate() {
	$('.quiz-container').html(`<h3>Yikes! Are you sure you've watched the show? You only got ${correctAnswers}/10 questions correct.</h3>
	<img src="https://data.whicdn.com/images/30440829/original.gif" alt="red-haired girl giving a thumbs up" class="results-img">
	<br>
	<button class="quiz-restart">Try again?</button>`);
}

function noQuestionsFinalResultTemplate() {
	$('.quiz-container').html(`<h3>Yikes! Are you sure you've watched the show? You didn't get any questions correct.</h3>
	<img src="https://data.whicdn.com/images/30440829/original.gif" alt="red-haired girl giving a thumbs up" class="results-img">
	<br>
	<button class="quiz-restart">Try again?</button>`);
}

//Renders final result to the page
function renderFinalResult() {
	if (correctAnswers >= 8){
		topFinalResultTemplate();
	} else if (correctAnswers < 8 && correctAnswers >=5) {
		middleFinalResultTemplate();
	} else if (correctAnswers > 0 && correctAnswers <5) {
		bottomFinalResultTemplate();
	} else {
		noQuestionsFinalResultTemplate();
	}
}

// This function refreshes the page and starts the quiz over. 
function quizReset() {
	$('.quiz-container').on('click', '.quiz-restart', function() {
		location.reload();
	})
}

// run all functions
function fullQuizLoad() {
	beginQuiz();
	handleQuestionSubmit();
	handleNextQuestion();
	quizReset();
}

fullQuizLoad();
