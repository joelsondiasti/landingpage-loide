function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

const sizeOfThings = () => {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var orientation = screen.orientation;
    console.log("🚀 ~ file: devhelper.js ~ line 10 ~ sizeOfThings ~ orientation", orientation)

    
    
    var screenWidth = screen.width;
    var screenHeight = screen.height;   
        
    child1.innerHTML = 'Window: '+ windowWidth + 'x' + windowHeight;
    child2.innerHTML = 'Screen: ' + screenWidth + 'x' + screenHeight;
    child3.innerHTML = 'Orientation: ' + orientation.type;
}

var body = document.getElementsByTagName('body')[0];
var father = document.createElement('div');
var child1 = document.createElement('div');
var child2 = document.createElement('div');
var child3 = document.createElement('div');

father.appendChild(child1)
father.appendChild(child2)
father.appendChild(child3)

css(father, {
    'position': 'absolute',
    'padding': '5px',
    'top': '0', 
    'left': '0',
    'display':'inline-flexbox',
    'align-items': 'center',
    'z-index': '100',
    'font-size': '10px',
    'background-color': '#000000b0',
    'color': '#fff'
} )
body.appendChild(father)

window.addEventListener('load', ()=>{
   sizeOfThings();
})
  
window.addEventListener('resize', ()=>{
    sizeOfThings();
});