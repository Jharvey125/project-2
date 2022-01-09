const choices = ['rock','paper','scissors','lizard','spock'];

function usersAnswer(event) {
    let clickedButton = event.target;
    let userChoice = clickedButton.className;
    let computerChoice = computerAnswer();
    renderChoices(userChoice, computerChoice);
    let userWon = whoWon(userChoice, computerChoice);

    setTimeout(function(){
        renderResult(userWon);

    }, 500);
}

function renderChoices(userChoice, computerChoice) {
    document.querySelectorAll(".users-answer > .selection").forEach(selection => selection.style.display="none");
    document.querySelector(`.users-answer > .${userChoice}`).style.display = "block";
    document.querySelectorAll(".computers-answer > .selection").forEach(selection => selection.style.display="none");
    document.querySelector(`.computers-answer > .${computerChoice}`).style.display = "block";
}

function renderResult(userWon) {
    if (userWon == undefined) {
        alert('snap');
    } else if (userWon) {
        alert('DAMN... You WIN!!!')
        incrementScore();
    } else {
        alert('HAHA... You LOSE!!!')
        incrementWrongScore();
    }
}

function computerAnswer() {
    const choices = ['rock','paper','scissors','lizard','spock'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function whoWon(userAnswer, computerAnswer) {
    
    if(computerAnswer === userAnswer) {
        return;     
    }else if(computerAnswer === 'scissors' && userAnswer === 'paper') {
        return false;
    }else if(computerAnswer === 'paper' && userAnswer === 'rock') {
        return false
    }else if(computerAnswer === 'rock' && userAnswer === 'lizard') {
        return false
    }else if(computerAnswer === 'lizard' && userAnswer === 'spock') {
        return false
    }else if(computerAnswer === 'spock' && userAnswer === 'scissors') {
        return false
    }else if(computerAnswer === 'scissors' && userAnswer === 'lizard') {
        return false
    }else if(computerAnswer === 'lizard' && userAnswer === 'paper') {
        return false
    }else if(computerAnswer === 'paper' && userAnswer === 'spock') {
        return false
    }else if(computerAnswer === 'spock' && userAnswer === 'rock') {
        return false
    }else if(computerAnswer === 'rock' && userAnswer === 'scissors') {
        return false
    }else (computerAnswer < userAnswer)
        return true;
}

function incrementScore() {
    let oldscore = parseInt(document.getElementById('user-won').innerText);
    document.getElementById("user-won").innerText = ++oldscore;
}
   
function incrementWrongScore() {
    let oldscore = parseInt(document.getElementById("user-lost").innerText);
    document.getElementById("user-lost").innerText = ++oldscore;
}


document.querySelector(".controls-area").addEventListener("click", usersAnswer);