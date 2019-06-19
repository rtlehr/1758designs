// THIS IS THE JAVASCRIPT TEMPLATE

(function(window) {

    application = function(caller) {

        /**
         * Holds the instance of the class that called this 
         * 
         * @property currentSection
         * @type {class}
         */
        this.caller = caller;

        /**
         * Initialize the class 
         *
         * @private
         * @method init
         */

        this.init();

    }

    application.prototype.init = function() {

        //Get the hright of the window
        console.log("Class has been created: " + this.caller);

    };

})(window);

$(document).ready(function(){
  
//SEND CONTACT EMAIL
  
      $('#contactForm').submit(function(e) {
        
        alert("submit clicked");
               
        e.preventDefault();

     });



  
  
});

/*********************
 * 
 * Called when the page starts scrolling
 *
 **********************/

function beginPageScroll() {
    console.log("beginPageScroll: ");
}

/*********************
 * 
 * Called when the page stops scrolling
 *
 **********************/

function endPageScroll() {

    console.log("endPageScroll: ");

    //Reset animation... I need a flag to allow for this to be set in the DIV	
    if (_allax.checkSectionPlayed("animation_nav")) {

        //console.log("reseting club section");
        //_allax.resetSection("ourClub_nav");

    }

}

/*********************
 * 
 * Called when the header design changes from the full header to the menu header
 *
 **********************/


function headerChange() {

    console.log("Form application.js header changed: " + $("#headerImages"));

    //Hide rotating images when the inside header is shown
    $("#headerImages").toggle();

}

/*********************
 * 
 * Called when the page gets to the "Events" section
 *
 **********************/

function services_nav() {
    
    console.log("------ services_nav ------");
    switchBackgrounds();

}

function footer_nav() {

      console.log("------ footer_nav ------");

    switchBackgrounds();

}

var topBackgroundimageArray = [];

topBackgroundimageArray.push("backgoundImageOne");
topBackgroundimageArray.push("backgoundImageTwo");
topBackgroundimageArray.push("backgoundImageThree");
topBackgroundimageArray.push("backgoundImageFour");

var count = 0;

$(".allax-image").each(function(){
  
  $(this).addClass(topBackgroundimageArray[count++]);
  
});

//$("#topImage").addClass(topBackgroundimageArray[0]);
//$("#image2").addClass(topBackgroundimageArray[1]);

var currentClass;
var currentImage = 0;
var oldImage = 0;

function switchBackgrounds()
{
    
/*
  for(var count=0;count<$(".allax-image").length;count++)
  {
  
    $(".allax-image").eq(count).switchClass(topBackgroundimageArray[topBackgroundimageArray.length-1], topBackgroundimageArray[0], 0);
    
    topBackgroundimageArray.push(topBackgroundimageArray.shift());
    //console.log("Background images: " + topBackgroundimageArray[topBackgroundimageArray.length-1] + ":" + topBackgroundimageArray[0]);
        
    console.log("loop switch: " + topBackgroundimageArray);
    
  }
  */
  
}

/*********************
 * 
 * Called when the events has finished loading and formating (this is called from events.js)
 *
 **********************/

var _this = this;

function eventsCompleted() {

    console.log("     eventsCompleted");
  
  $("#whatTheyNeed").focus(function(){
    
    $(this).val('');
    
  });
  
  // Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='contactForm']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      phoneNumber: "required",
      whatTheyNeed: "required"
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your name",
      email: "Please enter a valid email address",
      phoneNumber: "Please enter a phone number",
      whatTheyNeed: "Please tell us a little of your needs"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
            
      console.log("form: " + form);
      
         $.ajax({
            type: "POST",
            url: 'assets/php/sendContactEmail.php',
            data: $(form).serialize(),
            success: function(response)
            {
                
              _this.openModal('modalWindow');
              
           },
           error: function (jqXHR, textStatus, errorThrown) { alert(jqXHR.status);
            alert(errorThrown); }
          });
            
      return false;
           
    }
  });
});

}
