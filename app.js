const draggableElement = document.getElementById('draggable');
const draggableElm = document.getElementById('draggable-one');
const dropContainer = document.getElementById('drop-container');
draggableElm.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'Drag me!');
});
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

