<?php
  /*  if(isset($_FILES['attachments'])){
        $msg = "";
        $targetFile = "uploads/".basename($_FILES['attachments']['name'][0]);
        if(file_exists($targetFile))
            $msg = array("status" => 0, "msg" => "File already exists!");
        else if(move_uploaded_file($_FILES['attachments']['tmp_name'][0], $targetFile))
            $msg = array("status" => 1, "msg" => "File has been uploaded", "path" => $targetFile);
        exit(json_encode($msg));
    }*/
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:500" rel="stylesheet">
</head>
<body>
    <div class="jumbotron jumbotron-fluid" style="background-color:#777;">
        <p>
            <h1 style="color:#fff;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Join to our team 
                <a class="btn btn-primary sendResume" id="sendResume_btn" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Send resume
                </a>
            </h1>
        </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    <div class="tab-content" id="myTabContent">
                        <div class="col-md-3 col-xs-3"></div>
                            <div class="col-sm-12 col-xs-2 col-md-12" style="text-align:center;">
                                <span class="badge badge-pill badge-success" id="badge_1">1</span> <!-- PERSONAL INFORMATION -->
                                <i class="arrow fas fa-arrow-right fa-2x"></i>
                                <span class="badge badge-pill badge-secondary" id="badge_2">2</span><!-- POSITION AND AVAILABILITY -->
                                <i class="arrow fas fa-arrow-right fa-2x"></i>
                                <span class="badge badge-pill badge-secondary" id="badge_3">3</span> <!-- EDUCATION, TRAINING AND EXPERIENCE -->
                                <i class="arrow fas fa-arrow-right fa-2x"></i>
                                <span class="badge badge-pill badge-secondary" id="badge_4">4</span><!-- EMPLOYMENT HISTORY -->
                                <i class="arrow fas fa-arrow-right fa-2x"></i>
                                <span class="badge badge-pill badge-secondary" id="badge_5">5</span><!-- REVIEWING RESUME -->
                            </div>
                        <div class="col-md-3 col-xs-3"></div>   
                    </div>
                    <form id="resume">
                        <!-- SECTION PERSONAL INFORMATION -->
                        <div class="tab-pane fade show active" id="1" role="tabpanel" aria-labelledby="home-tab">
                            <blockquote class="blockquote text-center">
                                <p class="mb-0"><i class="fas fa-user-tie fa-1x"></i>&nbsp;PERSONAL INFORMATION</p>
                            </blockquote>
                            <div class="form-group">
                                <label id="firstName_label"></label>
                                <div class="input-group input-group-sm mb-3"> 
                                    <input type="text" class="form-control incomplete_1" id="firstName" placeholder="First name" minlength="3" maxlength="30"/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_firstName"></span>
                                    </div>
                                </div>
                                <span class="error_span" id="error_firstName"></span>
                            </div>
                            <div class="form-group">
                                <label id="middleName_label"></label>
                                <div class="input-group input-group-sm mb-3"> 
                                    <input type="text-NR" class="form-control" id="middleName" placeholder="Middle name" minlength="3" maxlength="15">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_middleName"></span>
                                    </div>
                                </div>
                                <span class="error_span" id="error_middleName"></span>
                            </div>
                            <div class="form-group">
                                <label id="lastName_label"></label>
                                <div class="input-group input-group-sm mb-3"> 
                                    <input type="text" class="form-control incomplete_1" id="lastName" placeholder="Last Name" minlength="3" maxlength="30">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_lastName"></span>
                                    </div>
                                </div>
                                <span class="error_span" id="error_lastName"></span>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-sm mb-3"> 
                                    <label>Select date of birth: &nbsp;&nbsp;</label>
                                    <input type="date" name="user_date" id="user_date" class="incomplete_1 age"/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_user_date"></span>
                                    </div>
                                </div>
                                <div id="result"></div>
                                <span class="error_span" id="error_user_date"></span>
                            </div>
                            <div class="form-group" id="under18" hidden>
                                <label>You are under 18. Do you have an employment/age certificate?</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="ageCertificate" id="ageCertificateYes" value="Yes" checked>
                                    <label class="form-check-label" for="yes">Yes</label>
                                </div>
                                <div class="form-check form-check-inline"> 
                                    <input class="form-check-input" type="radio" name="ageCertificate" id="ageCertificateNo" value="No">
                                    <label class="form-check-label" for="no">No</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-sm mb-3"> 
                                    <label id="photo_label">Insert your photo:&nbsp;&nbsp;&nbsp;</label>
                                    <input type="file" id="fileupload" name="attachments[]" class="incomplete_1">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_fileupload"></span>
                                    </div>
                                </div>
                                <span class="error_span" id="error"></span>
                                <span id="progress"></span>
                                <div id="files"></div>
                            </div>
                            <div class="form-group">
                                <label id="streetAddress_label"></label>
                                <div class="input-group input-group-sm mb-3"> 
                                    <input type="text-RWRC" class="form-control incomplete_1" id="streetAddress" placeholder="Street Address" maxlength="100" minlength="5">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_streetAddress"></span>
                                    </div>
                                </div>
                                <span class="error_span" id="error_streetAddress"></span>
                            </div>
                            <div class="form-group">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label id="state_label"></label>
                                        <div class="input-group input-group-sm mb-3">
                                            <input type="text" class="form-control incomplete_1" id="state" placeholder="State">
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="simbol_state"></span>
                                            </div>
                                        </div>
                                        <span class="error_span" id="error_state"></span>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label id="city_label"></label>
                                        <div class="input-group input-group-sm mb-3">
                                            <input type="text" class="form-control incomplete_1" id="city" placeholder="City">
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="simbol_city"></span>
                                            </div>
                                        </div>
                                        <span class="error_span" id="error_city"></span>
                                    </div>
                                    <div class="form-group col-md-2">
                                        <label id="zipCode_label"></label>
                                        <div class="input-group input-group-sm mb-3">
                                            <input type="number" class="form-control input-number incomplete_1" id="zipCode" placeholder="ZIP Code" maxlength="5" minlength="5">
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="simbol_zipCode"></span>
                                            </div>
                                        </div>
                                        <span class="error_span" id="error_zipCode"></span>
                                    </div>
                                  </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label id="phone_label"></label>
                                    <div class="input-group input-group-sm mb-3">
                                        <input type="phone" class="form-control incomplete_1" id="phone" maxlength="13" placeholder="Phone Number" minlength="13">
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="simbol_phone"></span>
                                        </div>
                                    </div>
                                    <span class="error_span" id="error_phone"></span>
                                </div>
                                <div class="form-group col-md-6">
                                    <label id="email_label"></label>
                                    <div class="input-group input-group-sm mb-3">
                                        <input type="email" class="form-control incomplete_1" id="email" placeholder="Email Address">
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="simbol_email"></span>
                                        </div>
                                    </div>
                                    <span class="error_span" id="error_email"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Have you ever applied to / worked for All Clean Inc before?</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input activates" type="radio" name="oldposition_radio" id="oldposition_radio_yes" value="Yes">
                                    <label class="form-check-label" for="yesOldPosition">Yes</label>
                                </div>
                                <div class="form-check form-check-inline"> 
                                    <input class="form-check-input desactives" type="radio" name="oldposition_radio" id="oldposition_radio_no" value="No" checked>
                                    <label class="form-check-label" for="noOldPosition">No</label>
                                </div>
                            </div>
                            <div class="form-group" id="oldposition_part" hidden>
                                <label id="oldposition_label"></label>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text-RWRC" class="form-control" id="oldposition" placeholder="Please explain, include date">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_oldposition"></span>
                                    </div>
                                </div>
                                <span class="error_span" id="error_oldposition"></span>
                            </div>
                            <div class="form-group">
                                <label>Do you have any friends, relatives, or acquaintances working for All Clean Inc?</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input activates" type="radio" name="acquaintances_radio" id="acquaintances_radio_yes" value="Yes">
                                    <label class="form-check-label" for="yes" >Yes</label>
                                </div>
                                <div class="form-check form-check-inline"> 
                                    <input class="form-check-input desactives" type="radio" name="acquaintances_radio" id="acquaintances_radio_no" value="No" checked>
                                    <label class="form-check-label" for="no">No</label>
                                </div>
                            </div>
                            <div class="form-group" id="acquaintances_part" hidden>
                                <label id="acquaintances_label"></label>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text" class="form-control" id="acquaintances" placeholder="Insert name and relationship">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_acquaintances"></span>
                                    </div>
                                </div>
                                <span class="error_span" id="error_acquaintances"></span>
                            </div>
                            <div class="form-group">
                                <label>If hired, would you have transportation to/from work?</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="transportation" id="transportation_yes" value="Yes" checked>
                                    <label class="form-check-label" for="yes">Yes</label>
                                </div>
                                <div class="form-check form-check-inline"> 
                                    <input class="form-check-input" type="radio" name="transportation" id="transportation_no" value="No">
                                    <label class="form-check-label" for="no">No</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Have you been convicted of or pleaded no contest to a felony within the last five years?</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input activates" type="radio" name="convicted_radio" id="convicted_radio_yes" value="Yes">
                                    <label class="form-check-label" for="yes" >Yes</label>
                                </div>
                                <div class="form-check form-check-inline"> 
                                    <input class="form-check-input desactives" type="radio" name="convicted_radio" id="convicted_radio_no" value="No" checked>
                                    <label class="form-check-label" for="no">No</label>
                                </div>
                            </div>
                            <div class="form-group" id="convicted_part" hidden>
                                <label id="convicted_label"></label>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text-RWRC" class="form-control" id="convicted" placeholder="Please describe the crime - state the nature of the crime(s), when and where convicted, and the disposition of the case">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_convicted"></span>
                                    </div>
                                </div>
                                <span class="error_span" id="error_convicted"></span>
                            </div>
                            <div class="form-group">
                                <label>If hired, are you willing to submit to a controlled substance test?</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="controlled_test" id="controlled_test_yes" value="Yes" checked>
                                    <label class="form-check-label" for="yes">Yes</label>
                                </div>
                                <div class="form-check form-check-inline"> 
                                    <input class="form-check-input" type="radio" name="controlled_test" id="controlled_test_yes" value="No">
                                    <label class="form-check-label" for="no">No</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>If hired, would you be able to present evidence of your U.S. citizenship or proof of your legal right to work in the United States?</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="citizen_proof" id="citizen_proof_yes" value="Yes" checked>
                                    <label class="form-check-label" for="yes">Yes</label>
                                </div>
                                <div class="form-check form-check-inline"> 
                                    <input class="form-check-input" type="radio" name="citizen_proof" id="citizen_proof_no" value="No">
                                    <label class="form-check-label" for="no">No</label>
                                </div>
                            </div>
                            <div class="d-flex flex-row-reverse">
                                <div class="p-2">
                                    <button class="btn btn-primary open1 next sendResume" type="button">
                                        Next <span class="fa fa-arrow-right"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- SECTION POSITION AND AVAILABILITY -->
                        <div class="tab-pane fade" id="2" role="tabpanel" aria-labelledby="profile-tab" hidden>
                            <blockquote class="blockquote text-center">
                                <p class="mb-0"><i class="fas fa-calendar-alt fa-1x"></i>&nbsp;POSITION AND AVAILABILITY</p>
                            </blockquote>
                            <div class="form-group">
                                <label id="position_label"></label>
                                <div class="input-group input-group-sm mb-3"> 
                                    <input type="text" class="form-control incomplete_2" id="position" placeholder="Position applying for" minlength="1" maxlength="30" data-toggle="tooltip" data-placement="left" title="Examples: Floor Technician,Night Shift Supervisor, Night Shift restaurant cleaner, License Sub contractors. ">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_position"></span>
                                    </div>
                                </div>
                                <span class="error_span" id="error_position"></span>
                            </div>
                            <div class="form-group">
                                <label id="salary_label"></label>
                                <div class="input-group input-group-sm mb-3"> 
                                    <input type="number" class="form-control incomplete_2" id="salary" placeholder="Desired salary (per hour)" minlength="1" maxlength="12">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_salary"></span>
                                    </div>
                                </div>
                                <span class="error_span" id="error_salary"></span>
                            </div>
                            <div class="form-group">
                                <label>Are you applying for:</label>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input activates" type="radio" name="kindOfWork_radio" id="kindOfWork_radio_temp" value="Temporary work">
                                    <label class="form-check-label" for="temporary" data-toggle="tooltip" data-placement="right" title="Such as summer or holiday work">Temporary work</label>
                                </div>
                                <div class="form-check form-check-inline"> 
                                    <input class="form-check-input desactives" type="radio" name="kindOfWork_radio" id="kindOfWork_radio_part" value="Part-time" checked>
                                    <label class="form-check-label" for="part-time">Regular part-time work</label>
                                </div>
                                <div class="form-check form-check-inline"> 
                                    <input class="form-check-input desactives" type="radio" name="kindOfWork_radio" id="kindOfWork_radio_full" value="Full-time" checked>
                                    <label class="form-check-label" for="full-time">Regular full-time work</label>
                                </div>
                            </div>
                            <div class="form-group" id="kindOfWork_part" hidden>
                                <div class="input-group input-group-sm mb-3"> 
                                    <label>Start date: &nbsp;&nbsp;</label>
                                    <input type="date" name="kindOfWork" id="kindOfWork_1" class="date 1"/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_kindOfWork_1"></span>
                                    </div>
                                    <label>End date: &nbsp;&nbsp;</label>
                                    <input type="date" name="kindOfWork" id="kindOfWork_2" class="date 2"/>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="simbol_kindOfWork_2"></span>
                                    </div>
                                </div>
                                <span class="error_span" id="error_kindOfWork"></span>
                            </div>
                            <div class="form-group">
                                <label class="incomplete_2">Days available:</label>
                                <div class="col">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input availableDay" type="checkbox" name="availableDays" id="availableDay1" value="Monday">
                                        <label class="form-check-label">Monday</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input availableDay" type="checkbox" name="availableDays" id="availableDay2" value="Tuesday">
                                        <label class="form-check-label">Tuesday</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input availableDay" type="checkbox" name="availableDays" id="availableDay3" value="Wednesday">
                                        <label class="form-check-label">Wednesday</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input availableDay" type="checkbox" name="availableDays" id="availableDay4" value="Thursday">
                                        <label class="form-check-label">Thursday</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input availableDay" type="checkbox" name="availableDays" id="availableDay5" value="Friday">
                                        <label class="form-check-label">Friday</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input availableDay" type="checkbox" name="availableDays" id="availableDay6" value="Saturday">
                                        <label class="form-check-label">Saturday</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input availableDay" type="checkbox" name="availableDays" id="availableDay7" value="Sunday">
                                        <label class="form-check-label">Sunday</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Hours available </label>
                                <div class="col-md-6 col-xs-6 col-sm-6">
                                    <div class="row">
                                        <div class="col-sm-3 col-xs-3 col-md-3">
                                            <div class="col"><label>From: </label></div>
                                            <div class="col"><label>To: </label></div>
                                        </div>
                                        <div  class="col-sm-6 col-xs-6 col-md-6">
                                            <div class="col"><select class="form-control hours incomplete_2" id="start_hours"></select></div>
                                            <div class="col"><select class="form-control hours incomplete_2" id="end_hours"></select></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-row-reverse">
                                <div class="p-2">
                                    <button class="btn btn-primary open1 next sendResume" type="button">
                                        Next <span class="fa fa-arrow-right"></span>
                                    </button>
                                </div>
                                <div class="p-2">
                                    <button class="btn btn-dark back3 back" type="button">
                                        <span class="fa fa-arrow-left"></span> Back
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- SECTION EDUCATION, TRAINING AND EXPERIENCE -->
                        <div class="tab-pane fade" id="3" role="tabpanel" aria-labelledby="profile-tab" hidden>
                            <blockquote class="blockquote text-center">
                                <p class="mb-0"><i class="fas fa-graduation-cap fa-1x"></i>&nbsp;EDUCATION, TRAINING AND EXPERIENCE</p>
                            </blockquote>
                            <div class="form-group">
                                <label for="school">School attended:</label>
                                <input type="text" class="form-control" id="school">
                            </div>
                            <div class="d-flex flex-row-reverse">
                                <div class="p-2">
                                    <button class="btn btn-primary open1 next sendResume" type="button">
                                        Next <span class="fa fa-arrow-right"></span>
                                    </button>
                                </div>
                                <div class="p-2">
                                    <button class="btn btn-dark back3 back" type="button">
                                        <span class="fa fa-arrow-left"></span> Back
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- SECTION EMPLOYMENT HISTORY -->
                        <div class="tab-pane fade" id="4" role="tabpanel" aria-labelledby="contact-tab" hidden>
                            <blockquote class="blockquote text-center">
                                <p class="mb-0"><i class="fas fa-history fa-1x"></i>&nbsp;EMPLOYMENT HISTORY</p>
                            </blockquote>
                            <div class="form-group">
                                <label for="position">Position Applying for:</label>
                                <input type="text" class="form-control" id="position1">
                            </div> 
                            <div class="d-flex flex-row-reverse">
                                <div class="p-2">
                                    <button class="btn btn-primary open1 next sendResume" type="button" id="submitResume">
                                    Submit <span class="fa fa-arrow-right"></span>
                                    </button>
                                </div>
                                <div class="p-2">
                                    <button class="btn btn-dark back3 back" type="button">
                                        <span class="fa fa-arrow-left"></span> Back
                                    </button>
                                </div>
                            </div> 
                        </div>
                        <!-- SHOWING MESSAGE TO SEND -->
                        <div class="tab-pane fade" id="5" role="tabpanel" aria-labelledby="contact-tab" hidden>
                            <blockquote class="blockquote text-center">
                                <p class="mb-0"><i class="fas fa-history fa-1x"></i>&nbsp;RESUME</p>
                            </blockquote>
                            <div id="data"></div> 
                            <div class="d-flex flex-row-reverse">
                                <div class="p-2">
                                    <button class="btn btn-primary open1 next sendResume" type="button" id="sendResume">
                                    Send Application<span class="fa fa-arrow-right"></span>
                                    </button>
                                </div>
                            </div> 
                        </div>
                    </form>
                    </div>
                </div>
            </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="js/autocomplete.js"></script> <!-- javascript of autocomplete fields-->
    <script src="js/calendar.js"></script> <!-- javascript to calculate age -->
    <script src="js/main_mine.js"></script> <!-- validating and recollecting data -->
    <script src="js/vendor/jquery.ui.widget.js"></script> 
    <script src="js/jquery.fileupload.js"></script>
   <!-- <script src="js/jquery.iframe-transport.js"></script> -->
    <script src="https://use.fontawesome.com/6580c24c74.js"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>
   

   <script  >
    $(document).ready(function () {
        
        var id = setInterval( function(){
            if (typeof jQuery !== "undefined") {
                $(document).find("body").prepend('<script src="js/jquery.iframe-transport.js"><\/script>');
                clearInterval(id);
                return;
            } 
        } , 500 );


   /*     $("#fileupload").fileupload( {
            url:'index.php',
            dropZone: '#dropZone',
            dataType: 'json',
            autoUpload: false
        }).on('fileuploadadd', function(e, data) {

            
            var fileTypeAllowed = /.\.(jpg|png|jpeg)$/i;
            var fileName = data.originalFiles[0]['name'];
            var fileSize = data.originalFiles[0]['size'];

            var file    = data.originalFiles[0]; //document.querySelector('input[type=file]').files[0];
            var reader  = new FileReader();

            reader.addEventListener("load", function () {
                $("#files").fadeIn().html('<p><img id="photo" style="width:100px; height:100px" src="'+reader.result+'"/></p>');
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }*/

/*
        console.log("fileupload: ",data);
            if(!fileTypeAllowed.test(fileName))
                $("#error").html('Only images are allowed');
            else if (fileSize > 2150000)
                $("#error").html('Your file is too big! Max allowed size is: 1MB');
            else {
                console.log("add->" , data);
                $("#error").html("");
                data.submit();
            }
            
        }).on('fileuploaddone', function(e,data){

            console.log("data->" , data);
            var status = data.jqXHR.responseJSON.status;
            var msg = data.jqXHR.responseJSON.msg;

            console.log(status);
            if(status == 1){
                var path = data.jqXHR.responseJSON.path;
               // $("#files").fadeIn().html('<p><img style="width:100px; height:100px" src="'+path+'"/></p>');
            } else {
                $("#error").html(msg);
            }

        }).on('fileuploadprogressall', function(e,data){
            console.log("progress->" , data);
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $("#progress").html("Completed: "+ progress + "%");*/
      //  });
    });
    </script>
</body>
</html>