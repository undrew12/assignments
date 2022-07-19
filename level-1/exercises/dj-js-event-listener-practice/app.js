document.getElementById("square").addEventListener("mouseenter", () => {
    changeColor('blue')
})
document.getElementById("square").addEventListener("mousedown", () => {
    changeColor('red')
})
document.getElementById("square").addEventListener("mouseup", () => {
    changeColor('yellow')
})
document.getElementById("square").addEventListener("dblclick", () => {
    changeColor('green')
})
window.getElementById("square").addEventListener("scroll", () => {
    changeColor('orange')
})

document.addEventListener('keydown', function(e) {
    let colors = {
        r: "red",
        b: "blue",
        y: "yellow",
        g: "green",
        o: "orange"
    }

    let square = document.getElementById('square')


    if (e.key === 'r') square.style.backgroundColor = colors['r']
    else if (e.key === 'b') square.style.backgroundColor = colors['b']
    else if (e.key === 'y') square.style.backgroundColor = colors['y']
    else if (e.key === 'g') square.style.backgroundColor = colors['g']
    else if (e.key === 'o') square.style.backgroundColor = colors['o']

})

function changeColor(color) {
    document.getElementById('square').style.backgroundColor = color
}