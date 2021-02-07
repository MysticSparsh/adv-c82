
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var currentPosX, currentPosY, lastPosX, lastPosY;

canvas.addEventListener("mousedown", mouseDownFn);

function mouseDownFn(e) {

    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;

    mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseup", mouseUpFn);

function mouseUpFn(e) {

    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", mouseLeaveFn);

function mouseLeaveFn(e) {

    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", mouseMoveFn);

function mouseMoveFn(e) {

    currentPosX = e.clientX - canvas.offsetLeft;
    currentPosY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currentPosX, currentPosY, radius, 0, 2 * Math.PI);
        ctx.moveTo(lastPosX, lastPosY);
        ctx.stroke();
    }

    lastPosX = currentPosX;
    lastPosY = currentPosY;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

