const ele_colors = document.getElementsByClassName("controls__color")

function chage_color(event) {
    //console.log(event)
    ctx.strokeStyle = event.target.style.backgroundColor;
    ctx.fillStyle = event.target.style.backgroundColor;
    console.log("using color is " + event.target.style.backgroundColor)
}
//console.log(Array.from(colors))

if (ele_colors) {
    Array.from(ele_colors).forEach(ele_colors => ele_colors.addEventListener("click", chage_color));
}


// const array1 = ['a', 'b', 'c', 'd'];
// array1.forEach(element => console.log(element));

// function colordown(event) {
//     console.log(event)
// }


// if (iscolors) {
//     iscolors.addEventListener("click", function colordown() {
//         console.log(iscolors.)
//     })
// }

const colors = ["pink", "lemonchiffon", "yellowgreen", "skyblue", "violet"]