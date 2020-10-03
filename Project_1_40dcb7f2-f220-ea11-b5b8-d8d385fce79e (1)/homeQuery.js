$(function()
{  
    var width = 900;  
    var animationSpeed = 1000;  
    var pause = 3000;  
    var currSlide = 1;  
    var $slider = $('#ImageSlider');  
    var $sliderAnimation = $slider.find('.ImageSlides');  
    var $slides = $sliderAnimation.find('.Slide');  
  
    setInterval(function()
    {  
        $sliderAnimation.animate({'margin-left': '-='+width}, animationSpeed, function(){  
        currSlide ++;
         if(currSlide === $slides.length)  
         {  
                $sliderAnimation.css('margin-left', 0);  
                currSlide = 1;  
         }  
     });  
    },pause);  
});  