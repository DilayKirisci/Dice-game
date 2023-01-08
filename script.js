const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const dice = document.querySelectorAll(".dice");
const btn = document.querySelector(".btn");
const player1ScoreSpan = document.querySelector("#player1ScoreSpan");
const player2ScoreSpan = document.querySelector("#player2ScoreSpan");
let player1Score = 0;
let player2Score = 0;
btn.addEventListener("click", function (e) {
	const randomNumber1 = Math.floor(Math.random() * 6) + 1;
	const randomNumber2 = Math.floor(Math.random() * 6) + 1;
	img1.src = `images/dice${randomNumber1}.png`;
	img2.src = `images/dice${randomNumber2}.png`;
	if (randomNumber1 > randomNumber2) {
		player1Score++;
		player1ScoreSpan.textContent = player1Score;
	} else {
		player2Score++;
		player2ScoreSpan.textContent = player2Score;
	}
});
