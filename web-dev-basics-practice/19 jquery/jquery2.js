// adding event listener
$("button").click(function(){
    $("h1").css("color","green")
    setTimeout(() => {
        $("h1").css("color","red")   
    }, 200);
});
/*$("input").keypress(function(event){
    console.log(event.key);
});

$("document").keypress(function(event){
    $("h1").text(event.key)
});

*/
$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
    setTimeout(() => {
        $("h1").css("color","red")   
    }, 200);
});
/*  adding and removing elements with jquery////
$("h1").before("<button>before</button>")
$("h1").after("<button>after</button>")
$("h1").prepend("<button>prepend</button>")
$("h1").append("<button>append</button>")
*/
/* animate objects using jquery*/
$("button").on("click",function(){
   // $("h1").slideUp();
   // $("h1").slideDown();
   // $("h1").slideToggle();
    //$("h1").fadeToggle();
   // $("h1").animate({opacity:0.5});    // adding those css properties that have numeric values ,strings are not allowed;
    $("h1").slideUp().slideDown().animate({opacity:0.5}); 
})