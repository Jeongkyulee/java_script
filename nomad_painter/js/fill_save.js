const mode = document.getElementById("jsMode")
const saved = document.getElementById("jsSave")
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);


let filling = false;

function fill_paint_click(event) {
    if (filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function move_cm(event) {
    event.preventDefault();
}

function move_saved(event) {

    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image
    link.download = "Paint[⭐]";
    link.click();
    console.log(link.download)
}

function change_mode(event) {
    if (filling == true) {
        filling = false;
        mode.innerText = "Fill"
    } else {
        filling = true;
        mode.innerText = "Paint"

    }
}
if (mode) {
    mode.addEventListener("click", change_mode)
}
if (saved) {
    saved.addEventListener("click", move_saved)
}

if (canvas) {
    canvas.addEventListener("click", fill_paint_click)
    canvas.addEventListener("contextmenu", move_cm)
}

// ctx.fillRect(50, 20, 100, 49);
// ctx.fillStyle = "red";
// ctx.fillRect(80, 100, 100, 49);