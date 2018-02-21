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

<<<<<<< HEAD
});
=======
    /* Validando */
    
    var user = $("#user").val();
    var password = $("#password").val();
    var user_error = $("#user_error");
    var password_error = $("#password_error");

    $("#login_btn").click(function(){
        if(user.trim() == ""){
            user_error.html("Please enter your email");
            user_error.slideDown(1000);
        } else {
            user_error.hide();
            user_error.html("");
        }

        if(password.trim() == ""){
            password_error.html("Please enter your password");
            password_error.slideDown(1000);
        } else {
            password_error.slideUp(1000);
        }
    });
});
>>>>>>> 3858325ec008decc19aaf068aeae085790392f1c
