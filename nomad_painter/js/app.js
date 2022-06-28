const canvas = document.getElementById("jsCanvas");

function onmousemove(event) {
    console.log(event)
}

if (canvas) {
    canvas.addEventListener("mousemove", onmousemove)
}