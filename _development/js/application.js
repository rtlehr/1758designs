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
        
       /*  $.ajax({
            type: "POST",
            url: 'mail.php',
            data: $(this).serialize(),
            success: function(response)
            {
                var jsonData = JSON.parse(response);
 
                // user is logged in successfully in the back-end
                // let's redirect
                if (jsonData.success == "1")
                {
                    alert("Mail sent to: " + jsonData.emailaddress);
                }
                else
                {
                    alert('Invalid Credentials!');
                }
           }
       });
       */
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

$("#topImage").addClass(topBackgroundimageArray[0]);

var currentClass;
var currentImage = 0;
var oldImage = 0;

function switchBackgrounds()
{
      
    oldImage = currentImage;
  
    currentImage++;  
    
    if(currentImage >= topBackgroundimageArray.length)
    {
      currentImage = 0;
    }
      
    $("#topImage").switchClass(topBackgroundimageArray[oldImage], topBackgroundimageArray[currentImage], 0);
  
}

/*********************
 * 
 * Called when the events has finished loading and formating (this is called from events.js)
 *
 **********************/

function eventsCompleted() {

    console.log("     eventsCompleted");
    
  $('#contactForm').submit(function(e) {
        
        e.preventDefault();
                               
         $.ajax({
            type: "POST",
            url: 'assets/php/sendContactEmail.php',
            data: $(this).serialize(),
            success: function(response)
            {
                
              _this.openModal('modalWindow');
              
              /*
                var jsonData = JSON.parse(response);
 
                // user is logged in successfully in the back-end
                // let's redirect
                if (jsonData.success == "1")
                {
                    //alert("Mail sent to: " + jsonData.emailaddress);
                }
                else
                {
                    alert('Invalid Credentials!');
                }
                */
           },
           error: function (jqXHR, textStatus, errorThrown) { alert(jqXHR.status);
            alert(errorThrown); }
          });
       

        });

}
