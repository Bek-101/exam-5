const draggableElement = document.getElementById('draggable');
const dropContainer = document.getElementById('drop-container');

draggableElement.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'Drag me!');
});

dropContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    e.target.textContent = data;
});
