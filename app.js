window.onload = () => {
    const counter = document.querySelector('#counter');
    const hightestCounter = document.querySelector('#hightestCounter');
    const answer = document.querySelector('#answer');
    const mobileAnswer = document.querySelector('#mobile-answer');
    const trueAnswer = document.querySelector('#true-answer');
    const resetButton = document.querySelector("#reset-button");
    const nicePi = "3. 14159 26535 89793 23846 26433 83279 50288 41971 69399 37510" + 
					 " 58209 74944 59230 78164 06286 20899 86280 34825 34211 70679" +
					 " 82148 08651 32823 06647 09384 46095 50582 23172 53594 08128" +
					 " 48111 74502 84102 70193 85211 05559 64462 29489 54930 38196" +
					 " 44288 10975 66593 34461 28475 64823 37867 83165 27120 19091" +
					 " 45648 56692 34603 48610 45432 66482 13393 60726 02491 41273" +
					 " 72458 70066 06315 58817 48815 20920 96282 92540 91715 36436" +
					 " 78925 90360 01133 05305 48820 46652 13841 46951 94151 16094" +
					 " 33057 27036 57595 91953 09218 61173 81932 61179 31051 18548" +
					 " 07446 23799 62749 56735 18857 52724 89122 79381 83011 94912" +
					 " 98336 73362 44065 66430 86021 39494 63952 24737 19070 21798" +
					 " 60943 70277 05392 17176 29317 67523 84674 81846 76694 05132" +
					 " 00056 81271 45263 56082 77857 71342 75778 96091 73637 17872" +
					 " 14684 40901 22495 34301 46549 58537 10507 92279 68925 89235" +
					 " 42019 95611 21290 21960 86403 44181 59813 62977 47713 09960" +
					 " 51870 72113 49999 99837 29780 49951 05973 17328 16096 31859" +
					 " 50244 59455 34690 83026 42522 30825 33446 85035 26193 11881" +
					 " 71010 00313 78387 52886 58753 32083 81420 61717 76691 47303" +
					 " 59825 34904 28755 46873 11595 62863 88235 37875 93751 95778" +
					 " 18577 80532 17122 68066 13001 92787 66111 95909 21642 01989";
    const pi = nicePi.slice(3).split(' ').join('');
	console.log(nicePi)
    let index = 0;
    let hightest = 0;
    let gameOver = false;
    
    const reset = () => {
        // Enter pressed, reset game
        if (gameOver) {
            index = 0;
            counter.innerHTML = 0;
            gameOver = false;
            answer.innerHTML = '3,';
            trueAnswer.innerHTML ='3,';
        }
    }
    
    const onInput = (e) => {
        const data = e.key;
        if (gameOver) {
            if (e.keyCode && e.keyCode === 13) {reset();} // Reset if enter is pressed
            return;
        }

        if (Number.isInteger(parseInt(data, 10))) {

            answer.innerHTML += ((answer.innerText.length - 2) % 6 === 0) ? ' ' + data : data;
            trueAnswer.innerHTML = answer.innerText.slice(0, -1) + `<span class="good">${answer.innerHTML.slice(-1)}</span>`;
            if (pi[index] === data) {
                index++;
                counter.innerHTML = index;
                if (index > hightest){
                    hightest = index;
                }
                hightestCounter.innerHTML = 'Highscore: ' + hightest;
            } else {
                const niceIndex = index + Math.round(index / 6) + 4;
                answer.innerHTML = answer.innerText.slice(0, -1) + `<span class="bad">${answer.innerHTML.slice(-1)}</span>`;
                trueAnswer.innerHTML = answer.innerText.slice(0, -1) + `<span class="good">${pi[index]}</span>`;// + nicePi.substr(index + 1);

                // Reset
                index = 0;
                gameOver = true;
            }
        }
    };
    
    
    document.addEventListener('click', (e) => {
       mobileAnswer.focus();
    });
    
    resetButton.addEventListener('click', (e) => {
        gameOver =  true;
        reset();
    })
    
    mobileAnswer.addEventListener('input', (e) => {
       console.log(e);
       // Fake keypress event
       //onInput({key: e.data});
    });

    document.addEventListener('keydown', onInput);
}
