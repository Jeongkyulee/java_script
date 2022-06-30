const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");


//const iscolors = document.getElementById("controls__colors")

canvas.width = 600;
canvas.height = 600;

ctx.lineWidth = 2.5;
ctx.strokeStyle = "black";


let painting = false;
//let onmousecanvas = false;


function start_painting() {
    painting = true;
    //    onmousemove()
}

function stoppainting(event) {
    painting = false;
    //console.log(painting);
}

function onmousemove(event) {
    //onmousecanvas = true
    //console.log(event)
    //console.log(event)
    const event_offset_x = event.offsetX;
    const event_offset_y = event.offsetY;
    //console.log(event_offset_x + " " + event_offset_y)
    addEventListener("mouseenter", onmouseenter)

    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(event_offset_x, event_offset_y);
    } else {
        ctx.lineTo(event_offset_x, event_offset_y);
        ctx.stroke();
    }
}

// function onmousedown(event) {
//     const event_down_x = event.offsetX;
//     const event_down_y = event.offsetX;
//     painting = true;
//     //console.log(event_down_x, event_down_y)
// }

// function onmouseup(event) {
//     painting = false;
// }

// function onmouseleave(event) {
//     onmousecanvas = false;
// }

if (canvas) {
    canvas.addEventListener("mousemove", onmousemove)
    canvas.addEventListener("mousedown", start_painting) //click
    canvas.addEventListener("mouseup", stoppainting) //click over
    canvas.addEventListener("mouseleave", stoppainting)
}