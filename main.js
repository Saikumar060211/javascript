var randomnumber1=Math.floor(Math.random()*6)+1
var randomimagesource1="images/dice"+randomnumber1+".png"
document.querySelectorAll("img")[0].setAttribute("src",randomimagesource1)

var randomnumber2=Math.floor(Math.random()*6)+1
var randomimagesource2="images/dice"+randomnumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2)

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="player 1 won!";
}
else if(randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML="player 2 won!"
}
else{
    document.querySelector("h1").innerHTML="draw!"
}