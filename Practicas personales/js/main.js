$(document).ready(function(){

    $("#user").focus(function(){
        $("#user").removeAttr('placeholder');
        $("#user").css('background-image','');
        $("#user_label").show();
        $("#user").css('opacity',0.7);
        $("#user").css('font-size','1.2em');
      }).blur(function(){
        $("#user").attr('placeholder','Email address');
        $("#user_label").hide();
        $("#user").css('opacity',0.5);
        $("#user").css('font-size','1em');
      });

    $("#password").focus(function(){
        $("#password").removeAttr('placeholder');
        $("#pass_label").show();
        $("#password").css('opacity',0.7);
      }).blur(function(){
        $("#password").attr('placeholder','Password');
        $("#pass_label").hide();
        $("#password").css('opacity',0.5);
      });

});
