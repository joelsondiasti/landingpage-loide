function sizeOfThings(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    
    var screenWidth = screen.width;
    var screenHeight = screen.height;
    

    document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;
    document.querySelector('.screen-size').innerHTML = screenWidth + 'x' + screenHeight;
    //document.querySelector('.vh-size').innerHTML = vwToPixels
    
  };
  
  sizeOfThings();
  
  window.addEventListener('resize', function(){
      sizeOfThings();
  });