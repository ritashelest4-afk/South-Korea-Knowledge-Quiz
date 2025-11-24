const button = document.querySelector('#btn');
const par = document.querySelector('#show');

button.addEventListener('click', result);

function result(e){
    e.preventDefault();
    let points = 0;

    if (document.querySelector('#answerOne').checked){
        points++; 
    }

    if (document.querySelector('#answerTwo').checked){
        points++; 
    }

    if (document.querySelector('#answerThree').checked){
        points++; 
    }

    if (document.querySelector('#answerFour').checked){
        points++; 
    }

    if (document.querySelector('#answerFive').checked){
        points++; 
    }

    if (document.querySelector('#answerSix').checked){
        points++; 
    }

    if (document.querySelector('#answerSeven').checked){
        points++; 
    }

    if (document.querySelector('#answerEight').checked){
        points++; 
    }

    if (document.querySelector('#answerNine').checked){
        points++; 
    }

    if (document.querySelector('#answerTen').checked){
        points++; 
    }

    par.textContent = 'Ваши баллы: ' + points + ".";
}