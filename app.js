let boxes = document.querySelectorAll(".box");
let right = document.getElementById("right");
let left = document.getElementById("left");
let center = document.getElementById("center");



for (box of boxes){
 box.addEventListener("dragstart", function(e){
    let selected = e.target;

    right.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    right.addEventListener("drop", function (e){
        right.appendChild(selected);
        selected = null;
    });

    left.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    left.addEventListener("drop", function (e){
        left.appendChild(selected);
        selected = null;
    });

    center.addEventListener("dragover" , function (e){
        e.preventDefault();
    });

    center.addEventListener("drop", function (e) {
        center.appendChild(selected)
        selected = null;
    })
})

}