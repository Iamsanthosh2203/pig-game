'use strict';

const newBtn = document.querySelector('.btn--new');
const dice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const players = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];
const scores = [
  document.getElementById('current--0'),
  document.getElementById('current--1'),
];
const totalScores = [
  document.getElementById('score--0'),
  document.getElementById('score--1'),
];
const img = document.querySelector('img');
const rules = document.querySelector('.btn--rules');
const rulescontainer = document.querySelector('.hidden');
const exit = document.querySelector('.btn--exit');

let score = 0;
let activePlayer = 0;

const switchPlayer = () => {
  scores[activePlayer].textContent = 0;
  players[activePlayer].classList.remove('player--active');
  activePlayer = 1 - activePlayer;
  players[activePlayer].classList.add('player--active');
  score = 0;
};

dice.addEventListener('click', function () {
  const ranNum = Math.trunc(Math.random() * 6 + 1);
  score += ranNum;
  scores[activePlayer].textContent = score;
  img.src = `dice-${ranNum}.png`;

  if (ranNum === 1) {
    switchPlayer();
  }
});

hold.addEventListener('click', () => {
  totalScores[activePlayer].textContent =
    Number(totalScores[activePlayer].textContent) + score;
  if (totalScores[activePlayer].textContent > 100) {
    alert(`Player ${activePlayer + 1} Wins the Game !!!`);
    dice.disabled = true;
    hold.disabled = true;
  } else {
    switchPlayer();
  }
});

rules.addEventListener('click', () => {
  rulescontainer.classList.remove('hidden');
  rulescontainer.classList.add('overlay');
});

exit.addEventListener('click', () => {
  rulescontainer.classList.add('hidden');
  rulescontainer.classList.remove('overlay');
});

newBtn.addEventListener('click', () => {
  score = 0;
  totalScores[0].innerHTML = 0;
  totalScores[1].innerHTML = 0;
  switchPlayer();
  dice.disabled = false;
  hold.disabled = false;
});
