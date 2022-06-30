const jsbrush = document.getElementById("jsRange");

function chage_brush_size(event) {
    console.log("brush size is " + event.target.valueAsNumber)
    console.log(event)
    ctx.lineWidth = event.target.valueAsNumber;
}


if (jsbrush) {
    jsbrush.addEventListener("input", chage_brush_size)
}