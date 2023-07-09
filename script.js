'use strict';

// ---------------------- SELECTION AND MANIPULATING ELEMENTS ------------------ //
// JavaScriptda biror bir elementni ushlash
// console.log(document.querySelector('.message'));

// JavaScriptda biror bir elementni ushlashdan tashqari uni ichidagi textni ham ushlashimiz mumkun.
// console.log(document.querySelector('.message').textContent);

//Ushlangan elementni htmlga bormay turib ham o'zgartirishimiz mumkun.
// document.querySelector('.message').textContent = 'Correnct Number';

// document.querySelector('.number').textContent = 10;

// document.querySelector('.score').textContent = 8;

// // Inputlarda ichidagi qiymatini olish uchun .value yoziladi chunki uni uchida qiymat bo'ladi.
// /* For examle */ document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value = 10);
// // console.log(document.querySelector('.guess').value);

// --------- HANDLING CLICK EVENT ---------//
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

//--------------  CHECK BUTTON  -------------//
const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', function(){
    const guessNumber = Number(document.querySelector('.guess').value);
    
    //When there is no input
    if(guessNumber < 1 || guessNumber > 20) {
        alert('Please provide valid number'); 
        return;
    }
    //When player wins
    else if(guessNumber === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //When guess is too high
    else if(guessNumber > secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game...!';
            document.querySelector('.score').textContent = 0;
        }
    }
    //When guess is too low
    else if(guessNumber < secretNumber){
        if(score > 1) {
            document.querySelector('.message').textContent = '📉 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You lost the game...!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

 //-------------  AGAIN BUTTON  -------------//
 document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //For only test
    document.querySelector('.number').textContent = '?';
 }); 


console.log(`My name is dilmurod`);
