// styleHandler.js
document.addEventListener('DOMContentLoaded', () => {
    const hoverBox = document.getElementById('hoverBox');
    const toggleButton = document.getElementById('toggleButton');
    const boxes = document.querySelectorAll('.box');

    hoverBox.addEventListener('mouseover', () => {
        hoverBox.style.backgroundColor = 'orange';
    });

    hoverBox.addEventListener('mouseout', () => {
        hoverBox.style.backgroundColor = 'lightgreen';
    });

    toggleButton.addEventListener('click', () => {
        boxes.forEach(box => {
            if (box.style.display === 'none') {
                box.style.display = 'inline-block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});
