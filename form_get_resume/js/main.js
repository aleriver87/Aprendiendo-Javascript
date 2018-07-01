/*JQuery*/
function getIdTab(){
    return parseInt($(".tab-pane.show.active").attr("id")); //to obtain the id of the active tab
}


$(document).ready(function(){

            /* CALENDAR VALIDATION MAX DATE */
            $(".age").attr('max',GetToday()); //SETTING MAX DATE TODAY
            $(".date.1").attr('min',GetDate(3)); //SETTING MIN DATE - STARTED DATE
            $(".date.2").attr('min',GetDate(4)); //SETTING MIN DATE - END DATE
            $(".date.3").attr('min',GetDate(1)); //SETTING MIN DATE - NEXT DAY AFTER TODAY
            $(".date.today").attr('max',GetToday());
            
            $(".date.1").change(function(){ //when the start hour is change, this change the end hour   
                $(".date.2").removeClass('complete').addClass('incomplete_'+id_tab);
                $(".date.2").val("");
                $(".date.2").removeClass('ok').removeClass('error');
                $("#simbol_kindOfWork").html(""); 
                $("#error_kindOfWork").text('Select the end date.');         
            });

            function validate_date(){
                var date1 = $(".date.1").val();
                var date2 = $(".date.2").val();
                var check = true;

                if(date1 >= date2){
                    $(".date.2").removeClass('complete').addClass('incomplete_'+id_tab);
                    $(".date.2").removeClass('ok').addClass('error');
                    $("#error_kindOfWork").text('The start date can not be longer than the end date.');
                    $(".date.2").val("");
                    $("#simbol_kindOfWork_2").html("<i class='fas fa-times' style='color: #a94442;'></i>"); 
                    check = false;
                } else {
                    $(".date.2").removeClass('incomplete_'+id_tab).addClass('complete');
                    $(".date.2").removeClass('error').addClass('ok');
                    $("#error_kindOfWork").text('');
                    $("#simbol_kindOfWork_2").html("");   
                }

                return check;
            }

			/** GLOBAL VARIABLES **/
            var id_tab =  getIdTab(); //assigning the id of the active tab
            var out = ""; //variable to add the information

            /** FORCE TO UPDATE THE ID OF THE ACTIVE TAB **/
            setInterval ( function() {
                let newTab = getIdTab();
            
                if (id_tab !== newTab ) {
                    id_tab = newTab;
                }
               
                return ;
            } , 100);
               
            /* FUNCTION TO UPLOAD PHOTO */
            $("#fileupload").fileupload( {
                url:'resume.html',
                dropZone: '#dropZone',
                dataType: 'json',
                autoUpload: false
            }).on('fileuploadadd', function(e, data) {
                var fileTypeAllowed = /.\.(jpg|png|jpeg)$/i;
                var fileName = data.originalFiles[0]['name'];
                var fileSize = data.originalFiles[0]['size'];
    
                if(!fileTypeAllowed.test(fileName))
                    $("#error").text('Only images are allowed');
                else {
                    if (fileSize > 2150000){
                        $("#error").text('Your file is too big! Max allowed size is: 1MB');
                        $("#fileupload").removeClass('ok').addClass('error'); 
                        $("#fileupload").removeClass('complete').addClass('incomplete_'+id_tab);
                        $("#simbol_fileupload").html("<i class='fas fa-times' style='color: #a94442;'></i>");
                    } else { //everything is ok
                        $("#fileupload").attr('value','change image');
                        $("#error").text("");
                        $("#photo_label").html("Change the selected photo:&nbsp;&nbsp;&nbsp;");
                        $("#fileupload").removeClass('error').addClass('ok'); 
                        $("#fileupload").removeClass('incomplete_'+id_tab).addClass('complete');
                        $("#simbol_fileupload").html("<i class='fas fa-check' style='color: #449d44;'></i>");

                        var file    = data.originalFiles[0]; 
                        var reader  = new FileReader();
            
                        reader.addEventListener("load", function () {
                            $("#files").fadeIn().html('<p><img id="photo" style="width:100px; height:100px" src="'+reader.result+'"/></p>');
                        }, false);
                    }
                }    
                if (file) {
                    reader.readAsDataURL(file);
                }
            });
            
            /** ACTIVATE HIDDEN PARTS BY SELECTED RADIO **/
            /* activates class is for the input radio to show the info
               desactives class is for the input radio to hide the info 
               and remove the required field to the showed info */
            $("input[type='radio']").click(function(){

                if(this.checked && ($(this).hasClass("activates") || $(this).hasClass("desactives") ) ) {
                    var id = $(this).attr('id');
                    var separador = "_", 
                        limite    = 2,
                        name = id.split(separador, limite); //name[0] = id without "_radio" part
                    var valor = $(this).val();

                    
                    if($(this).hasClass("activates") == true){ // is for activate the hidden part
                        $("#"+name[0]+"_part").removeAttr("hidden", false);
                        $("#"+name[0]).removeClass('complete').addClass('incomplete_'+id_tab);
                        
                    } else { 
                        if($(this).hasClass("desactives") == true){  // is for hidden the new part
                        
                            if ( $("#"+name[0]).length == 0 ){
                                var k =  $("input[name='" + name[0] +"']").length ;
                                for (var i = 0 ; i <=k  ; i++  ){
                                    $("#"+name[0]+ "_" + i).removeClass('incomplete_'+id_tab).addClass('complete');
                                    $("#"+name[0]+ "_" + i).val("");
                                    $("#"+name[0]+ "_" + i).removeClass('ok').removeClass('error');
                                    $("#simbol_"+name[0]+ "_" + i).html("");
                                }
                            }else {
                                $("#"+name[0]).removeClass('incomplete_'+id_tab).addClass('complete');
                                $("#"+name[0]).val("");
                                $("#"+name[0]).removeClass('ok').removeClass('error');
                                $("#simbol_"+name[0]).html("");
                            }
                           
                            $("#"+name[0]+"_part").attr("hidden", true);
                            $("#error_"+name[0]).text('');
                            
                        }
                    }
                }
            });

            /* LABELS INFO */
            var archivoJSON = '{ "labels" :['+
                '{"id":"firstName", "text":"First name"},'+
                '{"id":"middleName", "text":"Middle name**"},'+
                '{"id":"lastName", "text":"Last Name"},'+
                '{"id":"streetAddress", "text":"Street Address"},'+
                '{"id":"state", "text":"State"},'+
                '{"id":"city", "text":"City"},'+
                '{"id":"zipCode", "text":"ZIP Code"},'+
                '{"id":"email", "text":"Email Address"},'+
                '{"id":"acquaintances", "text":"Insert name and relationship"},'+        
                '{"id":"phone", "text":"Phone Number"},'+
                '{"id":"convicted", "text":"Please describe the crime - state the nature of the crime(s), when and where convicted, and the disposition of the case"},'+
                
                '{"id":"oldposition", "text":"Please explain, include date"},'+                 
                '{"id":"position", "text":"Position applying for"},'+ 
                '{"id":"salary", "text":"Desired salary (per hour)"},'+ 
                '{"id":"performFunctions", "text":"Describe the functions that cannot be performed"},'+ 
               
                '{"id":"highSchool-Name", "text":"High School name**"},'+ 
                '{"id":"highSchool-Years", "text":"Number of years completed"},'+ 
                '{"id":"highSchool-graduate", "text":"Degree / Diploma earned"},'+ 
                '{"id":"university-Name", "text":"College / University name**"},'+ 
                '{"id":"university-Years", "text":"Number of years completed"},'+ 
                '{"id":"university-graduate", "text":"Degree / Diploma earned"},'+ 
                '{"id":"foreign-languages", "text":"List which languages and how fluent you consider yourself to be"},'+ 
                '{"id":"skill", "text":"Skills and Qualifications**"}'
                +']}';
                
              var miJSON = jQuery.parseJSON(archivoJSON);
        
                function leerJSON(json, id){
                    var id = id;
                    var out = "";
        
                    for(var i=0; i<json.labels.length;i++){
                        
                        if(json.labels[i].id == id){
                            out = json.labels[i].text; //assigning the label info following their id
                        }
                    }
                return out;
                }

            /* the form-control class is for the input field,
               this has to had a label with this format of name "inputName_label" 
               this function delete the placeholder when the mouse is on the input field
               and show the message in the label, when the focus is out the label lost the message too*/
            $(".form-control").focus(function(){ 
                var id = $(this).attr('id');
                var out = leerJSON(miJSON, id);
              
                $("#"+id).removeAttr('placeholder');
                $("#"+id+"_label").text(out+":");
                $("#"+id).css('opacity',1.5);
                $("#"+id).css('font-size','1em');
            }).blur(function(){
                var id = $(this).attr('id');
                var out = leerJSON(miJSON, id);
                var value = $(this).val();

                if(value == null || value == ""){
                    $("#"+id+"_label").text("");
                } 

                $("#"+id).attr('placeholder',out);
                $("#"+id).css('opacity',0.8);
                $("#"+id).css('font-size','1em');
            });

            /* ADD HOURS TO SELECT FIELDS */
                $(".hours").focus(function(){ //add this class to select fields whoes required hours
                    hours();
                });

                $("#start_hours").change(function(){ //when the start hour is change, this change the end hour
                    hours();
                });

                function hours(){ //to fill out the fields following the start hour
                    var start;
                    var end;
                    var i,j,k;
                    var start_hours = $("#start_hours").val();
                    var end_hours = $("#end_hours").val();

                    var out = ['12:00 am','01:00 am','03:00 am','04:00 am','05:00 am','06:00 am','07:00 am','08:00 am',
                    '09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm',
                    '06:00 pm','07:00 pm','08:00 pm','09:00 pm','10:00 pm','11:00 pm'];

                    for(j=0; j<out.length;j++){
                        if(start_hours ===out[j]){
                            k = j+1; //to get the position id of the start hour selected
                        } 
                    }

                    if(start_hours === null){
                        for(i=0; i<out.length;i++){
                            start += '<option>'+out[i]+'</option>';
                        }
    
                        $("#start_hours").html(start); //to field out the field of start_hours

                        $("#end_hours").html('<option> You must select the start hour first. </option>');
                        $("#end_hours").removeClass('complete').addClass('incomplete_'+id_tab);
                        $("#end_hours").removeClass('ok').addClass('error');
                        $("#simbol_end_hours").html("<i class='fas fa-times' style='color: #a94442;'></i>");
                        $("#start_hours").removeClass('error').addClass('ok');
                        $("#start_hours").removeClass('incomplete_'+id_tab).addClass('complete');
                        $("#simbol_start_hours").html("<i class='fas fa-check' style='color: #449d44;'></i>");
                    } else {
                        for(j=k; j<out.length;j++){ //to select the start time based on the start_hours plus one hour
                            end += '<option>'+out[j]+'</option>';
                        }
                        $("#end_hours").html(end);
                        $("#end_hours").removeClass('error').addClass('ok');
                        $("#end_hours").removeClass('incomplete_'+id_tab).addClass('complete');
                        $("#simbol_end_hours").html("<i class='fas fa-check' style='color: #449d44;'></i>");
                    }                    
                }

            /* ACTIVATING TOOLTIP */
            // help msj in the fields
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            });

            /* Evaluation of age certificate */
            /* no option*/
            $( "#ageCertificateNo" ).click(function() { // collapse and delete the info of the form when the input radio is selected
                $('.collapse').collapse('hide');
                alert("Sorry, but you can't apply a job with us without a age certificate.");
                cleanFields();
            });

            /* TELEPHONE FORMAT */
            /* This function check the info at the moment the user is trying to add text,
               this function just allow numbers and add the format (###)###-#### */
            $("input[type='phone']").keydown(function(e){
                var id = $(this).attr('id');

                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                    (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
                    (e.keyCode >= 35 && e.keyCode <= 40)) {
                        return;
                }
    
                let phone_len = $(this).val().length;
                let phone = $(this).val();
    
                if(phone_len==0){
                    $(this).val("("+phone);
                } else {
                    if(phone_len==4){
                        $(this).val(phone+")");
                    } else {
                        if(phone_len==8){
                        $(this).val(phone+"-");
                        } 
                    }
                }

                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });

            /* TELEPHONE LENGTH */
            $("input[type='phone']").focusout(function(e){
                var id = $(this).attr('id');
                var max = parseInt($(this).attr('maxlength'));
                let phone_len = $(this).val().length;

                if(phone_len == max){
                    $("#"+id).removeClass('error').addClass('ok'); //everything is ok
                    $("#"+id).removeClass('incomplete_'+id_tab).addClass('complete');
                    $("#simbol_"+id).html("<i class='fas fa-check' style='color: #449d44;'></i>");
                    $("#error_"+id).text('');
                } else { //validate if is empty
                    $("#"+id).removeClass('ok').addClass('error');
                    $("#error_"+id).text('Phone number is incomplete.');
                    $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                    $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                }
            });


            /* VALIDATE NUMBER FIELD REQUIRED */
            /* This function is for input type number and just allow the user to insert numbers 
               check if the field is empty and the length of this field getting the info from the minlength attribute */
            $("input[type='numberRequired']").keyup(function(e) { 
                var id = $(this).attr('id');
                var valueNum = $(this).val();    

                    if ($.inArray(e.keyCode, [46, 9, 27, 13, 110, 190]) !== -1 ||
                    (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
                    (e.keyCode >= 35 && e.keyCode <= 40)) {
                        return;
                    }

                    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                        e.preventDefault();
                    }

                if (valueNum == "") {  //validate if is empty
                    $("#error_"+id).text('This field is required.');
                    $("#"+id).removeClass('ok').addClass('error');
                    $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                    $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                    $("#"+id).focus();
                } else{
                    this.value = this.value.replace(/[^0-9]/g,''); //this part is to just allow numbers
                    var min = parseInt($(this).attr('minlength')); //to get the min length required by the field

                    if(valueNum.length < min){ //validate the length
                        $("#"+id).removeClass('ok').addClass('error');
                        $("#error_"+id).text('The minimun required is '+ min + ' numbers.');
                        $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                        $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                        $("#"+id).focus();
                    } else {
                        $("#"+id).removeClass('error').addClass('ok'); //everything is ok
                        $("#simbol_"+id).html("<i class='fas fa-check' style='color: #449d44;'></i>");
                        $("#"+id).removeClass('incomplete_'+id_tab).addClass('complete');
                        $("#error_"+id).text('');
                    }
                }
            }); 

            /* WHEN MAXLENGTH DOESN'T WORK */
            /* Sometimes the maxlength attribute is not working, 
               this function force this attribute to be accomplished*/
            $(".respectMaxlength").keypress(function() {
                var max = parseInt($(this).attr('maxlength'));

                if (this.value.length >= max) {
                    return false;
                }
            });

            /* VALIDATE EMAIL */
            /* This function evaluate the information in the moment of the users is typing
               in first place this function evaluate if the field is not empty,
               when the user insert information, the function search for the @ character to separate the text in 2 parts
               and evaluate the information before and after the @ character requesting info 
               before and after the point character and the @ character*/
            $("input[type='email']").change(function() { 
                var id = $(this).attr('id');
                var email = $(this).val();
                var n = email.indexOf("@"); //evaluate if the input field contains @ character
                var email_len = email.length; 
                var check = true;

                if(email.trim() == ''){ //validate if is empty
                    $("#"+id).removeClass('ok').addClass('error');
                    $("#error_"+id).text('This field is required.');
                    $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                    $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                    $("#"+id).focus();
                } else {
                    var separador = "@", 
                        limite    = 2,
                        arregloDeSubCadenas = email.split(separador, limite);

                    if(n == -1){ //this is when the @ character doesn't appear
                        $("#error_"+id).text("E-mail format invalid - Required @ character");
                        $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                        $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                        $("#"+id).removeClass('ok').addClass('error');
                        $("#"+id).focus();
                    } else {
                        if((arregloDeSubCadenas[0].length)==0){ //this is evaluating exist data before @ character
                            $("#error_"+id).text("E-mail format invalid - Required data before @ character");
                            $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                            $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                            $("#"+id).removeClass('ok').addClass('error');
                            $("#"+id).focus();
                        } else {
                            var part2 = arregloDeSubCadenas[1];
                            var m = part2.indexOf("."); //looking for point character
                            if(m == -1){ //this is to indicate that the point character doesn't appear
                                $("#"+id).removeClass('ok').addClass('error');
                                $("#error_"+id).text("E-mail format invalid - missing '.extension' Examples: .com, .org, .us (country code), .info, .gov");
                                $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                                $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                                $("#"+id).focus();
                            } else{
                                var separador2 = ".", 
                                arregloDeSubCadenas2 = part2.split(separador2, limite);
            
                                if((arregloDeSubCadenas2[0].length)==0){ //evaluating exist data before the point character
                                    $("#"+id).removeClass('ok').addClass('error');
                                    $("#error_"+id).text("E-mail format invalid - Required data after @ character and before point");
                                    $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                                    $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                                    $("#"+id).focus();
                                } else {
                                    if((arregloDeSubCadenas2[1].length)==0){ //evaluating exist date after the point character
                                        $("#"+id).removeClass('ok').addClass('error');
                                        $("#error_"+id).text("E-mail format invalid - Required data after point");
                                        $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                                        $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                                        $("#"+id).focus();
                                    } else {
                                        $("#"+id).removeClass('error').addClass('ok'); //everything is ok
                                        $("#simbol_"+id).html("<i class='fas fa-check' style='color: #449d44;'></i>");
                                        $("#"+id).removeClass('incomplete_'+id_tab).addClass('complete');
                                        $("#error_"+id).text("");
                                    }
                                }
                            }
                            
                        }
                    }
                }
            });

            /* DATE OF BIRTH FIELD VALIDATION */
            /* the age class if for field whos required to calculte age by a getting date */
            $( ".age" ).change(function() {
                var id = $(this).attr('id');

                if($(this).val().trim()==''){ //validate if is empty
                    $("#error_"+id).text('Please enter the date of birth.');
                    $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                    $("#result").text(""); 
                    $("#"+id).removeClass('ok').addClass('error');
                    $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                    $(this).focus();
                } else {
                    var edad = calcularEdad(); //calling the function to calculate the age of the user by the date introduced
                    $("#"+id).removeClass('error').addClass('ok'); //everything is ok
                    $("#error_"+id).text('');
                    $("#"+id).removeClass('incomplete_'+id_tab).addClass('complete');
                    $("#simbol_"+id).html("<i class='fas fa-check' style='color: #449d44;'></i>");
                    if(edad < 18){
                        $("#under18").removeAttr("hidden", false); //to show the message when is under 18
                    } else {
                        $("#under18").attr("hidden", true); //to hide the message when is adult
                    }
                }
            });

            /* DATE FIELD VALIDATION */
            /* the class date evaluate fields whos required date */
            $( ".date" ).change(function() {

                var name = $(this).attr('name');
                var id = $(this).attr('id');
                var date = $(this).val();

                if($(this).val().trim()==''){ //validate if is empty
                    $("#error_"+name).text('Please select a date.');
                    $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                    $("#"+id).removeClass('ok').addClass('error');
                    $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                    $(this).focus();
                } else {
                    if(validate_fecha(date)!=true){ //validate if is valid date
                        $("#error_"+name).text('Please select a valid date.');
                        $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                        $("#"+id).removeClass('ok').addClass('error');
                        $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                        $(this).focus();
                    } else {
                        $("#error_"+name).text(''); // everything is ok
                        $("#"+id).removeClass('incomplete_'+id_tab).addClass('complete');
                        $("#"+id).removeClass('error').addClass('ok');
                        $("#simbol_"+id).html("<i class='fas fa-check' style='color: #449d44;'></i>");
                    }
                }
            });           

            /* TEXT FIELD VALIDATION - REQUIRED */
            $( "input[type='text']" ).change(function() {
                var id = $(this).attr('id');

                if ($(this).val().trim() == "") { //validate if is empty
                    $("#error_"+id).text('This field is required.');
                    $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                    $("#"+id).removeClass('ok').addClass('error');
                    $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                    $("#"+id).focus();
                } else{
                    var regexTEXT = /^[a-zA-Z ]*$/; 
                    var isText = regexTEXT.test($(this).val()); //validate just letters
                    var valueText = $(this).val();
                    var min = parseInt($(this).attr('minlength')); //to get the min length required by the field

                    if(isText != true){ //validate letters
                        $("#"+id).removeClass('ok').addClass('error');
                        $("#error_"+id).text('This field is for text.');
                        $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                        $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                        $("#"+id).focus();
                    } else{
                        if(valueText.length < min){ //validate the length
                            $("#"+id).removeClass('ok').addClass('error');
                            $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                            $("#error_"+id).text('The minimun required is '+ min + ' letters.');
                            $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                            $("#"+id).focus();
                        } else {
                            $("#"+id).removeClass('error').addClass('ok'); //everything is ok
                            $("#simbol_"+id).html("<i class='fas fa-check' style='color: #449d44;'></i>");
                            $("#"+id).removeClass('incomplete_'+id_tab).addClass('complete');
                            $("#error_"+id).text('');
                        }
                    }
                }
            });

            /* TEXT FIELD VALIDATION - NOT REQUIRED (NR) */
            $( "input[type='text-NR']" ).change(function() {
                var id = $(this).attr('id');
                if ($(this).val().trim() == "") { 
                    $("#"+id).removeClass('error').removeClass('ok'); //everything is ok
                    $("#"+id).removeClass('incomplete_'+id_tab).addClass('complete');
                    $("#simbol_"+id).html("");
                    $("#error_"+id).text('');
                } else{
                    var regexTEXT = /^[a-zA-Z ]*$/; 
                    var isText = regexTEXT.test($(this).val()); //validate just letters
                    var valueText = $(this).val();
                    var min = parseInt($(this).attr('minlength')); //to get the min length required by the field

                    if(isText != true){ //validate letters
                        $("#"+id).removeClass('ok').addClass('error');
                        $("#error_"+id).text('This field is for text.');
                        $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                        $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                        $("#"+id).focus();
                    } else{
                        if(valueText.length < min){ //validate the length
                            $("#"+id).removeClass('ok').addClass('error');
                            $("#error_"+id).text('The minimun required is '+ min + ' letters.');
                            $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                            $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                            $("#"+id).focus();
                        } else {
                            $("#"+id).removeClass('error').addClass('ok'); //everything is ok
                            $("#"+id).removeClass('incomplete_'+id_tab).addClass('complete');
                            $("#simbol_"+id).html("<i class='fas fa-check' style='color: #449d44;'></i>");
                            $("#error_"+id).text('');
                        }
                    }
                }
            });

            /* TEXT FIELD VALIDATION - REQUIRED WITHOUT RESTRICTIONS OF CHARACTERS */
            $( "input[type='text-RWRC']" ).change(function() {
                var id = $(this).attr('id');
                
                if ($(this).val().trim() == "") { //validate if is empty
                    $("#error_"+id).text('This field is required.');
                    $("#"+id).removeClass('ok').addClass('error');
                    $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                    $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                    $("#"+id).focus();
                } else{
                    var valueText = $(this).val();
                    var min = parseInt($(this).attr('minlength')); //to get the min length required by the field

                    if(valueText.length < min){ //validate the length
                        $("#"+id).removeClass('ok').addClass('error');
                        $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                        $("#error_"+id).text('The minimun required is '+ min + ' letters.');
                        $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                        $("#"+id).focus();
                    } else {
                        $("#"+id).removeClass('error').addClass('ok'); //everything is ok
                        $("#"+id).removeClass('incomplete_'+id_tab).addClass('complete');
                        $("#simbol_"+id).html("<i class='fas fa-check' style='color: #449d44;'></i>");
                        $("#error_"+id).text('');
                    }
                }
            });

            /* textarea validation */
            $("textarea").change(function() {
                var id = $(this).attr('id');
                
                if ($(this).val().trim() == "") { //validate if is empty
                    $("#error_"+id).text('This field is required.');
                    $("#"+id).removeClass('ok').addClass('error');
                    $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                    $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                    $("#"+id).focus();
                } else{
                    var valueText = $(this).val();
                    var min = parseInt($(this).attr('minlength')); //to get the min length required by the field

                    if(valueText.length < min){ //validate the length
                        $("#"+id).removeClass('ok').addClass('error');
                        $("#"+id).removeClass('complete').addClass('incomplete_'+id_tab);
                        $("#error_"+id).text('The minimun required is '+ min + ' letters.');
                        $("#simbol_"+id).html("<i class='fas fa-times' style='color: #a94442;'></i>");
                        $("#"+id).focus();
                    } else {
                        $("#"+id).removeClass('error').addClass('ok'); //everything is ok
                        $("#"+id).removeClass('incomplete_'+id_tab).addClass('complete');
                        $("#simbol_"+id).html("<i class='fas fa-check' style='color: #449d44;'></i>");
                        $("#error_"+id).text('');
                    }
                }
            });

            /* VALIDATE ALMOST ONE CHECBOX IS SELECTED */
            $("input[name='availableDays']").click(function(){
                var check=0;
               
                for(var i=1; i<=7; i++){
                    var id = "#availableDay"+i;
                    if($(id).is(':checked')){
                        check++;
                    } 
                }               

                if(check>0){
                    $("input[name='availableDays']").removeClass('incomplete_2').addClass('complete');
                } else {
                    $("input[name='availableDays']").removeClass('complete').addClass('incomplete_2');
                }
            });   
             
            /* VALIDATE THE SELECTS HAS A VALUE */
            $("select").click(function(){
                $(".hours").removeClass('incomplete_'+id_tab).addClass('complete');
            });

            /** SHOW HIDDEN PART JUST WHEN USER ADD DATA TO A SPECIFIC INPUT */
            $(".changeToRequired").change(function(){
                var id = $(this).attr('id');  //getting id of the input
                var value = $(this).val();  //getting value of the input
                
                var separador = "-", 
                    limite    = 2,
                    arregloDeSubCadenas = id.split(separador, limite);

                if(value != ""){
                    $("#"+arregloDeSubCadenas[0]).attr("hidden", false);
                    $("#"+arregloDeSubCadenas[0]+"-Years").addClass("incomplete_"+id_tab).removeClass('complete');
                } else{
                    $("#"+arregloDeSubCadenas[0]).attr("hidden", true);
                    $("#"+arregloDeSubCadenas[0]+"-Years").addClass("complete").removeClass("incomplete_"+id_tab);
                }
            });

            //Creando JSON
            var archivoJSON = '{"EmploymentHistory": []}';
            var miArchivoJSON = JSON.parse(archivoJSON);
            var archivoJSON2 = '{"ReferenceHistory": []}';
            var miArchivoJSON2 = JSON.parse(archivoJSON2);
            var count = 0;
            var count_references = 10;

            

            /** ADD REFERENCES */
            $("#references").click(function(){ //open the modal to add employment
                $(".modalfield.reference").addClass('incomplete_4');
                if(count_references>13){
                    alert("You already reached the limit of references allowed to add. (3 references are the limit)");
                } 
            });

            /** ADD EMPLOYMENT HISTORY */
            $("#addEmployment").click(function(){ //open the modal to add employment
                $(".modalfield").addClass('incomplete_4');
                if(count>10){
                    alert("You already reached the limit of rows allowed to add in this form. (10 employments are the limit)");
                } 
            });

            /** SAVE A NEw REFERENCES */
            $("#addReference_btn").click(function(){

                if($(".modalfield.reference").val() == ""){
                    alert("Complete all the fields in this form, before save.");
                } else {
                    if($("#reference-name").hasClass("error") || $("#reference-phone").hasClass("error")){
                        var reviewError = true;
                    } else {
                            reviewError = false;
                    }
    
                    if($("#reference-name").hasClass("incomplete_4") || $("#reference-phone").hasClass("incomplete_4")){
                        var reviewEmpty = true;
                    } else {
                            reviewEmpty = false;
                    }

                    if(reviewError == true){
                        alert("Amend the error in the form before save.");
                    } else {

                        if(reviewEmpty == true){
                            alert("Complete all the required fields in this form, before save.");
                        } else{
                            count_references += 1;
                            var data = "";
                            var reference_name = $("#reference-name").val();
                            var reference_position = $("#reference-position").val();
                            var reference_phone = $("#reference-phone").val();
                            var kindReference_radio = $('input[name=kindReference_radio]:checked').val();
                            
                                if(count_references>13){
                                    alert("You already reached the limit of references allowed to add in this form. (3 references are the limit)");
                                } else{            
                                    data += "<tr id='Reference_"+count+"'><td>"+reference_name+"</td><td>"+reference_position+"</td><td>"+reference_phone+"</td><td>"+kindReference_radio+"<td class='delete' id='"+count+"'><i class='fas fa-trash-alt fa-1x'></i></td></tr>";
                                    miArchivoJSON2.ReferenceHistory.push({"rname":reference_name,"rposition":reference_position,"rphone":reference_phone,"rkind":kindReference_radio});
               
                                    $("#referencesHistory").append(data);
                                    $('#modalReferences').modal('toggle');
                                    $(".reference").val("");
                                    $(".reference").removeClass('incomplete_4').removeClass('complete');
                                    $(".reference").removeClass('error').removeClass('ok');
                                    $(".error_span.modalError").html("");
                                    $(".input-group-text.modalSymbol").text("");
                                }
                            }    
                        }
                    }
                });


            /** SAVE A NEW EMPLOYMENT HISTORY */
            $("#addEmployment_btn").click(function(){

                if($(".modalfield").val() == ""){
                    alert("Complete all the fields in this form, before save.");
                } else {
                    if($("#company_Name").hasClass("error") || $("#company_JobTitle").hasClass("error") || $("#company_datesWorked1").hasClass("error") || $("#company_description").hasClass("error")){
                        var reviewError = true;
                    } else {
                        if($("#current").is(':checked')){
                            reviewError = false;
                        } else{
                            if($("#company_datesWorked2").hasClass("error")){
                                var reviewError = true;
                            } else {
                                reviewError = false;
                            }
                        }
                        
                    }
    
                    if($("#company_Name").hasClass("incomplete_4") || $("#company_JobTitle").hasClass("incomplete_4") || $("#company_datesWorked1").hasClass("incomplete_4") || $("#company_description").hasClass("incomplete_4")){
                        var reviewEmpty = true;
                    } else {
                        if($("#current").is(':checked')){
                            reviewEmpty = false;
                        } else{
                            if($("#company_datesWorked2").hasClass("incomplete_4")){
                                var reviewEmpty = true;
                            } else{
                                reviewEmpty = false;
                            }
                        }
                    }
                    if(reviewError == true){
                        alert("Amend the error in the form before save.");
                    } else {

                        if(reviewEmpty == true){
                            alert("Complete all the fields in this form, before save.");
                        } else{
                            count += 1;
                            var data = "";
                            var bad_date = false;
                            var company_Name = $("#company_Name").val();
                            var company_JobTitle = $("#company_JobTitle").val();
                            var company_datesWorked1 = $("#company_datesWorked1").val();
                            var company_datesWorked2 = "";
                            if($("#current").is(':checked')){
                                company_datesWorked2 = "current";
                            } else{
                                company_datesWorked2 = $("#company_datesWorked2").val();
                                if(company_datesWorked1 > company_datesWorked2){
                                    bad_date = true; 
                                }
                            }
                            var company_description = $("#company_description").val();
                            
                            if(bad_date == true){
                                alert("The start date is greater than the final date.");
                                $("#company_datesWorked1").focus();
                            } else{
                                if(count>10){
                                    alert("You already reached the limit of rows allowed to add in this form. (10 employments are the limit)");
                                } else{            
                                    data += "<tr id='Employment_"+count+"'><td>"+company_Name+"</td><td>"+company_JobTitle+"</td><td>"+company_datesWorked1+"</td><td>"+company_datesWorked2+"</td><td>"+company_description+"</td><td><button class='btn btn-primary' type='button' class='delete' id='"+count+"'>Delete<span class='fas fa-trash-alt'></span></button></td></tr>";
                                    miArchivoJSON.EmploymentHistory.push({"cname":company_Name,"cjobtitle":company_JobTitle,"cdate1":company_datesWorked1,"cdate2":company_datesWorked2,"cdescription":company_description});
                                    
                                    $("#employmentHistory").append(data);
                                    $('#addNewEmployment').modal('toggle');
                                    $(".modalfield").val("");
                                    $(".modalfield").text("");
                                    $( "#current" ).prop( "checked", false );
                                    $(".datesWorked2").attr("hidden", false);
                                    $(".modalfield").removeClass('incomplete_4').removeClass('complete');
                                    $(".modalfield").removeClass('error').removeClass('ok');
                                    $(".error_span.modalError").html("");
                                    $(".input-group-text.modalSymbol").text("");
                                }
                            }    
                        }
                    }
                }
            });

            /** delete rows by id */
            $(".delete").click(function(){ //delete row of employment
                var id = $(this).attr("id");
                alert("entre a delete -- "+id);
               /* $.confirm({
                    title: 'Confirm!',
                    content: 'are you sure?',
                    buttons: {
                        confirm: function () {
                            $("#Employment_"+id).remove();
                        },
                        cancel: function () {
                            $.alert('Canceled!');
                        }
                    }
                });*/
            });

            $("#current").click(function(){ //When the person is adding the current job, the end date disapear
                if($("#current").is(':checked')){
                    $(".datesWorked2").attr("hidden", true);
                    $("#company_datesWorked2").val("");
                    $("#company_datesWorked2").addClass('complete');
                    $("#company_datesWorked2").removeClass('incomplete_4');
                    $("#company_datesWorked2").removeClass('error').removeClass('ok');
                    $("#simbol_company_datesWorked2").html("");
                    $("#error_company_datesWorked2").text('');
                } else{
                    $(".datesWorked2").attr("hidden", false);
                }
            });

            /** read json for employment history */
            function readEmploymentHistory(json){
                var lista = "";
                for(var i=0; i<json.EmploymentHistory.length;i++){
                    lista += "<tr><td>"+json.EmploymentHistory[i].cname+"</td><td>"+json.EmploymentHistory[i].cjobtitle+"</td><td>"+json.EmploymentHistory[i].cdate1+"</td><td>"+json.EmploymentHistory[i].cdate2+"</td><td>"+json.EmploymentHistory[i].cdescription+"</td></tr>";                
                }
                return lista;
            }

            /** read json for references */
            function readReferenceHistory(json){
                var lista = "";
                for(var i=0; i<json.ReferenceHistory.length;i++){
                    lista += "<tr><td>"+json.ReferenceHistory[i].rname+"</td><td>"+json.ReferenceHistory[i].rposition+"</td><td>"+json.ReferenceHistory[i].rphone+"</td><td>"+json.ReferenceHistory[i].rkind+"</td></tr>";
                }
                return lista;
            }

            /* NEXT AND BACK BUTTOM */
            $(".next").click(function(){
                var nextTab = id_tab+1; //to get the number of the next tab
                var certification_accepted = true;

                if(id_tab == 2){
                    var kindOfWork_radio = $('input[name=kindOfWork_radio]:checked').val();

                    if(kindOfWork_radio == "Temporary work"){
                       var valid = validate_date();
                    }
                } else{
                    if(id_tab == 4){
                        $(".modalfield").removeClass("incomplete_4");

                        if($("#certification").is(':checked')){
                            certification_accepted = true;
                        } else {
                            certification_accepted = false;
                        }
                    }
                }

                var findError = $("input").hasClass("error"); //to ensure that everything is completed correctly
                var findEmpty = false;

                if($("input").hasClass("incomplete_"+id_tab) == true || $("select").hasClass("incomplete_"+id_tab) == true){  //to ensure that everything is complete in the form before move to the next part
                    findEmpty = true; 
                }

                if(findError == true || findEmpty == true){
                    alert("Complete all the required fields before continue with this form.");//show error message when the form is not complete correctly
                } else { 
                    if(certification_accepted == true){
                        //when everything is ok
                        gettingData(id_tab);
                        $('body,html').animate({scrollTop : 0}, 500);
                        $("#"+id_tab).attr("hidden", true);
                        $("#"+nextTab).attr("hidden", false);
                        $("#"+id_tab).removeClass('show active');
                        $("#"+nextTab).addClass('show active');
                        $("#badge_"+id_tab).removeClass('badge-success').addClass('badge-secondary');//changing the color of the circle with the number of the tab of the form to gray
                        $("#badge_"+nextTab).removeClass('badge-secondary').addClass('badge-success');//changing the color of the circle with the number of the tab of the form to green
                    } else {
                        alert("Certification must be accepted.");//show error message when the certification is not accepted
                        $("#certification").focus();
                    }
                }
            });

            $(".back").click(function(){ // function to move back inside the tabs
                var nextTab = id_tab-1; //to get the number of the last tab
                $("#"+id_tab).attr("hidden", true);
                $("#"+nextTab).attr("hidden", false);
                $("#"+id_tab).removeClass('show active');
                $("#"+nextTab).addClass('show active');
                $("#badge_"+id_tab).removeClass('badge-success').addClass('badge-secondary');//changing the color of the circle with the number of the tab of the form to gray
                $("#badge_"+nextTab).removeClass('badge-secondary').addClass('badge-success');//changing the color of the circle with the number of the tab of the form to green
            });


            /* GETTING DATA */
            $("#submitResume").click(function(){
                var fullout = gettingData();
                $("#data").html(fullout);

            });

            function gettingData(id_tab){
                if(id_tab == 1){
                    /* personal information variables*/
                    var firstName = $("#firstName").val();
                    var middleName = $("#middleName").val();
                    var lastName =  $("#lastName").val();
                    var birth = $("#user_date").val();
                    var age = $("#result").text();
                    var streetAddress = $("#streetAddress").val();
                    var city = $("#city").val();
                    var state = $("#state").val();
                    var zipCode = $("#zipCode").val();
                    var phone = $("#phone").val();
                    var email = $("#email").val();
                    var employedAllClean = $('input[name=oldposition_radio]:checked').val();
                    var oldposition = $("#oldposition").val();
                    var acquaintancesAllClean = $('input[name=acquaintances_radio]:checked').val();
                    var acquaintances = $("#acquaintances").val();
                    var transportation = $('input[name=transportation]:checked').val();
                    var wasConvicted = $('input[name=convicted_radio]:checked').val();
                    var convicted = $("#convicted").val();
                    var controlled_test = $('input[name=controlled_test]:checked').val();
                    var citizen_proof = $('input[name=citizen_proof]:checked').val();
                    var photo = $("#photo").attr('src');
                    
                    out += '<blockquote class="blockquote text-center"><p class="mb-0"><i class="fas fa-user-tie fa-1x"></i>&nbsp;PERSONAL INFORMATION</p></blockquote>';
                    out += '<ul class="list-group">';
                    out += '<li class="list-group-item col-md-6">Name : '+firstName +' '+ middleName +' '+ lastName+'</li>';
                    out += '<li class="list-group-item"><p><img id="photo" style="width:100px; height:100px" src="'+photo+'"/></p></li>';
                    out += '<li class="list-group-item">Date of birth : '+birth +' - '+ age +'</li>';
                    out += '<li class="list-group-item">Street address : '+streetAddress +'</li>';
                    out += '<li class="list-group-item">State : '+state +' City : '+ city +' ZIP Code : '+ zipCode+'</li>';
                    out += '<li class="list-group-item">Phone number : '+ phone +' E-mail : ' + email +'</li>';
                    if (employedAllClean == 'Yes'){
                        out += '<li class="list-group-item">Have you ever applied to / worked for All Clean Inc before? Yes </li>';
                        out += '<li class="list-group-item">Explanation : '+oldposition +'</li>';
                    } else {
                        out += '<li class="list-group-item">Have you ever applied to / worked for All Clean Inc before? No </li>';
                    }
                    if (acquaintancesAllClean == 'Yes'){
                        out += '<li class="list-group-item">Do you have any friends, relatives, or acquaintances working for All Clean Inc? Yes </li>';
                        out += '<li class="list-group-item">Name and relationship : '+acquaintances +'</li>';
                    } else {
                        out += '<li class="list-group-item">Do you have any friends, relatives, or acquaintances working for All Clean Inc? No </li>';
                    }
                    out += '<li class="list-group-item">If hired, would you have transportation to/from work? '+transportation+'</li>';
                    if (wasConvicted == 'Yes'){
                        out += '<li class="list-group-item">Have you been convicted of or pleaded no contest to a felony within the last five years? Yes </li>';
                        out += '<li class="list-group-item">Please describe the crime - state the nature of the crime(s), when and where convicted, and the disposition of the case : '+convicted+'</li>';
                    } else {
                        out += '<li class="list-group-item">Have you been convicted of or pleaded no contest to a felony within the last five years? No </li>';
                    }
                    out += '<li class="list-group-item">If hired, are you willing to submit to a controlled substance test? '+controlled_test+'</li>';
                    out += '<li class="list-group-item"> If hired, would you be able to present evidence of your U.S. citizenship or proof of your legal right to work in the United States? '+citizen_proof+'</li>';
                    out += '</ul>';
                }
                
                if(id_tab == 2){
                    /*Position and availability variables */
                    var position = $("#position").val();
                    var salary = $("#salary").val();
                    var kindOfWork_radio = $('input[name=kindOfWork_radio]:checked').val();
                    var kindOfWork_1 = $("#kindOfWork_1").val();
                    var kindOfWork_2 = $("#kindOfWork_2").val();
                    var selectedDays = "";
                    for(var i=1; i<=7; i++){
                        var id = "#availableDay"+i;
                        if($(id).is(':checked')){
                            selectedDays += $(id).val() + " ";
                        } 
                    }
                    var start_hours = $("#start_hours").val();
                    var end_hours = $("#end_hours").val();
                    var overtime = $('input[name=overtime_radio]:checked').val();
                    var startWorking = $("#startWorking").val();
                    var performFunctions_radio = $('input[name=performFunctions]:checked').val();
                    var performFunctions = $("#performFunctions").val();

                        //info from the second tab
                        out += '<blockquote class="blockquote text-center"><p class="mb-0"><i class="fas fa-calendar-alt fa-1x"></i>&nbsp;POSITION AND AVAILABILITY</p></blockquote>';
                        out += '<ul class="list-group">';
                        out += '<li class="list-group-item">Position applying for : '+position+'</li>';
                        out += '<li class="list-group-item">Desired salary (per hour) : '+salary+'</li>';
                        if (kindOfWork_radio == 'Temporary work'){
                            out += '<li class="list-group-item">Are you applying for : '+kindOfWork_radio+' </li>';
                            out += '<li class="list-group-item">Start date : '+kindOfWork_1+' End date : '+ kindOfWork_2 +'</li>';
                        } else {
                            out += '<li class="list-group-item">Are you applying for : '+kindOfWork_radio+' </li>';
                        }
                        out += '<li class="list-group-item">Days available : '+selectedDays+' </li>';
                        out += '<li class="list-group-item">Start hours : '+start_hours+' End hours : '+ end_hours +'</li>';
                        out += '<li class="list-group-item">Are you available to work overtime? '+overtime+' </li>';
                        out += '<li class="list-group-item">If hired, on what date can you start working? '+startWorking+' </li>';
                        if (performFunctions_radio == 'No'){
                            out += '<li class="list-group-item">Are you able to perform the essential functions of the job for which you are applying, either with / without reasonable accommodation? '+performFunctions_radio+' </li>';
                            out += '<li class="list-group-item">Describe the functions that cannot be performed : '+performFunctions+'</li>';
                        } else {
                            out += '<li class="list-group-item">Are you able to perform the essential functions of the job for which you are applying, either with / without reasonable accommodation? '+performFunctions_radio+' </li>';
                        }
                        out += '</ul>'; 
                }        

                if(id_tab == 3){
                    /*Position and availability variables */
                    var highSchool_Name = $("#highSchool-Name").val();
                    var highSchool_Years = $("#highSchool-Years").val();
                    var highSchool_graduate_radio = $('input[name=highSchool-graduate]:checked').val();
                    var highSchool_graduate = $("#highSchool-graduate").val();
                    var university_Name = $("#university-Name").val();
                    var university_Years = $("#university-Years").val();
                    var university_graduate_radio = $('input[name=university-graduate]:checked').val();
                    var university_graduate = $("#university-graduate").val();
                    var skill = $("#skill").val();
                    var foreign_languages_radio = $('input[name=foreign-languages_radio]:checked').val();
                    var foreign_languages = $("#foreign-languages").val();

                        //info from the second tab
                        out += '<blockquote class="blockquote text-center"><p class="mb-0"><i class="fas fa-graduation-cap fa-1x"></i>&nbsp;EDUCATION, TRAINING AND EXPERIENCE</p></blockquote>';
                        out += '<ul class="list-group">';
                            if(highSchool_Name != null || highSchool_Name != ""){
                                out += '<li class="list-group-item">High School name : '+highSchool_Name+'</li>';
                                out += '<li class="list-group-item">Number of years completed : '+highSchool_Years+'</li>';
                                if(highSchool_graduate_radio == "Yes"){
                                    out += '<li class="list-group-item">Degree / Diploma earned : '+highSchool_graduate+'</li>';
                                }
                            } else {
                                out += '<li class="list-group-item">High School name : No data register. </li>';
                            }
                            if(university_Name != null || university_Name != ""){
                                out += '<li class="list-group-item">College / University name : '+university_Name+'</li>';
                                out += '<li class="list-group-item">Number of years completed : '+university_Years+'</li>';
                                if(university_graduate_radio == "Yes"){
                                    out += '<li class="list-group-item">Degree / Diploma earned : '+university_graduate+'</li>';
                                }
                            } else {
                                out += '<li class="list-group-item">High School name : No data register. </li>';
                            }
                        out += '<li class="list-group-item">Skills and Qualifications : '+skill+'</li>';
                            if(foreign_languages_radio == "Yes"){
                                out += '<li class="list-group-item">Do you speak, write or understand any foreign languages? Yes </li>';
                                out += '<li class="list-group-item">List which languages and how fluent you consider yourself to be : '+foreign_languages+'</li>';
                            } else {
                                out += '<li class="list-group-item">Do you speak, write or understand any foreign languages? No </li>';
                            }
                        out += '</ul>'; 
                }        

                if(id_tab == 4){
                    /*Position and availability variables */
                    var current_employed = $('input[name=current-employed]:checked').val();
                    var jsonEmployment = miArchivoJSON.EmploymentHistory.length;
                    var jsonReference = miArchivoJSON2.ReferenceHistory.length;

                        out += '<blockquote class="blockquote text-center"><p class="mb-0"><i class="fas fa-history fa-1x"></i>&nbsp;EMPLOYMENT HISTORY</p></blockquote>';
                        out += '<ul class="list-group">';
                        out += '<li class="list-group-item">Are you currently employed? '+current_employed+'</li>';
                        if(jsonEmployment == 0){
                            out += '<blockquote class="blockquote"><p class="mb-0">EMPLOYMENT HISTORY</p></blockquote>';
                            out += '<li class="list-group-item">No employment history added</li>';
                        } else{
                            out += '<blockquote class="blockquote"><p class="mb-0">EMPLOYMENT HISTORY</p></blockquote>';
                            out += "<table class='table table-striped'><thead><tr><th scope='col'>Company name</th><th scope='col'>Job Title</th><th scope='col'>Start date</th><th scope='col'>End date</th><th scope='col'>Description of work</th></tr></thead>";
                            out += readEmploymentHistory(miArchivoJSON);
                            out += "</table>";                            
                        }
                        if(jsonReference == 0){
                            out += '<blockquote class="blockquote"><p class="mb-0">REFERENCES</p></blockquote>';
                            out += '<li class="list-group-item">No references added</li>';
                        } else{
                            out += '<blockquote class="blockquote"><p class="mb-0">REFERENCES</p></blockquote>';
                            out += "<table class='table table-striped' id='referencesHistory'><thead><tr><th scope='col'>Reference name</th><th scope='col'>Position and company</th><th scope='col'>Phone number</th><th scope='col'>What kind of reference is?</th></tr></thead>";
                            out += readReferenceHistory(miArchivoJSON2);
                            out += "</table>";                            
                        }
                        out += '<li class="list-group-item"><input type="checkbox" checked>I certify that the information contained in this application is true and complete. I understand that false information may be grounds for not hiring me or for immediate termination of employment if I am hired. I authorize the verification of any and all information listed above.</li>';
                        out += '</ul>'; 
                }
                return out;
            }        
            
            $("#sendResume").click(function(){
                alert('Thanks for contacting us, we\'ll get back to you soon.');
                $('.collapse').collapse('hide');
                cleanFields();
               /* $.ajax({
                    type:'POST',
                    url:'submit_form.php',
                    data:out,
                    beforeSend: function () {
                        $('.submitBtn').attr("disabled","disabled");
                        $('.modal-body').css('opacity', '.5');
                    },
                    success:function(msg){
                        if(msg == 'ok'){
                            alert('Thanks for contacting us, we\'ll get back to you soon.');
                        }else{
                            alert('Some problem occurred, please try again.');
                        }
                    }
                });*/
            });
            
    function cleanFields() {
        $("input").removeClass('error').removeClass('ok');
        $("span[id^='simbol_']").html("");
        $(".hidden").attr("hidden", true);
        $("#files").html("");
        $(".error_span").html("");
        document.getElementById("resume").reset();
    } 
});