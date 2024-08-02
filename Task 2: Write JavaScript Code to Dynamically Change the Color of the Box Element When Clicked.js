// styleHandler.js
function changeColor(element) {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const currentColor = element.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    element.style.backgroundColor = newColor;
}
