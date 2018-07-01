$(document).ready(function(){
$("body").niceScroll();    
$('.carousel').carousel({

	interval:1800
});
    newFunction();
}); 
function newFunction() {
    $("#toggle").click(function(event) {
        event.preventDefault();
        if ($(this).hasClass("isDown")) {
            $(".navbar-fixed-top").animate({ "margin-top": "-66px" }, "slow");
            $("#content").animate({ "margin-top": "0px" }, "fast");
            $(this).removeClass("isDown");
        }
        else {
            $(".navbar-fixed-top").animate({ "margin-top": "0px" }, "fast");
            $("#content").animate({ "margin-top": "66px" }, "slow");
            $(this).addClass("isDown");
        }
        return false;
    });
}
//<!--    portfolio  JS  =================    -->
       
$(function() {
    var selectedClass = "";
    $(".fil-cat").click(function(){ 
    selectedClass = $(this).attr("data-rel"); 
 $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
setTimeout(function() {
  $("."+selectedClass).fadeIn().addClass('scale-anm');
  $("#portfolio").fadeTo(300, 1);
}, 300); 
    
});
});
function grabScreenshot() {
    ctx.drawImage(video, 0, 0, videoWidth, videoHeight);
    var img = new Image();
    img.src = canvas.toDataURL("image/png");
    img.width = 120;
    ssContainer.appendChild(img);
  }
