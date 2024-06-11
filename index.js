var random1 = Math.floor((Math.random()*6 ))+1 ;

var imgname = "./images/dice"+random1+".png";

document.querySelector(".img1").setAttribute("src", imgname);

var random2 = Math.floor((Math.random()*6))+1 ;

var imgname2 = "./images/dice"+random2+".png";

document.querySelector(".img2").setAttribute("src", imgname2);

if(random1 > random2){
    document.querySelector("h1").textContent = "Player 1 wins!";
}else if(random1 < random2){
    document.querySelector("h1").textContent = "Player 2 wins!";
}else{
    document.querySelector("h1").textContent = "It's a tie";
}
