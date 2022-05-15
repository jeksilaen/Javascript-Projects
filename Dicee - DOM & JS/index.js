//Only start the dice when page is reloaded
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {

  //Variables containing a number between 1-6
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  randomNumber2 = Math.floor(Math.random() * 6) + 1;

  //Changing the image depending on the random numbers
  document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
  document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

  //Changing the h1 depending on the outcome
  if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Win !";
  }else if(randomNumber1 < randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player 2 Win 🚩";
  }else{
    document.querySelector(".container h1").innerHTML = "🚩 Draw ! 🚩";
  }

}
