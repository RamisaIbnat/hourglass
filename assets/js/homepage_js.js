
jQuery(document).ready(function($) {
        $(".bubble-speech").hide();


    //Login box animate from top
        $("#LOGIN_ID").click(function() {

               $( ".LOG_IN_MASTER_CONTAINER" ).animate({
                    top: "+34%"
                  }, 500, function() {
                    // Animation complete.
                    console.log('animation complete');
                });
        });

        $('.LOGIN_Submit').click(function() { 

            $( ".LOG_IN_MASTER_CONTAINER" ).animate({
                    top: "-40%"
                }, 500, function() {
                    // Animation complete.
                    console.log('animation complete');
                });  

        });

   //cancel Login box animate from top
        $(".Cancel_Login").click(function() {

            $( ".LOG_IN_MASTER_CONTAINER" ).animate({
                    top: "-40%"
                }, 500, function() {
                    // Animation complete.
                    console.log('animation complete');
                });  

        });

//SIGNUP BOX ANIMATE FROM TOP
        $("#SIGNUP_ID").click(function() {

               $( ".SIGNUP_MASTER_CONTAINER" ).animate({
                    top: "+20%"
                  }, 500, function() {
                    // Animation complete.
                    console.log('animation complete');
                });
        });

        $('.Signup_Submit').click(function() { 

            $( ".SIGNUP_MASTER_CONTAINER" ).animate({
                    top: "-70%"
                }, 500, function() {
                    // Animation complete.
                    console.log('animation complete');
                });  

        });


//SIGNUP BOX CANCEL ANIMATE FROM TOP
        $(".Cancel_Signup").click(function() {


            $( ".SIGNUP_MASTER_CONTAINER" ).animate({
                    top: "-70%"
                }, 500, function() {
                    // Animation complete.
                    console.log('animation complete');
                });  


        });

  });
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
            $uploadedImg[0].style.backgroundImage='url('+e.target.result+')';
    };

    reader.readAsDataURL(input.files[0]);
  }
}

var $form = $("#imageUploadForm"), 
    $file = $("#file"), 
    $uploadedImg = $("#uploadedImg"), 
    $helpText = $("#helpText")
;
$file.on('change', function(){
  readURL(this);
  $form.addClass('loading');
});
$uploadedImg.on('webkitAnimationEnd MSAnimationEnd oAnimationEnd animationend', function(){
  $form.addClass('loaded');
});
$helpText.on('webkitAnimationEnd MSAnimationEnd oAnimationEnd animationend', function(){
  setTimeout(function() {
    $file.val('');  $form.removeClass('loading').removeClass('loaded');
  }, 5000);
});