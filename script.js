"use strict";

window.onload = function() {
    createCard('2');
    createCard('3');
    createCard('4');
    createCard('5');
    createCard('6');
    createCard('7');
    createCard('8');
    createCard('9');
    createCard('10');
    createCard('B');
    createCard('Q');
    createCard('K');
    createCard('ACE');
};

function createCard(name) {
  const cardContainer = document.getElementById('card-container');
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<b>${name}</b>`;
  cardContainer.appendChild(card);
  card.onclick = function() {
    console.log('click', name);
  };
}