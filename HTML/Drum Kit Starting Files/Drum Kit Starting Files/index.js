var buttons = document.querySelectorAll(".drum")
for(var x=0;x<buttons.length;x++)
{
    buttons[x].addEventListener("click",function (){
        makeSound(this.innerHTML);

        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(this.innerHTML);
});


function makeSound(key)
{
    
    
            switch(key)
            {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;

            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;

            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            break;

            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            break;

            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;

            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            break;

            case "l":
                var audio = new Audio("sounds/kick-base.mp3");
                audio.play();
            break;

            default:alert(":(");

            }
        
    
}

function buttonAnimation(currentKey)
{
    var aButton = document.querySelector("."+currentKey);
    aButton.classList.add("pressed");
    setTimeout(function(){
        aButton.classList.remove("pressed");
    },100);
}

