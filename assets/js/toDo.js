
$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();
})

$("ul").on("click", "li", function(){

    $(this).toggleClass("finished");
    
});

$("ul").on("click", "#trash", function(event){

    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropgration();
    
});

$("input[type = 'text']").keypress(function(event){
    if (event.which === 13){
        var userToDo = $(this).val();
        $(this).val("");
        $("ul").append(
            "<li><span id = 'trash'><i class='fa fa-trash' aria-hidden='true'></i></span>" + userToDo + " <span id = 'send_right'><i class='fa fa-chevron-circle-right' aria-hidden='true'></i></span></li>");
    }
})

