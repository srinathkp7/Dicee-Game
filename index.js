var randomNumber = Math.floor(Math.random()*6) + 1;  //randomNumber var

var randomdiceimage = "dice"+randomNumber+".png"; // concadenat the randomNumber

var randomimagesource = "images/"+randomdiceimage; // concadinate the images folder

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src", randomimagesource);


 var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomimagesource2 = "images/dice" + randomNumber2 + ".png";

var images2 = document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);


// dice game //

if ( randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 wins!👑";
}
else if(randomNumber < randomNumber2){
  document.querySelector("h1").innerHTML = "Player2 wins!👑";
}
else{
  document.querySelector("h1").innerHTML = "Draw!😃";
}
