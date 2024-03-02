// document.querySelector('.display-output').textContent = 'Your Guessing is Correct🎉🎉';

// document.querySelector('.score').textContent = 20;

// document.querySelector('.heigh-score').textContent = 10;

let holdGenerateRandomValue = Math.trunc(Math.random()*20)+1;


  

// Start building game logic...
let score = 20;

document.querySelector('.check-button').addEventListener('click',function () {
let guessUserInput = Number(document.querySelector('.input-type').value);
let highScore = 0 ;
    if(!guessUserInput){
        document.querySelector('.display-output').textContent = 'Please Enter the number 🚫';  
    }
    else if(guessUserInput===holdGenerateRandomValue){
        document.querySelector('.display-output').textContent = 'Your Guessing is Correct🎉🎉';
        document.querySelector('body').style.backgroundColor = 'blue'
        document.querySelector('.hold-generated-value').textContent = holdGenerateRandomValue;
        if (score > highScore){
            highScore = score;
            document.querySelector('.heigh-score').textContent = highScore;
        }
    }
    else if (guessUserInput > holdGenerateRandomValue){
        if(score>1){
            document.querySelector('.display-output').textContent = 'Your guess is Too high 📈';
            score--;   
            document.querySelector('.score').textContent = score; 
        }
        else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.display-output').textContent = 'You lost the game😒😒'; 
        }
    }
    else if (guessUserInput < holdGenerateRandomValue){
        if(score>1){
            document.querySelector('.display-output').textContent = 'Your guess is Too low 📉'; 
            score--;   
            document.querySelector('.score').textContent = score; 
        }
        else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.display-output').textContent = 'You lost the game😒😒'; 
        }
    }
});


// again ......

document.querySelector('.again-button').addEventListener('click',function () {
    document.querySelector('.display-output').textContent = 'Start the guessing.....';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.input-type').value = " ";
    document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 0.758)';
    document.querySelector('.hold-generated-value').textContent = '?';
})





