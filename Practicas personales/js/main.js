//Validando formulario
/*$.validator.setDefaults({
    
    submitHandler: function(form ){

        var username = $("#user").val();
        var password = $("#password").val();

        var user = {
            username:username,
            password:password
        };

        localStorage.setItem(username,JSON.stringify(user));

        $("#user").val("");
        $("#password").val("");
    }
});*/

$(document).ready(function(){   
   /* var validator = $("#login").validate({
        errorPlacement: function(error, element){
            $(element).closest("form")
            .find("label[for='"+element.attr("id")+"']")
            .prepend(error);
        },
        errorElement: "span",
        messages: {
            user:{
                required: "Please enter your username"
            },
            password: {
                required: "Please enter your password",
                minlength: "Your answer should be {8} characters."
            }
        }
    });*/

    $("#user").focus(function(){
        $("#user").removeAttr('placeholder');
        $("#user_label").show();
        $("#user").css('opacity',0.7);
      }).blur(function(){
        $("#user").attr('placeholder','Username');
        $("#user_label").hide();
        $("#user").css('opacity',0.5);
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

    /* Validando 
    $("#user_error").hide();
    var user = $("#user").val();
    var password = $("#password").val();

    $("#login_btn").click(function(){
        if (user.trim() == "") {
            $("#user_error").slideUp(10000);
            $("#user_error").slideDown(10000);
        } else{
            
        }
    });*/
});