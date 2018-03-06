$(document).ready(function(){

    $("#user").focus(function(){
        $("#user").removeAttr('placeholder');
        $("#user_label").show();
        $("#user").css('opacity',0.7);
        $("#user").css('font-size','1.2em');
      }).blur(function(){
        $("#user").attr('placeholder','E-mail address');
        $("#user_label").hide();
        $("#user").css('opacity',0.5);
        $("#user").css('font-size','1em');
      });

    /* Forgot your password? */  
    $("#user2").focus(function(){
        $("#user2").removeAttr('placeholder');
        $("#user_label").show();
        $("#user2").css('opacity',0.7);
        $("#user2").css('font-size','1.2em');
      }).blur(function(){
        $("#user2").attr('placeholder','Enter your e-mail address');
        $("#user_label").hide();
        $("#user2").css('opacity',0.5);
        $("#user2").css('font-size','1em');
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

    $("#sing_in_btn").click(function(){
      var user = $("#user").val();
      var password = $("#password").val();
      localStorage.user = user;
      alert("Wellcome "+ user);
    });

    
});
