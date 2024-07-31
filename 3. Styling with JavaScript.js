// Task 1: Create an HTML structure with at least 5 elements that will be styled dynamically.

// Sample HTML structure
// <div id="box" onclick="changeColor()">Click me to change color</div>

// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.

function changeColor() {
    const box = document.getElementById("box");
    box.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.

// Example: Mouse hover effect
const hoverElement = document.getElementById("hoverElement");
if (hoverElement) {
    hoverElement.addEventListener("mouseenter", function() {
        hoverElement.style.fontSize = "24px";
    });
    hoverElement.addEventListener("mouseleave", function() {
        hoverElement.style.fontSize = "16px";
    });
} else {
    console.error("hoverElement not found.");
}

// Example: Button click effect
const buttonElement = document.getElementById("buttonElement");
if (buttonElement) {
    buttonElement.addEventListener("click", function() {
        buttonElement.style.backgroundColor = getRandomColor();
    });
} else {
    console.error("buttonElement not found.");
}
