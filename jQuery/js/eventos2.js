$(document).ready(function(){
   $("li").filter(":odd").hide().end().filter(":even").hover(function(){
       $(this).toggleClass("active").next().stop(true, true).slideToggle();
   });
});