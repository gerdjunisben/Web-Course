$(document).ready(function(){ 
    var printed = false;  
    $(window).scroll(function(){
        $(".fadein").each(function(i){
            var bottomOfElm = $(this).offset().top + $(this).outerHeight();
            var bottomOfWin = $(window).scrollTop() + $(window).height();
            //when the bottom of the window is lower than the bottom of the elm it fades in
            if(bottomOfWin > bottomOfElm)
            {
                $(this).animate({"opacity":"1"},1000);
                if(this.className ==="skills fadein" && printed===false)
                {
                    printed= true;
                    type("⭐⭐⭐⭐⭐","#java");
                    type("⭐⭐⭐","#html");
                    type("⭐⭐⭐","#javascript");
                    type("⭐⭐","#css");
                    type("⭐⭐","#bootstrap");
                    type("⭐⭐","#jquery");
                }
            }
        })
    })

    

    function type(text,target)
    {
        var message = text.split('').reverse();
        
        var outputSlowly = setInterval(function() {
            //pops the elem at the end
            $(target).append(message.pop());
            if(message.length ===0)
            {
                //ends the interval
                clearInterval(outputSlowly);
            }
        },500);
    }
});