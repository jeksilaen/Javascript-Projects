alert("Press w/a/s/d/j/k/l to play, use 'Spacebar' to play it back!  [Refresh to reset]");

let buttons = document.querySelectorAll(".drum"); //Selecting all buttons

let drumPattern = []; //For playback

for (let i = 0; i < buttons.length; i++) { //Detecting mouse clicks 
    buttons[i].addEventListener("click", function() {
        makeSound(buttons[i].innerHTML);
        buttonAnimation(buttons[i].innerHTML);
        drumPattern.push(buttons[i].innerHTML);
    });
}

document.addEventListener("keydown", function(event){ //Detecting keyboard presses

    makeSound(event.key);
    buttonAnimation(event.key);
    drumPattern.push(event.key);
    
})


function makeSound(key){ //Generate drum sounds
    switch (key) {
        case "w":
            new Audio("sounds/tom1.mp3").play()
            break;
        case "a":
            new Audio("sounds/tom2.mp3").play()
            break;
        case "s":
            new Audio("sounds/tom3.mp3").play()
            break;
        case "d":
            new Audio("sounds/tom4.mp3").play()
            break;
        case "j":
            new Audio("sounds/snare.mp3").play()
            break;
        case "k":
            new Audio("sounds/crash.mp3").play()
            break;
        case "l":
            new Audio("sounds/kick.mp3").play()
            break;
        case " ": //To avoid running the default case when spacebar is pressed
            break;
        default:
            alert("Press w/a/s/d/j/k/l to play, use 'Spacebar' to play it back!  [Refresh to reset]");
            break;
    }
}

function buttonAnimation(key){
    if (key == " ") { //If the spacebar is pressed then the playback function is called
        let pressedButton = document.querySelector(".playback");
        pressedButton.classList.add("pressed");
        setTimeout(function() { pressedButton.classList.remove("pressed"); }, 100);

        playBack();
    }
    else{
        let pressedButton = document.querySelector("." + key);
        pressedButton.classList.add("pressed");
    
        setTimeout(function() { pressedButton.classList.remove("pressed"); }, 100);
    }
    
}

function playBack(){ //Iterate the drum pattern and play it back
    let time = 100;
    drumPattern.forEach(element => {
        setTimeout(function () {makeSound(element)}, time);
        time = time + 300;
    });
}

document.querySelector(".playback").addEventListener("click", function(){ //Playback function using click
    playBack();
    
})








