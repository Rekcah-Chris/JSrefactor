'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number');
document.querySelector('.score');

document.querySelector('.quess').value;
*/

//event listener
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
   document.querySelector('.message').textContent = message;
}

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
   const guess = Number(document.querySelector('.guess').value);
//  when player wins
   if (!guess) {
     // document.querySelector('.message').textContent = 'No Number';
   // when player wins
   displayMessage('No Number');
   
   } else if (guess === secretNumber) {
      //document.querySelector('.message').textContent = 'Correct Number';
   displayMessage('Correct Number');

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if(score > highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }
      // when guess is wrong
        
   } else if (guess !== secretNumber) {
      if (score > 1) {
         //document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too Low'; 
         //score--;
         displayMessage(guess > secretNumber ? 'Too high' : 'Too Low'); score--;

         document.querySelector('.score').textContent = score;
      } else {
         //document.querySelector('.message').textContent = 'You Lost The Game Try Again';
         displayMessage('You lost the game try again');
         document.querySelector('.score').textContent = 0;
      }

       //when guess is too high
   // } else if (guess > secretNumber) {
   //    if (score > 1) {
   //       document.querySelector('.message').textContent = 'Too high'; 
   //       score--;
   //       document.querySelector('.score').textContent = score;
   //    } else {
   //       document.querySelector('.message').textContent = 'You Lost The Game Try Again';
   //       document.querySelector('.score').textContent = 0;
   //    }

   //    //when guess is too low

   // } else if (guess < secretNumber) {

   //    if (score > 1) {
   //       document.querySelector('.message').textContent = 'Too Low'; 
   //       score--;
   //       document.querySelector('.score').textContent = score;
   //    } else {
   //       document.querySelector('.message').textContent = 'You Lost The Game Try Again';
   //       document.querySelector('.score').textContent = 0;
   //    }
   // }
   }
});

document.querySelector('.again').addEventListener('click', function () {
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
 
   // document.querySelector('.message').textContent = 'Start guessing...';
   displayMessage('Start guessing...');
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
 
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
 });
 

 