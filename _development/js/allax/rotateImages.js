/*Rotate Images
 */

function rotateImages()
{
  
    var rotateImagesArray = [];
        
      for(var count=0;count<($(".headerBackgroundImage").length);count++)
      {
        
        rotateImagesArray.push($(".headerBackgroundImage").eq(count));
        
        $(rotateImagesArray[rotateImagesArray.length-1]).css("display","none");
                
      }
  
    $(rotateImagesArray[rotateImagesArray.length-1]).find(".start").switchClass("start", "finish", 0);
     
   $(rotateImagesArray[rotateImagesArray.length-1]).css("display","block");

  if(rotateImagesArray.length > 1)
    {

      setInterval(function(){
                
        rotateImagesArray.push(rotateImagesArray.shift());

        for(var count=0;count<rotateImagesArray.length;count++)
        {
                    
          $(rotateImagesArray[count]).find(".finish").switchClass("finish", "start", 0);
          
        }

       $(rotateImagesArray[rotateImagesArray.length-1]).fadeToggle("slow", "linear",function(){
                    
         $(this).find(".start").switchClass("start", "finish", 1000);
         
          for(var count=0;count<rotateImagesArray.length-1;count++)
          {
            
            $(rotateImagesArray[count]).css("display","none");
            
          }

       });

      },7000);

    }

  
}