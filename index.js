var randomNumber1 = Math.floor(Math.random() *6) + 1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() *6) + 1;
console.log(randomNumber2);






var leftimage = document.querySelector(".img1");

leftimage.src = "./images/dice" + randomNumber1 + ".png";






var rightimage = document.querySelector(".img2");

rightimage.src = "./images/dice" + randomNumber2 + ".png";



if(randomNumber1>randomNumber2){

document.querySelector("h1").innerHTML= "🏴 Player1 Wins";


}

else if(randomNumber1 == randomNumber2 ){

    document.querySelector("h1").innerHTML= "Draw";


} 

else{

    document.querySelector("h1").innerHTML= "🏴 Player2 Wins";

}