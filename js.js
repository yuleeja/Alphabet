"use strict";

const letters = document.querySelectorAll('.boxes__box'),
    winAudio = new Audio('audio/huge win.wav'),
    audio = new Audio('audio/Mountain Audio - Menu Click.mp3');
let newLetters;

for (let value of letters) {
    value.addEventListener('click', () => {

        if (value.previousElementSibling !== null) {
            value.previousElementSibling.before(value);
            audio.play();
            newLetters = document.querySelectorAll('.boxes__box');
            console.log(newLetters);
        } else if (value.nextElementSibling !== null) {
            value.nextElementSibling.after(value);
            audio.play();
            newLetters = document.querySelectorAll('.boxes__box');
            console.log(newLetters);
        }

        if (
        newLetters[0].classList.contains('box_a') &&
        newLetters[1].classList.contains('box_b') &&
        newLetters[2].classList.contains('box_c') &&
        newLetters[3].classList.contains('box_d') &&
        newLetters[4].classList.contains('box_e') &&
        newLetters[5].classList.contains('box_f')
        ) {
            winAudio.play();
        }

    })
}
