const sirag = document.querySelector('#sirag');
const btnAll = document.querySelectorAll('.btnGm');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');

const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');


function bindEvent() {

    
    
    for(const btn of btnAll) {
    
        btn.addEventListener('click', turnFunc);
    }
}

bindEvent();

let sira = 'O';
const winner = document.querySelector('#winner');

sirag.innerHTML="Sıra =" + " " + "X";
function turnFunc() {
    
    if (sira === 'X') {
        sirag.innerHTML="Sıra =" + " " + sira;
        this.innerText = 'O';
        sira = 'O';
        
    } else {
        sirag.innerHTML="Sıra =" + " " + sira;
        this.innerText = 'X';
        sira = 'X'; 
    }

    if(btn1.innerText === btn2.innerText && btn2.innerText === btn3.innerText) {
        console.log('winner');
        winner.innerHTML = "Kazanan= " + btn1.innerText;
    }

    if(btn4.innerText === btn5.innerText && btn5.innerText === btn6.innerText) {
        console.log('winner');
        winner.innerHTML = "Kazanan= " + btn4.innerText;
    }

    if(btn7.innerText === btn8.innerText && btn8.innerText === btn9.innerText) {
        console.log('winner');
        winner.innerHTML = "Kazanan= " + btn7.innerText;
    }

    if(btn1.innerText === btn4.innerText && btn4.innerText === btn7.innerText) {
        console.log('winner');
        winner.innerHTML = "Kazanan= " + btn1.innerText;
    }

    if(btn2.innerText === btn5.innerText && btn5.innerText === btn8.innerText) {
        console.log('winner');
        winner.innerHTML = "Kazanan= " + btn2.innerText;
    }

    if(btn3.innerText === btn6.innerText && btn6.innerText === btn9.innerText) {
        console.log('winner');
        winner.innerHTML = "Kazanan= " + btn3.innerText;
    }

    if(btn1.innerText === btn5.innerText && btn5.innerText === btn9.innerText) {
        console.log('winner');
        winner.innerHTML = "Kazanan= " + btn1.innerText;
    }

    if(btn3.innerText === btn5.innerText && btn5.innerText === btn7.innerText) {
        console.log('winner');
        winner.innerHTML = "Kazanan= " + btn3.innerText;
    }
}

