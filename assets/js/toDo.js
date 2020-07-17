$("li").click(function(){

    $(this).toggleClass("finished");
    
});

$("span").click(function(event){

    $(this).parent().fadeOut();
    event.stopPropgration();
    
});