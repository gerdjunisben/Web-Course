

var player1=0;
var player2=0;

var die = document.querySelectorAll("img");
for(var i=0;i<die.length;i++)
{
    if(i<3)
    {
        getDice(die[i],1);
    }
    else{
        getDice(die[i],2);
    }
}

var title = document.querySelector("h1");
if(player1 > player2)
{
    title.innerHTML = "Player 1 wins"
}
else if(player1 < player2)
{
    title.innerHTML = "Player 2 wins"
}
else
{
    title.innerHTML = "Draw"
}

function getDice(image,player)
{
    var randomNumber = Math.floor(Math.random()*6)+1;
    var diceImage = "images/dice" + randomNumber +".png";
    image.setAttribute("src", diceImage);
    if(player===1)  
    {
        player1+=randomNumber;
    }
    else{
        player2+=randomNumber;
    }

}