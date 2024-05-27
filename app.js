const minValue = 0
const maxValue = 100
const minIndex = 0
const maxIndex = 7

let attempt = 3
let randomNumber
randomNumber = getRandomNumber(minValue, maxValue)

const failureMessages = [
	'Your guessing skills are like a blindfolded toddler playing darts',
	'Your guesses are like a broken clock.',
	"At this rate, you'll uncover the meaning of life before you guess the number.",
	"You're making progress! Only a few trillion more guesses to go.",
	"Your guessing strategy is so avant-garde, it's practically performance art.",
	"You're dancing around the number like a cat trying to catch a laser pointer.",
	"If guessing were an Olympic sport, you'd win gold in the 'Random Guessing Marathon.'",
	'Your guesses are so off-base',
]
const congratulatoryMessages = [
	"Congratulations! You've cracked the code and hit the jackpot!",
	"Well done! You've successfully deciphered the mystery number.",
	"Bravo! You've unlocked the secret number and emerged victorious!",
	"Hooray! You've reached the pinnacle of guessing prowess and conquered the game!",
	"Marvelous! You've demonstrated unparalleled skill and guessed the number spot on!",
	"Magnificent! You've solved the puzzle and emerged as the victor!",
	"Hip, hip, hooray! You've hit the mark and achieved numerical excellence!",
	"You're a true guessing virtuoso! Congratulations on guessing the number correctly!",
]

let gameOverMessage
let alertMessage
let promptMessage = `Welcome to the Number Guessing Game! 
The system has generated a random number. 
Can you guess what it is? Enter your guess below:`

let guessedNumber
let guess = prompt(promptMessage)

while (guess !== null) {
	if (attempt >= 1) {
		guessedNumber = sanitizeGuess(guess)

		if (guessedNumber === null) {
			break
		}

		if (guessedNumber === randomNumber) {
			gameOverMessage = congratulatoryMessages[getRandomMessageIndex(minIndex, maxIndex)]
			alert(gameOverMessage)
			break
		} else if (guessedNumber > randomNumber) {
			alertMessage = 'Your guess is higher'
			showAlertMessage(alertMessage, guessedNumber)
		} else {
			alertMessage = 'Your guess is lower'
			showAlertMessage(alertMessage, guessedNumber)
		}
	} else {
		gameOverMessage = failureMessages[getRandomMessageIndex(minIndex, maxIndex)]
		alert(`Gameover. ${gameOverMessage}. The number is ${randomNumber}`)
		break
	}
}

function showAlertMessage(alertMessage, guessedNumber) {
	--attempt

	if (attempt !== 0) {
		guess = prompt(
			`${alertMessage} and you have ${attempt} attempts left.\nTry again`,
			guessedNumber
		)
	}
}

function sanitizeGuess(guess) {
	let guessedNumber = parseInt(guess)

	while (isNaN(guessedNumber)) {
		promptMessage = 'You entered an invalid number. Please enter a valid number'
		guess = prompt(promptMessage, guess)

		if (guess === null) {
			return guess
		}

		guessedNumber = parseInt(guess)
	}

	return guessedNumber
}

function getRandomNumber(minValue, maxValue) {
	return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
}

function getRandomMessageIndex(minIndex, maxIndex) {
	return Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex
}
